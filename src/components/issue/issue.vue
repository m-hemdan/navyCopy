<template>
    <div >
        <v-container fluid="">
          
            <v-layout>
                <v-flex xs12 sm6 offset-sm3 >
                  <div class="issue">
                      <h1 >Create Issue, {{allUser.firstName}}</h1>
                      <div class="issueContainer">
                       <v-textarea v-model="issueText"  placeholder="what is your mind"></v-textarea>
                      </div>
                      <v-btn @click="addIssue" class="shareIssue primary text-xs-center">share</v-btn>
                  </div>
                </v-flex>
            </v-layout>
            <v-divider style="width:80%;margin-left:auto;margin-right:auto"></v-divider>
            <v-layout mt-2 >
                <v-flex xs12 sm6 offset-sm3>
                    <h2 class="gray--text" style="font-family:cursive;text-shadow:2px 2px gray">Suggestion</h2>
                   <transition appear enter-active-class="animated bounceInLeft">
                       <v-flex>  
                           <v-card name=" " class="mt-3"  v-for="issue in allIssue" :key="issue.id" >
                    <v-card-title >  
                         <v-avatar size="60"> 
                              <v-img  class="" src="https://techinfofeed.com/wp-content/uploads/2019/02/cute-whatsapp-dp-images-38.jpg"></v-img>
                         </v-avatar>   
                        <v-card-title style="text-transform:capitalize;font-weight:bold">
                            <p>   {{issue.customerName  }} 
                                  <v-flex class="time" >{{chooseTime(issue.issueTime)}}</v-flex>
                            </p>
                          
                        </v-card-title>
                        <v-spacer ></v-spacer>
                        <div>
                            <v-menu transition="scale-transition" v-if=" user.id == issue.customerId">
                                <template v-slot:activator="{on}">
                                 <v-icon v-on="on" right="" >more_horiz</v-icon>
                                </template>
                                <v-list >
                                    <v-list-tile style="height:100%"  @click="deleteIssue(issue.issueId)" >
                                        <v-list-tile-title>
                                      <v-btn  flat style="height:100%" >   Delete</v-btn>
                                        </v-list-tile-title>
                                    </v-list-tile>
                                     <v-list-tile >
                                        <v-list-tile-title >
                                           <app-edit :issue="issue"></app-edit>
                                        </v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                        </div>                  
                    </v-card-title>
                   
                    <v-divider style="background-color:pink;width:90%;margin-left:auto;margin-right:auto"></v-divider>
                    <v-card-text>
                        {{ issue.issueText}}
                    </v-card-text>
                    </v-card>
                       </v-flex>
                   </transition>
                </v-flex>
            </v-layout>
         
        </v-container>
    </div>
</template>

<script>

export default {
created()
{
    this.$store.dispatch("returnIssue")
},
data(){
    return{
       issueText:'',
       show:true,
       editDialog:false
    }
},
computed:
{
    user()
    {
      return this.$store.getters.user  
    },
    allUser()
    {
       return this.$store.getters.allUser
    },
    allIssue()
    {
       console.log(this.$store.getters.allIssue)
      
        return this.$store.getters.allIssue
    }
},
methods:{
    addIssue()
    {
        if (! this.issueText)
        {
            alert("sorry pleace add your issue")
            return
        }
        const myData={
            customerName:this.allUser.firstName,
            issueText:this.issueText,
            issueTime:Date().toString()
        }
        this.$store.dispatch("issueAdd",myData)
        this.issueText=''
    },
    deleteIssue(id)
    {
       this.show=false
       console.log("ok")
        this.$store.dispatch("deleteIssue",id)
    },
     chooseTime(time)
  {
     var mydate = new Date()
     mydate.setTime(Date.parse(time))
     var hour =mydate.getUTCHours()
      var min =mydate.getUTCMinutes()
      var month = mydate.getUTCMonth()
     var stringMonth=["jan","feb","mar","Apr","may","jun","july","Aug","sep","oct","nov","dec"]
     
      return  hour +":"+min+ " "+ stringMonth[month]
  },
  fun()
  {
      this.editDialog=true
  }
}

}
</script>

<style scoped>
.issue 
{
    box-shadow: 5px 5px  #8888886e ;
    border:1px solid gray;
    border-radius: 5px;
    background: #ECEFF1;
   

}
.issue >h1
{
    font-family: cursive;
    padding:10px;
       width:100%;
    background:#B0BEC5;
    color: #263238;
    border-bottom: 1px solid #263238;

}
.issueContainer
{
    background: #ECEFF1;
    
    padding: 1rem;
}
.shareIssue
{
   
width:98%;
}
.newIssue
{
    background: pink;
   color:red;
   border:2px solid gray; 
}
.time
{
    color:gray;
}

</style>
<!--<template>
    <div class="container">
        <issuseGride :quotes="quotes"></issuseGride>
        <newIssue @issueAdded="addIssue"> </newIssue>
    </div>
</template>

<script>
import issuseGride from './issueGride'
import newIssue from './newIssue'
export default {
    components:{
        issuseGride,
        newIssue
    },
    data()
    {
        return  {
        quotes:["a","b","c"],
        maxQuites:10
        }
    },
    methods:
    {
        addIssue(quote)
        {
         this.quotes.push(quote)
        }
    }
}
</script>

<style>

</style>
-->