<template>
  <v-app  
  v-scroll="onScroll">
     <v-toolbar dark app  justify-space-between :style="mystyle"   id="navbar" >
  <v-toolbar-title>
      <v-toolbar-items >    
            <v-btn flat @click="showDialog=! showDialog" class="hidden-md-and-up">
            <v-icon  >menu</v-icon>
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
            <v-menu transition="scale-transition">
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
       <p  class="pragToolbar"  >free shipping on order of $50 </p>
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
          <div class="dialog">
             <h1 class="gray--text">free shipping + free return</h1>
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
        <v-menu transition="slide-y-transition" offset-y right v-if="userAuth">
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
            <v-img src="https://oldnavy.gapcanada.ca/Asset_Archive/GFWeb/content/0011/943/943/assets/ubar_icon.svg"></v-img>
                     
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
          
        <v-flex xs6 >
          <v-layout row wrap>
             <v-flex xs3> 
               <div class="text-xs-center">
                 <v-bottom-sheet v-model="sheet">
                   <template v-slot:activator>
                     <v-btn flat>
                       <v-avatar size="30">
                       <v-img  src="https://oldnavy.gapcanada.ca/Asset_Archive/GFWeb/content/0011/943/943/assets/ubar_icon.svg"></v-img>
                       </v-avatar>
                     </v-btn>
                   </template>
                     <v-list>
                     <v-layout row justify-center align-center >
                       <v-flex xs6 sm4 md3 ma-2>
                         <v-card>
                           <v-img pa-2 src="https://oldnavy.gapcanada.ca/Asset_Archive/ONWeb/content/0017/217/878/assets/190610_016F_CA_BRONG40off_PromoDrawer_0616.svg"></v-img>
                             <v-card-actions>
                               <v-layout justify-space-between="" style="height:40px">
                                 <v-btn flat>CLICK TO APPLAY</v-btn>
                                 <div class="text-xs-center" hidden-md-and-down>
                                    <v-dialog 
                                    v-model="dialogFirstOffer"
                                    width="800"
                                    
                                    
                                    >
                                    <template v-slot:activator="{on}">
                                    <v-btn v-on="on" 
                                    style="color:gray;font-size:12px">Details</v-btn>
                                    </template>
                                    <v-card style="border-radius:5px" >
                                       <v-card-title
                                          class="headline grey lighten-2">
                                          <v-spacer></v-spacer>
                                        
                                          <v-icon flat right=""
                                          @click="dialogFirstOffer=false" >close</v-icon>
                                        
                                      </v-card-title>
                                       <v-card-text>
                                         <p style="margin-bottom:20%;font-size:1.2rem;font-weight:bold">40% off at Banana Republic, Gap & Old Navy: Offer valid from 6/16/19 at 12:00am PT to 6/17/19 at 11:59pm PT in Canada only at Banana Republic online, Gap online, and Old Navy online. Offer cannot be applied to purchase of GiftCards, packaging, applicable taxes, or shipping and handling charges and not valid on the following merchandise: Banana Republic: Monogram, BR Picks, leather apparel, suede apparel, 100% cashmere, 100% silk, fragrances, sunglasses, Designer Collections & Collaborations, Heritage, the Pride Collection and third-party branded merchandise. Not combinable with other offers.; Gap: Performance Denim, Cashmere, Leather and/or Suede Apparel and Accessories, Ingrid & Isabel, BCRF, and Gap + Pride Collection.; Old Navy: Hot Deal, Today Only Deal, 2 Days Only Deal, Best Seller, Licensed Product, and Beauty merchandise. Offer not valid on international shipments. In-store prices may vary and may differ from online prices. Offer is good for multiple uses online during term of promotion. No minimum purchase required. Offer is non-transferable and not valid for cash or cash equivalent. Offer cannot be combined with Gap Inc. employee discount or any other offers or discounts. Offer subject to change without notice. Must enter promo code FAMILY at checkout to receive offer.</p>
                                       </v-card-text>
                                    </v-card>
                                    </v-dialog>
                                </div>
                               </v-layout>
                             </v-card-actions>
                         </v-card>
                       </v-flex>
                         <v-flex xs6 sm4 md3 ma-2>
                           <v-card>
                           <v-img  src="https://oldnavy.gapcanada.ca/Asset_Archive/ONWeb/content/0017/217/878/assets/190610_011E_USCA_SCEarn_PromoDrawer.svg"></v-img>
                           <v-card-actions>
                           <v-layout justify-space-between=""  style="height:40px">
                            <p style="width:130px;line-height:.85rem;font-size:12px">MINIMUM PURCHASE THRESHOLDS AND OTHER RESTRICTIONS APPLY.</p>
                           <div class="text-xs-center">
                             <v-dialog 
                             v-model="dialogSecondOffer"
                             width:500>
                             <template v-slot:activator="{on}">
                            <v-btn v-on="on" style="color:gray;font-size:12px">Details</v-btn>
                             </template>
                             <v-card>
                               <v-card-title
                             class="headline grey lighten-2"
                              >
                                 <v-spacer></v-spacer>
                                 <v-icon right="" @click="dialogSecondOffer=false">close</v-icon>
                               </v-card-title>
                               <v-card-text>
                                <p style="margin-bottom:20%;font-size:1.2rem;font-weight:bold">Super Cash: Earn up to $60 in Super Cash at Old Navy stores, Old Navy Outlet stores,
                                   and online in Canada only from 6/10/19 at 12:00 am PT to 7/19/19 at 11:59 pm PT 
                                   while supplies last. Redeem up to $60 in Super Cash at Old Navy stores,Old Navy Outlet
                                    stores, and online in Canada only from 7/20/19 at 12:00 am PT to 7/28/19 at 11:59 pm PT. 
                                    Not valid to earn or redeem at other Gap Inc. brands or in our clearance centers. Minimum 
                                    purchase requirements to earn and redeem Super Cash excludes gift cards, packaging, 
                                    shipping & handling, gift wrap, and taxes. EARN & REDEEM MINIMUM PURCHASE THRESHOLDS:
                                     Spend $25-$49.99 to earn/redeem $10 coupon; Spend $50-$74.99 to earn/redeem $20 coupon;
                                      Spend $75-$99.99 to earn/redeem $30 coupon; Spend $100-$124.99 to earn/redeem $40 coupon 
                                      (can only earn online and in-store only during double earn period ); Spend $125-$149.99
                                       to earn/redeem $50 coupon (can only earn online); Spend $150 or more to earn/redeem $60
                                        coupon (can only earn in-store during double earn period). If amount of a purchase is 
                                        less than the threshold to use full value of coupon, any unused balance of coupon will
                                         be forfeited. Limit one Super Cash coupon earned and redeemed per transaction. 
                                         Valid for one time use only and has no cash value. Cannot be combined with other 
                                         offers/discounts, or employee discount. Coupon must be presented at time of purchase 
                                         in store or enter code at online checkout. Upon redemption, coupon’s discount value
                                          will be equally spread across all items in the transaction. If you return some or 
                                          all merchandise purchased with coupon, the dollar value of coupon will not be 
                                          refunded or credited back. Not responsible for lost or stolen coupons. Coupon 
                                          cannot be applied to previous purchases. Coupon is non-transferrable and not for 
                                          resale. See www.oldnavy.ca/supercash for details, or call 1-800-653-6289 with
                                           questions</p> 
                                </v-card-text>                     
                                </v-card>
                                </v-dialog>
                           </div>
                           </v-layout>
                         </v-card-actions>
                          </v-card>
                         
                       </v-flex>
                     </v-layout>
                   </v-list>
                 </v-bottom-sheet>
                  </div>
             </v-flex>
           <v-flex xs3>
             <v-btn xs3 flat="">
            <div v-if="loading"></div>
            <div v-else
            @click="goToCheckout"
            class="bag">{{ mybag.length}} 
            </div>
          </v-btn>
           </v-flex>
          </v-layout>
        </v-flex>
          </v-layout>
        </v-flex>
  </v-toolbar>
  
  
  
