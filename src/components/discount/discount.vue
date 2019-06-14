<template>
<div>
    <div class="discount">
      <img class="discountImg" src="https://i.ibb.co/7z9sKL0/Capture5.png">  
   
       <v-flex text-xs-center>
           <v-btn
           flat
           class="white--text content"
           
            v-for="item in items" 
           :key="item.key"
           router
           :to="item.link">{{item.content}}</v-btn>
       </v-flex>
       <img class="discountImg" src="https://i.ibb.co/NxY2Rdw/Capture2.png">  
       
      </div>
       <div class="hotTip">
         <v-layout justify-space-between>
           <v-flex  > 
               <h2 >    hot tip :don't let the sun set on all thise deal</h2>
              </v-flex> 
              <v-flex>  <v-btn right class="black white--text">shop now</v-btn>
              </v-flex>
            </v-layout>
        </div>
        <div>
            <img class="discountImg" src="https://i.ibb.co/H2mXNjt/Capture4.png">
        </div>
</div>
</template>
<script>
export default {
    computed:
    {
        items()
        {
            return this.$store.getters.loadContent
        }
    }
}
</script>

<style scoped>
.discount
{
    
    background-image:linear-gradient(to right,rgba(255, 17, 0, 0.644),rgba(255, 81, 0, 0.692));
   background-position: top;
}
.discountImg
{
    width:100%;
   
}
.content
{
    font-weight: bold;
    text-decoration: underline;
}
.hotTip
{ 
    text-transform: uppercase;
    padding: 3rem;
    color: blue;
}
</style>
