import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './components/home'
import newCustomer from './components/users/newCustomer.vue'
import signIn from './components/users/signIn.vue'
import signOut from './components/users/signOut.vue'
import signUp from './components/users/signUp'
import discount from './components/discount/discount.vue'
import accountSummery from './components/users/accountSummery.vue'
import shoes from './components/pageContent/women/shoes/shoes.vue'
import loadShoes from './components/pageContent/women/shoes/loadShoes.vue'
import  admin from './components/admin/admin.vue'
import checkOut from './components/checkout/checkout.vue'
import tops from './components/pageContent/women/tops/tops.vue'
import loadTops from './components/pageContent/women/tops/loadTops.vue'
import issue from './components/issue/issue.vue'
Vue.use(VueRouter)
export const routes=[
    {
        path:"/",components:
       {
           default:discount,
           a:home
       
    }},
     {path:"/newCustomer",components:
        {
            default:newCustomer,
            a:home
        }
    },
       { path:"/sign",components:
        {
            default:signIn,
            a:home
        },
        
     },
     {
         path:'/signOut',
         components:
         {
             default:signOut,
             a:home
         }
     },
     {
         path:"/signUp",
         components:
         {
             default:signUp,
             a:home
         }
     },
     {
         path:"/account_summery",
         components:{
             default:accountSummery,
             a:home
         }
     },
     {
         path:"/shoes",
         components:{
             default:shoes,
             a:home
         }
     },
     {
         path:"/admin",
         components:{
             default:admin,
             a:home
         }
     },
     {
         path:"/shoes/:id",
         components:{
             default:loadShoes,
             a:home
         },
         props:true
     },
     {
         path:"/checkout",
         components:{
             default:checkOut,
             a:home
         }
     },
     {
         path:"/tops",
         components:{
             default:tops,
             a:home
         }
     },
     {
         path:"/tops/:id",
         components:
         {
             default:loadTops,
             a:home
         }
     },
     {
     path:"/issue",
     components:
     {
         default:issue,
         a:home
     }
     }
]
export default new VueRouter({
    mode:"history",
    routes
   
})
