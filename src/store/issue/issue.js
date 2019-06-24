import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase  from 'firebase'
Vue.use(Vuex)
export default
{
   state:{
       allIssue:{}
   },
   getters:
   {
       allIssue(state)
       {
           return state.allIssue
       }
   },
   mutations:
    {
        allIssue(state,payload)
        {
            state.allIssue=payload
        },
        updateIssue(state,payload)
        {
         const elem= state.allIssue.find(elem=>{
                return elem.issueId==payload.issueId
            })
            if(elem)
             { 
              elem.issueText=payload.issueText
            }
            else
            {
                console.log("no")
            }
        }
    },
   actions:
   {
    issueAdd({commit,getters},payload)
    {
      const userId= getters.user.id
        firebase.database().ref('/issue/'+userId).push(payload)
        .then(data=>{
             getters.allIssue.push({...payload,customerId:userId})
        })
        .catch(error=>{console.log(error)})
    },
    returnIssue({commit})
    {
        
     firebase.database().ref('issue').once('value')
     .then(data=>{
      const obj =data.val()
      const customerIssue=[]
      for(let customer in obj)
      {
          for (let key in obj[customer])
          {
              customerIssue.push({
            customerId:customer,
            issueId:key,
            customerName:obj[customer][key].customerName,
            issueText:obj[customer][key].issueText,
            issueTime:obj[customer][key].issueTime
           })
          }
       }
    
       commit("allIssue",customerIssue)
    

     })
     .catch(error=>{console.log(error)})
    },
    deleteIssue({state,getters},payload)
    {
        setTimeout(()=>{
            const userId=  getters.user.id
            const elem= getters.allIssue.find(elem=>{
                 return elem.issueId == payload
             })
             firebase.database().ref('/issue/'+userId).child(payload+"").remove()
             .then(data=>{
                 getters.allIssue.splice(elem,1)
             })
             .catch(error=>{
                 alert("sorry you cant")
             })
             
        },1500)
      
    },
    updateIssue({commit,getters},payload)
    {
        const obj={

            issueText:payload.issueText
            
        }
        const userId = getters.user.id
       firebase.database().ref("/issue/"+userId).child(payload.issueId).update(obj)
       .then(data=>{
           
           commit("updateIssue",{issueText:payload.issueText,issueId:payload.issueId})
       })
       .catch(error=>{
           console.log("there erro update")
       })
    }
   }
}
