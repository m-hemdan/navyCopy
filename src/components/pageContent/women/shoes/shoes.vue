<template>
    <div>
       <v-container>
           <v-layout row wrap>
               <v-flex md4 sm6 xs12  v-for=" item in store" :key="item.key" >
                <v-card class="ma-1 pa-1">
                    <v-img
                    :src="item.url" 
                    @click="loadMyImage(item.id)"
                    aspect-ratio="2.75"> 
                    </v-img>
                    <v-card-title>
                    
                    <div class="cardContent" style="line-height:80%">
                          <p>{{item.description}}</p>
                           <p class="text-center red--text" style="text-decoration:line-through">{{item.price | currency}}</p>
                          <p class="text-center">{{item.price | currency}}</p>
                          <!--  <v-text-field type="number" value=1 min=1 solo></v-text-field>-->
                                           
                    </div>
                    </v-card-title>
                    
                </v-card>
               </v-flex>
           </v-layout>
       </v-container>
    </div>
</template>
<script>
export default {
    created()
    {
     this.$store.dispatch("loadDataItem")
   
    },
    computed:
    {
        store()
        {
            console.log("arr"+this.$store.getters.shoesData)
          
            return this.$store.getters.shoesData
        }
    },
    methods:{
       
        loadMyImage(id)
        {
           
           this.$router.push("/shoes/"+id)
        }
    }
}
</script>
<style scoped>
.cardContent
{
    margin-left: auto;
    margin-right: auto;
}
</style>
