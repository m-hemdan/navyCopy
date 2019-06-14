<template>
<div>
     <v-navigation-drawer
    v-model="showDialog" 
    absolute
    temporary
     >
      <v-toolbar>
        <v-toolbar-title>shop by department</v-toolbar-title>
      </v-toolbar>
      <v-list>
      <v-list-tile v-for="item in items"
                            :key="item.key"
                            router
                            :to="item.link">
             <v-list-tile-content>
                  <v-list-tile-title class="title">{{ item.content }}</v-list-tile-title>
             </v-list-tile-content>
             <v-list-tile-action>
               <v-icon>fast_forward</v-icon>
             </v-list-tile-action>
      </v-list-tile>
      </v-list>
    </v-navigation-drawer>
     <v-container fluid >
      <v-layout justify-space-between>
          <v-flex xs1 >
              <div class="hidden-lg-and-up">
                  <v-btn flat @click="showDialog =true" style="font-size:12px">
                      <v-icon left>menu</v-icon>
                       shop by department
               </v-btn>
              </div>
          </v-flex>
          <v-flex xs9 text-xs-center text-sm-center text-md-center>
               <div>
                   <v-img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Old_Navy_Logo.svg/640px-Old_Navy_Logo.svg.png"></v-img>
                   <v-flex class="hidden-md-and-down" row wrap>
                     <!--  <v-btn v-for="item in items" 
                       flat
                       :key="item.key" 
                       router
                       :to="item.link">{{item.content}}</v-btn>-->
                        <v-menu min-width="100%"  open-on-hover bottom offset-y 
                        v-for="(item,index) in items" :key="index">
                        <template v-slot:activator="{ on }">
                            <v-btn
                            flat
                            class="gray--text"
                            v-on="on"
                            >
                            {{item.content}}
                            </v-btn>
                        </template>
                        <v-list v-if="index==0" class="contentMenu">
                            <v-layout row wrap>
                                <v-flex xs2 offset-xs1 
                                v-for="(itemHeader,indexHeader) in headerItemWomen"
                               :key="indexHeader">
                                <v-list-tile 
                               
                                >
                                <v-list-tile-title style="font-weight:bold">
                                    {{itemHeader.mainTitle}}
                                </v-list-tile-title>
                           
                            </v-list-tile>
                             <v-divider width="90%" ></v-divider>
                               <v-layout row wrap> 
                                       <v-flex>
                                  <v-list-tile xs6
                                  style="height:20px"
                                  v-for="(itemSubHeader,indexSubHeader) in itemHeader.subHeader" 
                                  router
                                  :to="itemSubHeader.link"
                                  :key="indexSubHeader">
                                     <v-list-tile-content   >
                                         <v-list-tile-title style="font-size:11px;">
                                             {{itemSubHeader.content}}
                                         </v-list-tile-title>
                                     </v-list-tile-content>
                                 </v-list-tile>
                                   </v-flex>
                               </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-list>
                         <v-list v-if="index==1" class="contentMenu">
                            <v-layout row wrap>
                                <v-flex xs2 offset-xs1 
                                v-for="(itemHeader,indexHeader) in headerItemWomenPlus"
                               :key="indexHeader">
                                <v-list-tile 
                                @click="true"
                                >
                                <v-list-tile-title style="font-weight:bold">
                                    {{itemHeader.mainTitle}}
                                </v-list-tile-title>
                           
                            </v-list-tile>
                             <v-divider width="90%" ></v-divider>
                               <v-layout row wrap> 
                                       <v-flex>
                                  <v-list-tile xs6
                                  style="height:20px"
                                  v-for="(itemSubHeader,indexSubHeader) in itemHeader.subHeader" 
                                  router
                                  :to="itemSubHeader.link"
                                  :key="indexSubHeader">
                                     <v-list-tile-content   >
                                         <v-list-tile-title style="font-size:11px;">
                                             {{itemSubHeader.content}}
                                         </v-list-tile-title>
                                     </v-list-tile-content>
                                 </v-list-tile>
                                   </v-flex>
                               </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-list>
                         <v-list v-if="index==2" class="contentMenu">
                            <v-layout row wrap>
                                <v-flex xs2 offset-xs1 
                                v-for="(itemHeader,indexHeader) in matrinty"
                               :key="indexHeader">
                                <v-list-tile 
                                @click="true"
                                >
                                <v-list-tile-title style="font-weight:bold">
                                    {{itemHeader.mainTitle}}
                                </v-list-tile-title>
                           
                            </v-list-tile>
                             <v-divider width="90%" ></v-divider>
                               <v-layout row wrap> 
                                       <v-flex>
                                  <v-list-tile xs6
                                  style="height:20px"
                                  v-for="(itemSubHeader,indexSubHeader) in itemHeader.subHeader" 
                                  router
                                  :to="itemSubHeader.link"
                                  :key="indexSubHeader">
                                     <v-list-tile-content   >
                                         <v-list-tile-title style="font-size:11px;">
                                             {{itemSubHeader.content}}
                                         </v-list-tile-title>
                                     </v-list-tile-content>
                                 </v-list-tile>
                                   </v-flex>
                               </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-list>
                        <v-list v-if="index==3" class="contentMenu">
                            <v-layout row wrap>
                                <v-flex xs2 offset-xs1 
                                v-for="(itemHeader,indexHeader) in men"
                               :key="indexHeader">
                                <v-list-tile 
                                @click="true"
                                >
                                <v-list-tile-title style="font-weight:bold">
                                    {{itemHeader.mainTitle}}
                                </v-list-tile-title>
                           
                            </v-list-tile>
                             <v-divider width="90%" ></v-divider>
                               <v-layout row wrap> 
                                       <v-flex>
                                  <v-list-tile xs6
                                  style="height:20px"
                                  v-for="(itemSubHeader,indexSubHeader) in itemHeader.subHeader" 
                                  router
                                  :to="itemSubHeader.link"
                                  :key="indexSubHeader">
                                     <v-list-tile-content   >
                                         <v-list-tile-title style="font-size:11px;">
                                             {{itemSubHeader.content}}
                                         </v-list-tile-title>
                                     </v-list-tile-content>
                                 </v-list-tile>
                                   </v-flex>
                               </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-list>
                        <v-list v-if="index==4" class="contentMenu">
                            <v-layout row wrap>
                                <v-flex xs2 offset-xs1 
                                v-for="(itemHeader,indexHeader) in girl"
                               :key="indexHeader">
                                <v-list-tile 
                                @click="true"
                                >
                                <v-list-tile-title style="font-weight:bold">
                                    {{itemHeader.mainTitle}}
                                </v-list-tile-title>
                           
                            </v-list-tile>
                             <v-divider width="90%" ></v-divider>
                               <v-layout row wrap> 
                                       <v-flex>
                                  <v-list-tile xs6
                                  style="height:20px"
                                  v-for="(itemSubHeader,indexSubHeader) in itemHeader.subHeader" 
                                  router
                                  :to="itemSubHeader.link"
                                  :key="indexSubHeader">
                                     <v-list-tile-content   >
                                         <v-list-tile-title style="font-size:11px;">
                                             {{itemSubHeader.content}}
                                         </v-list-tile-title>
                                     </v-list-tile-content>
                                 </v-list-tile>
                                   </v-flex>
                               </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-list>
                        <v-list v-if="index==5" class="contentMenu">
                            <v-layout row wrap>
                                <v-flex xs2 offset-xs1 
                                v-for="(itemHeader,indexHeader) in boy"
                               :key="indexHeader">
                                <v-list-tile 
                                @click="true"
                                >
                                <v-list-tile-title style="font-weight:bold">
                                    {{itemHeader.mainTitle}}
                                </v-list-tile-title>
                           
                            </v-list-tile>
                             <v-divider width="90%" ></v-divider>
                               <v-layout row wrap> 
                                       <v-flex>
                                  <v-list-tile xs6
                                  style="height:20px"
                                  v-for="(itemSubHeader,indexSubHeader) in itemHeader.subHeader" 
                                  router
                                  :to="itemSubHeader.link"
                                  :key="indexSubHeader">
                                     <v-list-tile-content   >
                                         <v-list-tile-title style="font-size:11px;">
                                             {{itemSubHeader.content}}
                                         </v-list-tile-title>
                                     </v-list-tile-content>
                                 </v-list-tile>
                                   </v-flex>
                               </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-list>
                        </v-menu>
                   </v-flex>
               </div>

          </v-flex>
          <v-flex xs2 text-xs-center>
              <v-text-field 
           
              append-icon="search"
              label="Search..."
              required>
              <v-icon right>search</v-icon></v-text-field>  
              <v-btn flat @click="goToAdmin">admin</v-btn>
              </v-flex>
            
      </v-layout>
   <div class="divider"></div>
    </v-container>
</div>
</template>


<script>
export default {
   data()
   {
       return {
          showDialog:false
       }
   },
    computed: {
        items()
        {
            return this.$store.getters.loadContent
        },
        headerItemWomen()
        {
            return this.$store.getters.headerItemWomen
        },
        headerItemWomenPlus()
        {
            return this.$store.getters.headerItemWomenPlus
        },
        matrinty()
        {
            return this.$store.getters.matrinty
        },
        men()
        {
            return this.$store.getters.men
        },
        girl()
        {
            return this.$store.getters.girl
        },
        boy()
        {
            return this.$store.getters.boy
        }
    },
    methods:{
        goToAdmin()
        {
            this.$router.push('/admin')
        }
    }
}
</script>

<style scoped>
.logo
{
    margin: auto;
    display: block;
    width:30%;
    height: 30%;
}
.divider
{
    width:100%;
    height: 1px;
    background-color: gray;
}
.contentMenu
{
    border-radius: 20px;
    
}
</style>
