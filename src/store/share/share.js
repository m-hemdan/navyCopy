import Vue from 'vue'
import Vuex from 'vuex'
import router from '../../router'
import * as firebase from 'firebase'
Vue.use(Vuex)
export default 
{
    state:{
       
        allUser:{
            id:'',
            email:'',
            firstName:"",
           },
         
        myEmail:'',
        user:null,
        
        error:null,
        loading:false,
       
       
    },
    getters:{
    
        myEmail(state)
        {
            return state.myEmail
        },
        loading(state)
        {
            return state.loading
        },
        error(state)
        {
            return state.error
        },
        user(state)
        {
            return state.user
           
        },
        allUser(state)
        {
            
            return state.allUser
        },
        
           
    },
    mutations:{
        continueSignUp(state,email)
        {
            state.myEmail=email
            router.push('/signUp')
        },
        isloading(state,payload)
        {
            state.loading=payload
        },
        error(state,payload)
        {
            state.error=payload
        },
        setUser(state,payload)
        {
           
            state.user=payload
        },
        setAlluser(state,payload)
        {
           state.allUser.id=payload.id,
           state.allUser.firstName=payload.firstName,
           state.allUser.email=payload.email
           
        },
    
       
        
    }
    ,
    actions:{
        signInUser({dispatch,commit},payload)
        {
            commit("isloading",true)
          firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
          .then((data)=>{
               
                
               const user={

                   id:firebase.auth().currentUser.uid,
                   fbkeys:{},
                   registerData:[] 
                  
               }
            
             commit("setUser",user) 
             dispatch("getSignInUser")
            
           
             router.push("/")
            commit("isloading",false)
          })
          .catch(error=>{
            commit("isloading",false)
            commit("error",error)
          })
        },
        getSignInUser({getters,commit,dispatch})
        {
            const user=getters.user.id
          firebase.database().ref('users').once('value')
          .then(data=>{
             const obj=data.val()
          
          for(let key in obj)
          {
              if (user == obj[key].createId)
              {
                  commit("setAlluser",{
                      id:key,
                      email:obj[key].email,
                      firstName:obj[key].firstName
                    })
                    return
               }
              else
              {
                  console.log("no here")
              }
          }
         
        
          })
          .catch(error=>{
            commit("error",error)
          })
        }
    ,
        signUpUser({commit,dispatch},payload)
        {          
            firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
            .then(data=>{
                console.log("succsess")
               
            const newUser={  
                id:firebase.auth().currentUser.uid,
                fbkeys:{},
                registerData:[]
                }
               
                commit("setUser",newUser)
                dispatch("storeAllData",payload)
            })
            
            .catch(error=>{
                commit("error",error)
                                
            })
                      
        },
        storeAllData({commit,getters,dispatch},payload)
        {
            commit("isloading",true)
            const newUser={
                email:payload.email,
                password:payload.password,
                firstName:payload.firstName,
                lastName:payload.lastName,
                language:payload.language,
                postalCode:payload.postalCode,
                createId:getters.user.id
            }
           
            firebase.database().ref('users').push(newUser)
            .then(data=>{
                const key=data.key
                   commit("setAlluser",{...newUser,id:key})
                  commit("isloading",false)
                  router.push('/account_summery')
               })
               .catch(error=>{
                   commit("isloading",false)
                   commit("error",error)
               })
        },
       
        autoSignIn({commit},payload)
        {
            commit("setUser",{id:payload.uid,registerMeetup:[],fbkeys:{}
        })
        },
        logout({commit,getters,state})
        {
            firebase.auth().signOut()
            commit("setUser",null)
             commit("emptyBag")
           //  state.mybag=[]
             router.push("/")
        }
        ,
        storeDataItem({commit},payload)
        {
            firebase.database().ref('shoes').push(payload)
            .then(data=>{
                console.log("succ")
            })
            .catch(error=>{
                commit("error",error)
                console.log(error)
            })
        },
        storeTopsItem({commit},payload)
        {
            firebase.database().ref("tops").push(payload)
            .then(data=>{
                console.log("succ top")
                alert("add ok")
            })
            .catch(error=>{
                commit("error",error)
                console.log(error)
            })
        },
        deleteItem({commit,state,getters},id)
        {
            const userId=getters.user.id
        

           const itemDeleted=getters.loadMyBag.indexOf( getters.loadMyBag.find(elem=>{
                return elem.id==id
             }))
            getters.loadMyBag.splice(itemDeleted,1)
            
          //  firebase.database().ref("/bags/"+userId+"/mybag/"+id).remove()
            firebase.database().ref("/bags/"+userId).child("/mybag/"+id).remove()
            .then(data=>{
          
               
            })
            .catch(error=>{
                commit("error",error)
            })
        },
        updateQuantity({commit,getters},payload)
        {
            const userId=getters.user.id
            const  obj={}
            if(payload.quantity)
            {
                obj.quantity=payload.quantity
            }
            firebase.database().ref("/bags/"+userId+"/mybag/").child(payload.id).update(obj)
            .then(data=>{
             
                commit("updateQuantity",payload)
            })
            .catch(error=>{
               commit("error",error)
            })
        }

    }

}