<v-divider></v-divider>
  <v-content  >
    
        <router-view name="a"></router-view>
        <router-view></router-view>
 
   </v-content>
   </v-app>
</template>
<script>
import { setTimeout } from 'timers';


export default {
created()
{   
 this.changePopUp
},
  data()
  {
    return {
      
      mystyle:{
        background:"black",
        opacity:1
      },
      dialogSecondOffer:false,
      dialogFirstOffer:false,
      sheet:false,
      showDialog:false,
      show:false,
      titles:[
        {main:"Gap",link:'/sign'},
        {main:"old navy",link:"/"},
        {main:'banana republic',link:'/issue'},
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
  computed :
  {
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
    },
    changePopUp()
    {
      setTimeout(() => {
        this.sheet=true
      }, 3000);
    },
  }
  ,
  methods:
  {
    logout()
    {
       this.$store.dispatch("logout")
    },
    goToCheckout()
    {
      this.$router.push("/checkout")
    },
    onScroll(e)
    {
      if( window.pageYOffset > 500)
      {
        
     //   console.log("down"+window.pageYOffset)
        this.mystyle.opacity=.6
      }
      else
      {
    //    console.log("up"+window.pageYOffset)
        this.mystyle.opacity=1
        
      }
  
    
    }
   
   
  },
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
      