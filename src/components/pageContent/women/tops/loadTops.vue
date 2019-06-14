<template>
    <div>
        <div v-if="loading" class="text-xs-center">
            <v-progress-circular 
          indeterminate
         :size="70"
          color="primary"></v-progress-circular>
        </div>
        <v-container fluid v-else>
            <v-layout row wrap>
                <v-flex sm3 class="text-xs-center" >
                   <div v-for="i in 4" :key="i" ma-2>
                        <v-img
                       class="ma-3 pa-5"
                        :src="selectOneTop.image"
                        style="width:60%;height:50%">
                       </v-img></div>
                </v-flex>
                <v-flex sm5 class="text-xs-center">
                    <div >
                      <v-img
                        :src="selectOneTop.image"
                        style="width:80%;height:70%"
                       ></v-img>
                    </div>
                </v-flex>
                <v-flex sm4 class="" hidden-sm-and-down>
                     <v-card class="ma-1 pa-2">
                       <v-card-title>
                        <div>
                            <h2 style="color:gray">{{selectOneTop.description}}</h2>
                            <h3>{{selectOneTop.price | currency}}</h3>
                            <p>Best seller</p>
                            <p>Color:leapard</p>
                            <p>Size</p>
                            <v-btn flat class="size" v-for="i in 5" :key="i"
                            @click="selectSize(i+5)">{{(i+5)}}</v-btn>
                            <v-divider></v-divider>
                        <h3>Fit & size</h3>
                        <p class="fitPragraph">
                            To measure your shoe size, place a piece of paper on the ground. Stand barefoot on the paper. Using a pen, draw an outline of your foot. Use measuring tape to measure the length of your foot on the paper.
                        </p>
                        <v-divider></v-divider>
                        <h3>Quantity:</h3>
                      <span flat class="size" @click="selectQuantity(index)" v-for="index in 5" :key="index.key">{{index}}</span>
                       <div > 
                         <p class="red--text" mt-2>{{paragWarning}}</p>
                        </div>
                      <v-card-actions>
                       
                       <v-btn class="indigo darken-4" dark style="width:100%"
                       @click.prevent="addToBag(selectOneTop)">Add to bag</v-btn>
                      </v-card-actions>
                        </div>
                        
                       </v-card-title>
                   </v-card>
                   <v-card>
                       <v-card-actions>
                      <v-btn class="blue-grey lighten-5"  style="width:100%">Find It Now</v-btn>
                       </v-card-actions>
                   </v-card>
                </v-flex>
                </v-layout>
        </v-container>
    </div>
</template>

<script>
import { constants } from 'crypto';
export default {
    created()
    {
        this.$store.dispatch("loadTopsItem")
        
    },
    data() {
      return {
        id:this.$route.params.id,
         size:0,
         quant:1,
         paragWarning:""
        }
    },
    computed:
    {
        selectOneTop()
        {
             return this.$store.getters.selectOneTop(this.id)
        },
        loading()
        {       
          return this.$store.getters.loading
                 
        },
        error()
        {
            return this.$store.getters.error
        }
    },
    methods:
    {
        addToBag(mydata)
        {
             
           if (this.size==0)
           {
               
               this.paragWarning="Please select a size before adding to bag."
                return
           }
           else
           {
               this.$store.dispatch("addToBag",
               {
                   id:mydata.id,
                   size:this.size,
                   quantity:this.quant,
                   url:mydata.image,
                   description:mydata.description,
                   color:mydata.color,
                   price:mydata.price


               })
                          
               this.$store.dispatch("updateQuanItem",{id:mydata.id,quantity:this.quant,orignalQuantity:mydata.orignalQuantity})
           }
        },
        selectSize(size)
        {
            this.paragWarning=""
            this.size=size
        },
        selectQuantity(quant)
        {
          this.quant=quant
        }
    }
   
}
</script>

<style>
.size
{
    border:1px solid;
    min-width:50px;
    height: 50px;
    margin: 10px;
  cursor: pointer;

}
.fitPragraph
{
    font-size: 12px;
    
}
</style>
