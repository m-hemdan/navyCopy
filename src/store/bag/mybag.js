import Vue from 'vue'
import Vuex from 'vuex'
import router from '../../router'
import * as firebase from 'firebase'
Vue.use(Vuex)
export default 
{
    state:{
        mybag:[ ],
        total:0,
        discount:0,
        costAfterSaving:0,
        costAfterTax:0
    },
    getters:{
        loadMyBag(state)
        {
            return state.mybag
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
    mutations:
    {
        loadMyBag(state,payload)
        {
            state.mybag=payload
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
    },
    actions:
    {
        addToBag({state,commit,getters,dispatch},payload)
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
                           quantity:payload.quantity,
                           url:payload.url

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
    }
}