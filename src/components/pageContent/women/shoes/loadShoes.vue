<template>
<div v-if="loading" class="text-xs-center">
  <v-progress-circular
      indeterminate
      :size="70"
      color="primary"
    ></v-progress-circular>
</div>
   <div v-else>
       <v-container fluid>
           <v-layout row wrap>
               <v-flex xs12 hidden-sm-and-up>
                   <v-carousel>
                       <v-carousel-item 
                       v-for="i in 4"
                       :key="i"
                       :src="selectShoes.url"></v-carousel-item>
                   </v-carousel>
               </v-flex>
               <v-flex hidden-xs-only  sm3 md2 >
                   <div v-for=" i in 4 " :key="i" class="ma-1">
                       <v-img :src="selectShoes.url"  style="width:150px;height:150px"></v-img>
                   </div>
               </v-flex>
               <v-flex hidden-xs-only sm9 md6 class="justify-center">
                <div >
                    <v-img :src="selectShoes.url" style="width:100%;height:100%;"></v-img>
                </div>
               </v-flex>
               <v-flex md4 xs12 >
                   <v-card class="ma-1 pa-2">
                       <v-card-title>
                        <div>
                            <h2 style="color:gray">{{selectShoes.description}}</h2>
                            <h3>{{selectShoes.price | currency}}</h3>
                            <p>Best seller</p>
                            <p>Color:leapard</p>
                            <p>Size : {{ size }}</p>
                            <v-btn flat class="size" @click="changeSize(i+5)" v-for="i in 5" :key="i">{{(i+5)}}</v-btn>
                            <v-divider></v-divider>
                        <h3>Fit & size</h3>
                        <p class="fitPragraph">
                            To measure your shoe size, place a piece of paper on the ground. Stand barefoot on the paper. Using a pen, draw an outline of your foot. Use measuring tape to measure the length of your foot on the paper.
                        </p>
                        <v-divider></v-divider>
                        <h3>Quantity:</h3>
                      <span flat class="size" @click="CountQuantity(index)" v-for="index in 5" :key="index.key">{{index}}</span>
                     <p class="red--text" >{{this.warnText}} </p> 
                      <v-card-actions>
                       <v-btn class="indigo darken-4" dark style="width:100%"
                       @click.prevent="addToBag(selectShoes)">Add to bag</v-btn>
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
<<script>
export default {
    data() {
        return {
            size:'',
            warnText:"",
            quantity:1
        }
    },
   props:['id'],
   created() {
         this.$store.dispatch("loadDataItem")
   },
    computed: {
        selectShoes()
        {8
             return this.$store.getters.selectShoes(this.$route.params.id)
        },
        loading()
        {
            return this.$store.getters.loading
        }
    },
    methods: {
        addToBag(payload)
        {
           if (this.size==0)
           { 
               this.warnText="Please select a size before adding to bag."
               return;
           }
         8
            const data ={
                 quantity:this.quantity,
                 id:payload.id,
                 price:payload.price,
                 color:payload.color,
                 url:payload.url,
                 description:payload.description,
                 size:this.size
                 //image:payload.image
                 }
              
             this.$store.dispatch("addToBag",data) 
             // this.$store.getters.loadMyBag8
          
        },
        CountQuantity(num)
        {
            this.quantity=num
           
        },
        changeSize(num)
        {
            this.size=num
            this.warnText=""
            console.log(this.size)
        }
    },
}
</script>
<style scoped>
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
