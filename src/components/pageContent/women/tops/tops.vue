<template>
    <div >
        <div v-if="loading " class="text-xs-center">
            <v-progress-circular
            :size="70"
            indeterminate
             color="primary"></v-progress-circular>
        </div>
        <div v-else>
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex  xs12 sm6 md3   v-for="item in items" :key="item.key" >
                      <v-card class="pa-2 ma-1">
                          <v-img :src="item.image"
                           @click="loadOneTop(item.id)"
                           style="width:100%;height:200px;cursor:pointer"></v-img>
                           <div >
                          <p  >{{item.description}}</p>
                           <p class="text-center red--text" style="text-decoration:line-through">{{item.price | currency}}</p>
                          <p class="text-center">{{item.price | currency}}</p>
                          
                                           
                    </div>
                      </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>
<script>
export default {
    created()
    {
        this.$store.dispatch("loadTopsItem")
      
    },
    computed:
    {
        items()
        {
            return this.$store.getters.topsData
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
        loadOneTop(id)
        {
           this.$router.push("/tops/"+id)
        }
    }

}
</script>
<style>
.top
{
  border: 1px solid gray;
}
.cardContent
{
  margin-left: auto;
    margin-right: auto;
}
</style>

