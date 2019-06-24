<template>
<v-container fluid v-if="loading">
    <v-layout  class="justify-center">
       <v-progress-circular
       
      :size="70"
      color="primary"
      indeterminate
    ></v-progress-circular>
    </v-layout>
</v-container>
<v-container fluid v-else>
    <v-layout >
        <v-flex>
            <h4>Your Bag ({{myBag.length}} 
            <span v-if="myBag.length > 1">items </span>
            <span v-else>item</span>)</h4>
        </v-flex>
     </v-layout>
        <v-layout  row wrap>
            <v-flex xs12 md8>
                <div v-if="myBag.length==0">
                
                 </div>
                 <div v-else>
                     <v-container fluid>
                         
                         <v-layout v-for="item in myBag"
                         
                           :key="item.key" style="border:1px solid gray" pa-2 mt-2>
                          <v-flex xs4 >
                              <div>
                                  <v-img :src="item.url" ml-5 style="width:150px;height:200px"></v-img>
                                  <v-btn class="white" mt-2 style="width:120px" >save for later</v-btn>
                              </div>
                          </v-flex>
                          <v-flex xs8 ma-2 pa-2>
                            <div class="descripAllItem">
                               <img style="width:60px;height:20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Old_Navy_Logo.svg/640px-Old_Navy_Logo.svg.png">
                                <span class="descripItem"> {{item.description}}</span>
                                <p style="font-size:11px;color:gray;margin-left:2px">#{{item.id}}</p>
                                <p class="detailsItem" > <label>Color: </label> <span   class=" blue--text descripItemSpan"> {{item.color}}</span></p>
                                <p class="detailsItem"> <label >quantity: </label> <span class=" blue--text descripItemSpan"> {{item.quantity}}</span></p>
                                <p class="detailsItem">  <label >price: </label> <span class=" blue--text descripItemSpan"> {{item.price | currency}}</span></p>
                               <v-select style="width:20%"
                              v-on:change="onchange(item.id)"
                              v-model="select"
                               :items="num"
                               :label="select"
                              solo
                              >
                                
                              </v-select>
                            </div>
                          </v-flex>
                          <v-flex xs2>
                           
                              <v-btn 
                              flat @click="deleteItem(item.id)" text-xs-center> <v-icon  right>close</v-icon></v-btn>
                            
                               <div style="margin-top:200px;font-weight:bold;font-size:16px">{{(item.price*item.quantity) | currency}}</div>
                          </v-flex>
                         </v-layout>
                        
                     </v-container>
                 </div>
            </v-flex>
            <v-flex xs12 md4 pa-2>
                <div v-if=" ! isAuth"></div>
                <div v-else>
                <v-card class="blue-grey lighten-5 black--text" dark>
                    <div>
                  <v-card-title >
                      <v-container fluid>
                    <v-layout  row wrap mt-2>
                        <v-flex xs9> 
                            <span>Subtotla</span> 
                        </v-flex >
                        <v-flex xs3 text-xs-center>
                            <span  >  {{cost | currency}} </span>
                        </v-flex>
                    </v-layout>
                     <v-layout row wrap mt-2>
                        <v-flex xs9> 
                            <span>My saving</span> 
                        </v-flex >
                        <v-flex xs3 text-xs-center>
                            <span  class="red--text" > -{{saving | currency}} </span>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap mt-2>
                        <v-flex xs9 >
                            <h5>Estamiated total</h5>
                            <span class="#78909C--text">Tax calcualted checkout</span>
                        </v-flex>
                        <v-flex xs3 text-xs-center mt-3>
                            {{costAfterSaving | currency}}
                        </v-flex>
                    </v-layout>
                    <v-divider color="gray"></v-divider>
                    <p class="gray--text">You are only <span>{{costAfterTax | currency}}</span> away from FREE Shipping</p>
                  <div>
                   <v-progress-linear  v-model="loadMyBag"></v-progress-linear>
                  </div>
                    <v-layout>
                        <v-flex xs12>
                            <v-btn style="width:100%" class="checkout">checkout
                                <v-icon right>arrow_forward</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                      </v-container>
                    </v-card-title>  
                     </div>
                </v-card>
                <v-card  style="margin-top:10px" class="blue-grey lighten-5 black--text" >
                    <v-card-title>
                        <h4>promotion:</h4>
                    </v-card-title>
                 <v-layout justify-center>
                     <v-flex xs7 text-xs-center >
                         <v-text-field  placeholder="Enter Promotion Code" solo></v-text-field>
                     </v-flex>
                     <v-flex xs3>
                         <v-btn class="white">Apply</v-btn>
                     </v-flex>
                 </v-layout>
                </v-card>
                <v-layout mt-2>
                    <v-flex xs12>
                        <img style="width:100%" src="https://secure-oldnavy.gapcanada.ca/Asset_Archive/ONWeb/content/0017/075/641/assets/190506_030B_US_CA_SC_Earn_shoppingbag_xl.svg">
                    </v-flex>
                </v-layout>
                </div>
            </v-flex>
        </v-layout>
    
    
</v-container>
</template>
<script>

export default {
 data()
 {
     return {
     select:'1',
     show:true
     }
 },
    computed:
    {
        myBag()
        {
            return this.$store.getters.loadMyBag
        },
        cost()
        {
             this.$store.dispatch("allCost")
            return this.$store.getters.allCost
        },
        saving()
        {
            this.$store.commit("costAfterSaving")
            return this.$store.getters.saving
        },
        loading()
        {
            return this.$store.getters.loading
        },
       isAuth()
       {
           return this.$store.getters.allUser
       },
       costAfterSaving()
       {
           return this.$store.getters.costAfterSaving
       },
       costAfterTax()
       {
           this.$store.commit("costAfterTax")
           return this.$store.getters.costAfterTax
       },
       loadMyBag()
       {
           

         const mybag=this.myBag.length
         console.log(mybag)
         if (mybag > 1)
         {
             return 100
         }
         else if (mybag == 1)
          { 
               return 50
         }
         else 
         {
         return 0
         }
       },
       num()
       {
           return ["1","2","3","4","5","6"]
       }
    },
    methods:
    {
        deleteItem(id)
        {
          
            this.show=false
            this.$store.dispatch("deleteItem",id)
        },
        onchange(id)
        {
           const quantity=this.select
          this.$store.dispatch("updateQuantity",{id,quantity})

        }
    }
}
</script>
<style scoped>
.layer
{
    margin-top: 5px;
}
.descripItem
{
    font-weight: bold;
    font-size: 1.5rem
}
.detailsItem
{
    font-size: 16px;
}
.descripItemSpan
{
    text-decoration:underline;
    margin-left:5px
}
.fade-active-enter, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to 
 {
  opacity: 0;
}
 @media screen and (max-width:700px) {
  .descripAllItem :nth-child(n){
   font-size: .95rem;
   
  }
}
</style>
