import Vue from 'vue'
import Vuex from 'vuex'
import share from './share/share.js'
import allSection from './allSection/allSection.js'
import Women from './women/women.js'
import mybag from './bag/mybag.js'
Vue.use(Vuex)
export const store =new Vuex.Store({
    modules:{
   share,
   allSection,
   Women,
   mybag
    }
   /* state:{
        pageContent:[
            {id:1,content:"women",link:"/shoes"},
            {id:2,content:"women's Plus"},
            {id:3,content:"MATERNITY"},
            {id:4,content:"men"},
            {id:5,content:"boy"},
            {id:6,content:"Girl"},
            {id:7,content:"toldder"},
            {id:8,content:"baby"},

        ],
        headerItemWomen:[
              {id:1, mainTitle:"New & Now",
                    subHeader:[
                    {id:1,link:"/shoes",content:"new Arrival"},
                    {id:2,link:"/shoes",content: "pride Month"},
                    {id:3,link:"/shoes",content:"Mother's Day Gift"},
                    {id:4,link:"/shoes",content:"Vacation Shop"},
                    {id:5,link:"/shoes",content:"ON trend"},
                    {id:6,link:"/shoes",content:"O canada"},
                    {id:7,link:"/shoes",content: "Family Matching"},
                    {id:8,link:"/shoes",content: "Beauty"}
                    ]},
                    {id:2, mainTitle:"Shop by catalog",
                    subHeader:[
                        {id:1,link:"/tops",content:"Tops"},
                        {id:2,link:"/a",content: " Tees"},
                        {id:3,link:"/a",content:"Graphic Tees"},
                        {id:4,link:"/a",content:"Blouses & Shirts"},
                        {id:5,link:"/a",content:" Dresses"},
                        {id:6,link:"/a",content:" Rompers & Jumpsuits"},
                        {id:7,link:"/a",content:"Shorts"},
                        {id:8,link:"/a",content:"Jeans"},
            
                        
                    ]},
                    {id:3, mainTitle:"Old Navy ",
                    subHeader:[
                        {id:1,link:"/a",content:"Shop All Activewear"},
                        {id:2,link:"/a",content:" Activewear Tops"},
                        {id:3,link:"/a",content:"Activewear Bottoms"},
                        {id:4,link:"/a",content:"Jackets & Hoodies"},
                        {id:5,link:"/a",content:"Sports Bras"}
                    
                    ]},
                    {id:4, mainTitle:"Shoes and accessories ",
                    subHeader:[
                        {id:1,link:"/a",content:" Shoes"},
                        {id:2,link:"/a",content:"Handbags"},
                        {id:3,link:"/a",content:"Socks & Hosiery"},
                        {id:4,link:"/a",content:"Accessories"},
                        {id:5,link:"/a",content:"Beauty"}
                    ]},
                    {id:5, mainTitle:"Spical size ",
                subHeader:[
                    {id:1,link:"/a",content:" petite"},
                    {id:2,link:"/a",content:"tall"},
                
                ]
            },
                    {id:6, mainTitle:"Deals ",
                subHeader:[
                    {id:1,link:"/a",content:"sale"},
                    {id:2,link:"/a",content:"cleanarce"}
                ]
                 }
           ],
           headerItemWomenPlus:[
                 {id:1, mainTitle:"New & Now",
                       subHeader:[
                       {id:1,link:"/a",content:"new Arrival"},
                       {id:2,link:"/a",content:"ON trend"},
                       {id:3,link:"/a",content: "Family Matching"},
                       {id:4,link:"/a",content: "fun the sun "}
                       ]},
                       {id:2, mainTitle:"Shop by catalog",
                       subHeader:[
                           {id:1,link:"/tops",content:"Tops"},
                           {id:2,link:"/a",content: " Tees"},
                           {id:3,link:"/a",content:"Graphic Tees"},
                           {id:4,link:"/a",content:"Blouses & Shirts"},
                           {id:5,link:"/a",content:" Dresses"},
                           {id:6,link:"/a",content:" Rompers & Jumpsuits"},
                           {id:7,link:"/a",content:"Shorts"},
                           {id:8,link:"/a",content:"Jeans"},
                    
                           
                       ]},
                       {id:3, mainTitle:"Old Navy ",
                       subHeader:[
                           {id:1,link:"/a",content:"Shop All Activewear"},
                           {id:2,link:"/a",content:" Activewear Tops"},
                           {id:3,link:"/a",content:"Activewear Bottoms"},
                           {id:4,link:"/a",content:"Jackets & Hoodies"},
                           {id:5,link:"/a",content:"Sports Bras"}
                       
                       ]},
                       {id:4, mainTitle:"Shoes and accessories ",
                       subHeader:[
                           {id:1,link:"/a",content:" Shoes"},
                           {id:2,link:"/a",content:"Handbags"},
                           {id:3,link:"/a",content:"Socks & Hosiery"},
                           {id:4,link:"/a",content:"Accessories"},
                           {id:5,link:"/a",content:"Beauty"}
                       ]},
                       {id:5, mainTitle:"Spical size ",
                   subHeader:[
                       {id:1,link:"/a",content:" petite"},
                       {id:2,link:"/a",content:"tall"},
                   
                   ]
               },
                       {id:6, mainTitle:"Deals ",
                   subHeader:[
                       {id:1,link:"/a",content:"sale"},
                       {id:2,link:"/a",content:"cleanarce"}
                   ]
                    }
              ],
              matrinty:[
                {id:1, mainTitle:"New & Now",
                      subHeader:[
                      {id:1,link:"/a",content:"new Arrival"},
                      {id:2,link:"/a",content:"ON trend"},
                      {id:3,link:"/a",content: "Family Matching"},
                      {id:4,link:"/a",content: "fun the sun "}
                      ]},
                      {id:2, mainTitle:"Shop by catalog",
                      subHeader:[
                          {id:1,link:"/tops",content:"Tops"},
                          {id:2,link:"/a",content: " Tees"},
                          {id:3,link:"/a",content:"Graphic Tees"},
                          {id:4,link:"/a",content:"Blouses & Shirts"},
                          {id:5,link:"/a",content:" Dresses"},
                          {id:6,link:"/a",content:" Rompers & Jumpsuits"},
                          {id:7,link:"/a",content:"Shorts"},
                          {id:8,link:"/a",content:"Jeans"},
            
                          
                      ]},
                      {id:3, mainTitle:"Old Navy ",
                      subHeader:[
                          {id:1,link:"/a",content:"Shop All Activewear"},
                          {id:2,link:"/a",content:" Activewear Tops"},
                          {id:3,link:"/a",content:"Activewear Bottoms"},
                          {id:4,link:"/a",content:"Jackets & Hoodies"},
                          {id:5,link:"/a",content:"Sports Bras"}
                      
                      ]},
                      {id:4, mainTitle:"Shoes and accessories ",
                      subHeader:[
                          {id:1,link:"/a",content:" Shoes"},
                          {id:2,link:"/a",content:"Handbags"},
                          {id:3,link:"/a",content:"Socks & Hosiery"},
                          {id:4,link:"/a",content:"Accessories"},
                          {id:5,link:"/a",content:"Beauty"}
                      ]},
                      {id:5, mainTitle:"Spical size ",
                  subHeader:[
                      {id:1,link:"/a",content:" petite"},
                      {id:2,link:"/a",content:"tall"},
                  
                  ]
              },
                      {id:6, mainTitle:"Deals ",
                  subHeader:[
                      {id:1,link:"/a",content:"sale"},
                      {id:2,link:"/a",content:"cleanarce"}
                  ]
                   }
             ],
             boy:[
                {id:1, mainTitle:"New & Now",
                      subHeader:[
                      {id:1,link:"/a",content:"new Arrival"},
                      {id:2,link:"/a",content:"ON trend"},
                      {id:3,link:"/a",content: "Family Matching"},
                      {id:4,link:"/a",content: "fun the sun "}
                      ]},
                      {id:2, mainTitle:"Shop by catalog",
                      subHeader:[
                          {id:1,link:"/a",content:"Tops"},
                          {id:2,link:"/a",content: " Tees"},
                          {id:3,link:"/a",content:"Graphic Tees"},
                          {id:4,link:"/a",content:"Blouses & Shirts"},
                          {id:5,link:"/a",content:" Dresses"},
                          {id:6,link:"/a",content:" Rompers & Jumpsuits"},
                          {id:7,link:"/a",content:"Shorts"},
                          {id:8,link:"/a",content:"Jeans"},
                  
                          
                      ]},
                      {id:3, mainTitle:"Old Navy ",
                      subHeader:[
                          {id:1,link:"/a",content:"Shop All Activewear"},
                          {id:2,link:"/a",content:" Activewear Tops"},
                          {id:3,link:"/a",content:"Activewear Bottoms"},
                          {id:4,link:"/a",content:"Jackets & Hoodies"},
                          {id:5,link:"/a",content:"Sports Bras"}
                      
                      ]},
                      {id:4, mainTitle:"Shoes and accessories ",
                      subHeader:[
                          {id:1,link:"/a",content:" Shoes"},
                          {id:2,link:"/a",content:"Handbags"},
                          {id:3,link:"/a",content:"Socks & Hosiery"},
                          {id:4,link:"/a",content:"Accessories"},
                          {id:5,link:"/a",content:"Beauty"}
                      ]},
                      {id:5, mainTitle:"Spical size ",
                  subHeader:[
                      {id:1,link:"/a",content:" petite"},
                      {id:2,link:"/a",content:"tall"},
                  
                  ]
              },
                      {id:6, mainTitle:"Deals ",
                  subHeader:[
                      {id:1,link:"/a",content:"sale"},
                      {id:2,link:"/a",content:"cleanarce"}
                  ]
                   }
             ],
             men:[
                {id:1, mainTitle:"New & Now",
                      subHeader:[
                      {id:1,link:"/a",content:"new Arrival"},
                      {id:2,link:"/a",content:"ON trend"},
                      {id:3,link:"/a",content: "Family Matching"},
                      {id:4,link:"/a",content: "fun the sun "}
                      ]},
                      {id:2, mainTitle:"Shop by catalog",
                      subHeader:[
                          {id:1,link:"/a",content:"Tops"},
                          {id:2,link:"/a",content: " Tees"},
                          {id:3,link:"/a",content:"Graphic Tees"},
                          {id:4,link:"/a",content:"Blouses & Shirts"},
                          {id:5,link:"/a",content:" Dresses"},
                          {id:6,link:"/a",content:" Rompers & Jumpsuits"},
                          {id:7,link:"/a",content:"Shorts"},
                          {id:8,link:"/a",content:"Jeans"},
                   
                          
                      ]},
                      {id:3, mainTitle:"Old Navy ",
                      subHeader:[
                          {id:1,link:"/a",content:"Shop All Activewear"},
                          {id:2,link:"/a",content:" Activewear Tops"},
                          {id:3,link:"/a",content:"Activewear Bottoms"},
                          {id:4,link:"/a",content:"Jackets & Hoodies"},
                          {id:5,link:"/a",content:"Sports Bras"}
                      
                      ]},
                      {id:4, mainTitle:"Shoes and accessories ",
                      subHeader:[
                          {id:1,link:"/a",content:" Shoes"},
                          {id:2,link:"/a",content:"Handbags"},
                          {id:3,link:"/a",content:"Socks & Hosiery"},
                          {id:4,link:"/a",content:"Accessories"},
                          {id:5,link:"/a",content:"Beauty"}
                      ]},
                      {id:5, mainTitle:"Spical size ",
                  subHeader:[
                      {id:1,link:"/a",content:" petite"},
                      {id:2,link:"/a",content:"tall"},
                  
                  ]
              },
                      {id:6, mainTitle:"Deals ",
                  subHeader:[
                      {id:1,link:"/a",content:"sale"},
                      {id:2,link:"/a",content:"cleanarce"}
                  ]
                   }
             ],
             girl:[
                {id:1, mainTitle:"New & Now",
                      subHeader:[
                      {id:1,link:"/a",content:"new Arrival"},
                      {id:2,link:"/a",content:"ON trend"},
                      {id:3,link:"/a",content: "Family Matching"},
                      {id:4,link:"/a",content: "fun the sun "}
                      ]},
                      {id:2, mainTitle:"Shop by catalog",
                      subHeader:[
                          {id:1,link:"/a",content:"Tops"},
                          {id:2,link:"/a",content: " Tees"},
                          {id:3,link:"/a",content:"Graphic Tees"},
                          {id:4,link:"/a",content:"Blouses & Shirts"},
                          {id:5,link:"/a",content:" Dresses"},
                          {id:6,link:"/a",content:" Rompers & Jumpsuits"},
                          {id:7,link:"/a",content:"Shorts"},
                          {id:8,link:"/a",content:"Jeans"},
                      
                          
                      ]},
                      {id:3, mainTitle:"Old Navy ",
                      subHeader:[
                          {id:1,link:"/a",content:"Shop All Activewear"},
                          {id:2,link:"/a",content:" Activewear Tops"},
                          {id:3,link:"/a",content:"Activewear Bottoms"},
                          {id:4,link:"/a",content:"Jackets & Hoodies"},
                          {id:5,link:"/a",content:"Sports Bras"}
                      
                      ]},
                      {id:4, mainTitle:"Shoes and accessories ",
                      subHeader:[
                          {id:1,link:"/a",content:" Shoes"},
                          {id:2,link:"/a",content:"Handbags"},
                          {id:3,link:"/a",content:"Socks & Hosiery"},
                          {id:4,link:"/a",content:"Accessories"},
                          {id:5,link:"/a",content:"Beauty"}
                      ]},
                      {id:5, mainTitle:"Spical size ",
                  subHeader:[
                      {id:1,link:"/a",content:" petite"},
                      {id:2,link:"/a",content:"tall"},
                  
                  ]
              },
                      {id:6, mainTitle:"Deals ",
                  subHeader:[
                      {id:1,link:"/a",content:"sale"},
                      {id:2,link:"/a",content:"cleanarce"}
                  ]
                   }
             ]
              ,
        allUser:{
            id:'',
            email:'',
            firstName:"",
           },
        mybag:[ ],
        myEmail:'',
        user:null,
        
        error:null,
        loading:false,
        shoesData:[],
        total:0,
        discount:0,
        costAfterSaving:0,
        costAfterTax:0
    },
    getters:{
        loadContent(state)
        {
            return state.pageContent
        },
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
        loadMyBag(state)
        {
            return state.mybag
        },
        headerItemWomen(state)
        {
            return state.headerItemWomen
        },
        headerItemWomenPlus(state)
        {
            return state.headerItemWomenPlus
        },
        matrinty(state)
        {
            return state.matrinty
        },
        men(state)
        {
            return state.men
        },
        girl(state)
        {
            return state.girl
        },
        boy(state)
        {
            return state.boy
        },
        shoesData(state)
        {
            return state.shoesData
        },
        selectShoes(state)
        {
            return id=>{
               return state.shoesData.find(elem=>{
                   return elem.id==id
               })
            }
        },
        allCost(state)
        {
            return state.total
        },
        saving(state)
        {
            return state.discount
        },
        costAfterSaving(state)
        {
            return state.costAfterSaving
        },
        costAfterTax(state)
        {
            return state.costAfterTax
        }
           
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
        loadMyBag(state,payload)
        {
            state.mybag=payload
        },
        shoesData({state},payload)
        {
            state.shoesData=payload
        },
        allCost(state,payload)
        {
            state.total=payload
        },
        saving(state,payload)
        {
          state.discount =  payload * (15 /100)
        },
        costAfterSaving(state)
        {
            console.log(state.total+" "+state.discount)
            state.costAfterSaving=state.total-state.discount
        },
        costAfterTax(state)
        {
           state.costAfterTax= state.costAfterSaving*(40/100)+(state.costAfterSaving)
        },
        updateQuantity(state,payload)
        {
          
        const elem = state.mybag.find(elem=>{
         return elem.id == payload.id
        })
         if (elem)
        { 
            elem.quantity=payload.quantity
        }
        else{
           alert("something occure")
        }
        }
        
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
        makeBag({commit,getters,dispatch},payload)
        {
          
           
          const mydata={
              id:payload.id,
              url:payload.url,
              price:payload.price,
              color:payload.color,
              quantity:payload.quantity,
              description:payload.description
          }
         
            
           
        },
        addToBag({state,commit,getters},payload)
        {     
             commit("isloading",true)
               const userId=getters.user.id
               const elem= state.mybag.find(elem=>{
               return elem.itemId===payload.id
            })
            
            if (elem)
            {
                console.log(elem)
                const updateObj={} 
                elem.quantity+=payload.quantity                  
                updateObj.quantity=elem.quantity
                firebase.database().ref("/bags/"+userId).child("/mybag/"+elem.id).update(updateObj)
                .then(()=>{
                   
                    commit("isloading",false)
                  })
                  .catch(error=>{
                    commit("error",error)
                      commit("isloading",false)
                  })
                 
                  }
            else
            {
              
                 //  state.mybag.push(payload)
                    firebase.database().ref("/bags/"+userId).child("/mybag/").push(payload)
                    .then(data=>{
                       const key=data.key
                      
                       const newItem={
                           id:key,
                           itemId:payload.id,
                           color:payload.color,
                           description:payload.description,
                           size:payload.size,
                           price:payload.price,
                           quantity:payload.quantity

                       }
                       state.mybag.push(newItem)
                        commit("isloading",false)
                    })
                    .catch(error=>{
                        commit("error",error)
                        commit("isloading",false)
                    })
                    
            }
       
        },
        loadMyBag({commit,getters,dispatch})
        {
            commit("isloading",true)
            const userId= getters.user.id
           
            firebase.database().ref("/bags/"+userId+"/mybag/").once("value")
            .then(data=>{
              const obj= data.val()
              const mybag=[]
              for(let item in obj )
              {
                  mybag.push({
                    id:item,
                    itemId:obj[item].id,
                    url:obj[item].url,
                    color:obj[item].color,
                    price:obj[item].price,
                    quantity:obj[item].quantity,
                    description:obj[item].description

                  })
               }
               
               commit("loadMyBag",mybag)
              
               commit("isloading",false)
            })
            .catch(error=>{
                console.log(error)
                commit("isloading",false)
            })
        }
        ,
        autoSignIn({commit},payload)
        {
            commit("setUser",{id:payload.uid,registerMeetup:[],fbkeys:{}
        })
        },
        logout({commit,state})
        {
            firebase.auth().signOut()
            commit("setUser",null)
            state.mybag=[]
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
        loadDataItem({commit,state})
        {
            commit("isloading",true)
            firebase.database().ref('shoes').once('value')
            .then (data=>{
                const allShoes=[]
                const obj= data.val()
                for (let key in obj)
                {
                   allShoes.push(
                    { 
                     id:key,
                     url:obj[key].image,
                     description:obj[key].description,
                     name:obj[key].name,
                     size:obj[key].size,
                     number:obj[key].number,
                     price:obj[key].price,
                     color:obj[key].color
                    })
                     } 
               
                 state.shoesData=allShoes
                 commit("isloading",false)

            })
            .catch(error=>{
                commit("error",error)
                commit("isloading",false)
              
            })
        },
        allCost({state,commit,getters,dispatch})
        {
            commit("isloading",true)
            let payload=getters.loadMyBag
            let alltotal=0
            for(let key in payload)
            {
              alltotal+=payload[key].price *payload[key].quantity
            }
            commit("allCost",alltotal)
            commit("saving",alltotal)
            commit("isloading",false)
            
        },
        deleteItem({commit,state,getters},id)
        {
            const userId=getters.user.id
        

           const itemDeleted=getters.loadMyBag.indexOf( getters.loadMyBag.find(elem=>{
                return elem.id==id
             }))
            getters.loadMyBag.splice(itemDeleted,1)
            commit("isloading",true)
          //  firebase.database().ref("/bags/"+userId+"/mybag/"+id).remove()
            firebase.database().ref("/bags/"+userId).child("/mybag/"+id).remove()
            .then(data=>{
                commit("isloading",false)
               
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
*/
})