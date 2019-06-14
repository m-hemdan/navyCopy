import * as firebase from 'firebase'
import router from '../../router'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default {
    state:
    {
        shoesData:[],
        topsData:[]
    },
    getters:{
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
        topsData(state)
        {
            return state.topsData
        },
        selectOneTop(state)
        {
            return id=>
            {
                return state.topsData.find(elem=>{
                    return elem.id == id 
                })
            }
        }
        
    },
    mutations:
    {
        shoesData({state},payload)
        {
            state.shoesData=payload
        },
        topsData(state,payload)
        {
            state.topsData=payload
        }
    },
    actions:
    {
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
        loadTopsItem({commit})
        {
                commit ("isloading",true)
            firebase.database().ref("tops").once('value')
            .then(data=>{
                const obj=data.val()
                const mydata=[]
                for(let key in obj)
                {
                    mydata.push({
                        id:key,
                       name: obj[key].name,
                       color:obj[key].color,
                       description:obj[key].description,
                       price:obj[key].price,
                       size:obj[key].size,
                       image:obj[key].image,
                       orignalQuantity:obj[key].number
                    })
                }
                commit("topsData",mydata)
                commit ("isloading",false)
               
            })
            .catch(error=>{
                commit("error",error)
            })
        },
        updateQuanItem({commit},payload)
        {
            const obj={}
            if(payload.quantity)
            {
                obj.number=payload.orignalQuantity-payload.quantity
            }
          
          firebase.database().ref("/tops/").child(payload.id).update(obj)
          .then(data=>{
              console.log("succ updata")
          })
          .catch(error=>{
              console.log(error)
          })
        }
    }
}