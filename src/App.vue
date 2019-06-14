<template>
  <v-app>
    
     <v-toolbar dark color="black" app  justify-space-between >
  <v-toolbar-title>
      <v-toolbar-items >    
            <v-btn flat @click="showDialog=! showDialog" class="hidden-md-and-up">
            <v-icon >menu</v-icon>
            </v-btn>
             <v-flex hidden-md-only xs12  text-md-center md4>
            <v-btn 
              hidden-sm-and-down
              flat
              v-for="title in titles"
              :key="title.key"
              router
              :to="title.link">
              {{title.main}}
            </v-btn>
           </v-flex>
     </v-toolbar-items>
          <v-flex xs4 hidden-sm-and-down hidden-lg-and-up>
            <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn
                flat
                v-on="on"
                class="showShop"
                >
          show our shop
          <v-icon>keyboard_arrow_down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile
            v-for="(title, index) in titles"
            :key="index"
            >
            <v-list-tile-title>{{ title.main }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
          </v-flex>
   
      </v-toolbar-title>
           <v-flex xs3  offset-xs2 text-xs-center  hidden-sm-and-down>
          <v-toolbar-items xs3   text-xs-center>
     <p  class="pragToolbar"  >free shipping on order of $50 or more  </p>
       <v-dialog 
       persistent
      
      v-model="show"
      width="550"
     
    >
      <template v-slot:activator="{ on }">
        <v-btn
        style="width:10px"
        class="btnToolbar"
        flat
          color="white--text"
          dark
          v-on="on"
        >
         Details
        </v-btn>
      </template>

      <v-card  style="border-radius:10px;">
        <v-card-title
          class="headline teal lighten-5"
          primary-title
        >
         <v-spacer></v-spacer>
        
         <v-icon  @click=" show=false">close</v-icon>
        
        </v-card-title>

        <v-card-text>
          <div class="dialog"> <h1 class="gray--text">free shipping + free return</h1>
          <v-layout>
            <v-flex xs6  class="">
              <h5>ON ORDERS OVER $50.No code. No Hassle.</h5>
              <ul>
                <li>Select the FREE Every Day option.</li>
                <li>Your order will arrive in 7-12 business days.*</li>
              </ul>
            </v-flex>
            <v-flex xs6 >
              <h5>ON ALL ORDERS.</h5>
              <ul>
                <li>By Mail: Use our interactive returns process</li>
                <li>In Store: Bring items to store with invoice and credit card.</li>
              </ul>
            </v-flex>
            </v-layout>
            <v-layout>
              <p style="font-size:9px">Everyday Free Shipping is valid online only at bananarepublic.ca, oldnavy.ca and gapcanada.ca on purchases of $50 or more in the same order. Eligible customers must select the “Free Every Day” option in the shopping bag to activate the free shipping. Qualifying amount applies to merchandise only, not Giftcards, packaging, applicable taxes or shipping & handling charges. Offer is good for the order’s first “ship-to” address anywhere in Canada. Please allow up to fourteen (14) days for shipments to remote locations. If you choose another shipping option, additional charges will apply. No adjustments on previous purchases. Offer is non-transferable and subject to change without notice. Not valid on international shipments. 
</p>
            </v-layout>
               <v-layout>
              <p style="font-size:9px">* Actual delivery times are subject to change. The delivery times displayed in the shopping bag at the time of your order will reflect when you should expect to receive an order placed on that day and will appear in your order confirmation email.</p>
            </v-layout>
          </div>
           </v-card-text>
      </v-card>
    </v-dialog>
    
          </v-toolbar-items>  
          </v-flex>
        <v-flex xs3 offset-xs1 hidden-sm-and-down >
          <v-layout row wrap>
        <v-flex xs6>
        <v-menu offset-y right v-if="userAuth">
          <template v-slot:activator="{ on }">
          
             <v-btn flat  v-on="on" >
           hello {{ user.firstName }} <br>your acount
            <v-icon right>keyboard_arrow_down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-tile
             v-for="(item,index) in itemsUSer"
              :key="index"
              router 
              :to="item.link">
              <v-list-tile-title >{{item.data}}</v-list-tile-title>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile ><v-btn flat @click="logout">logout</v-btn></v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y right v-else>
          <template v-slot:activator="{ on }">
          
             <v-btn flat  v-on="on" >
           sign in <br>your acount
            <v-icon right>keyboard_arrow_down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-tile
             v-for="(item,index) in items"
              :key="index"
              router 
              :to="item.link">
              <v-list-tile-title >{{item.data}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        </v-flex>
        <v-flex xs6>
          <v-btn flat="">
          <div v-if="loading"></div>
          <div v-else
           @click="goToCheckout"
           class="bag">{{ mybag.length}} 
          </div>
        </v-btn>
        </v-flex>
          </v-layout>
        </v-flex>
  </v-toolbar>
  
     
     
<v-divider></v-divider>
 <v-content>
   <router-view name="a"></router-view>
    <router-view></router-view>
      
   </v-content>
   </v-app>
</template>
<script>

export default {
created()
{   
 

},
  data()
  {
    return {
      showDialog:false,
      show:false,
      titles:[
        {main:"Gap",link:'/sign'},
        {main:"old navy",link:"/b"},
        {main:'banana republic',link:'/c'},
      ],
       items:[
        {data: "signIn",link:'/newCustomer'},
        {data: "new customer",link:'/newCustomer'},
        {data: "order & return",link:'/c'},
        {data: "gift card balance",link:'/e'}
      ],
      itemsUSer:[
        {data:"Account Settings",link:'/a'},
         {data:"order & Return",link:'/a'},
          {data:"Gift Card Balance",link:'/a'},
      ]
    }
  },
  computed:{
    content()
    {
      return this.$store.getters.loadContent
    },
    user()
    {
      
      return this.$store.getters.allUser
    },
  userAuth()
    {
      return this.$store.getters.user
    },
   mybag()
   {

    return this.$store.getters.loadMyBag
    },
    loading()
    {
      return this.$store.getters.loading
    }
  },
  methods:
  {
    logout()
    {
       this.$store.dispatch("logout")
    },
    goToCheckout()
    {
      this.$router.push("/checkout")
    }
  }
}
</script>

<style scoped>
.dialog h1 
{
  text-transform: uppercase;
color: #455A64;
font-size: 2.5rem;
}

.pragToolbar
{
 font-size: 11px;
 margin-top:16px;
  text-transform: uppercase;
 
}
.btnToolbar
{ font-size: 11px;
   border-bottom: .5px solid white;
   
  
}

.showShop
{
text-transform: lowercase;
}
.logo
{
    margin: auto;
    display: block;
    width:50%;
    height: 50%;
}
.logoContainer
{
        margin-left: auto;
        margin-right: auto;
    display: block;
}
.v-divider
{
  height: 2px;
  color: green
}
.bag
{
  padding-top: 30%;
  width: 50px;
  height: 40px;
  background-image: url("https://i.ibb.co/BnxLn2L/156052397843602161-5338250455.jpg");
  background-position: center
}


</style>
  <!--<v-navigation-drawer
    v-model="show" 
    temporary
     >
      <v-toolbar>
        <v-toolbar-title>shop by department</v-toolbar-title>
      </v-toolbar>
      <v-list>
      <v-list-tile v-for="key in content" 
      router
      :to="key.link"
      :key="key.content">
             <v-list-tile-content>
                  <v-list-tile-title class="title">{{ key.content }}</v-list-tile-title>
             </v-list-tile-content>
             <v-list-tile-action>
               <v-icon>fast_forward</v-icon>
             </v-list-tile-action>
      </v-list-tile>
      </v-list>
    </v-navigation-drawer>--> <!--   <v-toolbar-side-icon @click="show=! show" class="hidden-sm-and-up"></v-toolbar-side-icon>-->
      