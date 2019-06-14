import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import {store} from './store/store.js'
import router from './router'
import * as firebase from 'firebase'
import vueResponsiveImage from 'vue-responsive-image'
import dataFilter from './filters/filters'
import currency from './filters/currency'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(vueResponsiveImage)
Vue.use(Vuelidate)
Vue.filter('lowercase',dataFilter)
Vue.filter('currency',currency)
new Vue({
  router,
  store,
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBK8G6nFAgu94QFuT-lO15-dWZgQYPw2X4",
    authDomain: "navydatabase.firebaseapp.com",
    databaseURL: "https://navydatabase.firebaseio.com",
    projectId: "navydatabase",
    storageBucket: "navydatabase.appspot.com",
    })
     firebase.auth().onAuthStateChanged(user=>{
       if(user)
       {
        this.$store.dispatch("autoSignIn",user)
        this.$store.dispatch("getSignInUser")
        this.$store.dispatch("loadMyBag")
       

       }
      
     })
   
  },
  render: h => h(App),
}).$mount('#app')
