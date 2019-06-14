import Vue from 'vue'
import Vuex from 'vuex'
import router from '../../router'
import * as firebase from 'firebase'
Vue.use(Vuex)
export default 
{
    state:{
        pageContent:[
            {id:1,content:"women",link:"/shoes"},
            {id:2,content:"women's Plus"},
            {id:3,content:"MATERNITY"},
            {id:4,content:"men"},
            {id:5,content:"boy"},
            {id:6,content:"Girl"},
            {id:7,content:"toldder"},
            {id:8,content:"baby"},

        ],
        headerItemWomen:[
              {id:1, mainTitle:"New & Now",
                    subHeader:[
                    {id:1,link:"/shoes",content:"new Arrival"},
                    {id:2,link:"/shoes",content: "pride Month"},
                    {id:3,link:"/shoes",content:"Mother's Day Gift"},
                    {id:4,link:"/shoes",content:"Vacation Shop"},
                    {id:5,link:"/shoes",content:"ON trend"},
                    {id:6,link:"/shoes",content:"O canada"},
                    {id:7,link:"/shoes",content: "Family Matching"},
                    {id:8,link:"/shoes",content: "Beauty"}
                    ]},
                    {id:2, mainTitle:"Shop by catalog",
                    subHeader:[
                        {id:1,link:"/tops",content:"Tops"},
                        {id:2,link:"/a",content: " Tees"},
                        {id:3,link:"/a",content:"Graphic Tees"},
                        {id:4,link:"/a",content:"Blouses & Shirts"},
                        {id:5,link:"/a",content:" Dresses"},
                        {id:6,link:"/a",content:" Rompers & Jumpsuits"},
                        {id:7,link:"/a",content:"Shorts"},
                        {id:8,link:"/a",content:"Jeans"},
            
                        
                    ]},
                    {id:3, mainTitle:"Old Navy ",
                    subHeader:[
                        {id:1,link:"/a",content:"Shop All Activewear"},
                        {id:2,link:"/a",content:" Activewear Tops"},
                        {id:3,link:"/a",content:"Activewear Bottoms"},
                        {id:4,link:"/a",content:"Jackets & Hoodies"},
                        {id:5,link:"/a",content:"Sports Bras"}
                    
                    ]},
                    {id:4, mainTitle:"Shoes and accessories ",
                    subHeader:[
                        {id:1,link:"/a",content:" Shoes"},
                        {id:2,link:"/a",content:"Handbags"},
                        {id:3,link:"/a",content:"Socks & Hosiery"},
                        {id:4,link:"/a",content:"Accessories"},
                        {id:5,link:"/a",content:"Beauty"}
                    ]},
                    {id:5, mainTitle:"Spical size ",
                subHeader:[
                    {id:1,link:"/a",content:" petite"},
                    {id:2,link:"/a",content:"tall"},
                
                ]
            },
                    {id:6, mainTitle:"Deals ",
                subHeader:[
                    {id:1,link:"/a",content:"sale"},
                    {id:2,link:"/a",content:"cleanarce"}
                ]
                 }
           ],
           headerItemWomenPlus:[
                 {id:1, mainTitle:"New & Now",
                       subHeader:[
                       {id:1,link:"/a",content:"new Arrival"},
                       {id:2,link:"/a",content:"ON trend"},
                       {id:3,link:"/a",content: "Family Matching"},
                       {id:4,link:"/a",content: "fun the sun "}
                       ]},
                       {id:2, mainTitle:"Shop by catalog",
                       subHeader:[
                           {id:1,link:"/tops",content:"Tops"},
                           {id:2,link:"/a",content: " Tees"},
                           {id:3,link:"/a",content:"Graphic Tees"},
                           {id:4,link:"/a",content:"Blouses & Shirts"},
                           {id:5,link:"/a",content:" Dresses"},
                           {id:6,link:"/a",content:" Rompers & Jumpsuits"},
                           {id:7,link:"/a",content:"Shorts"},
                           {id:8,link:"/a",content:"Jeans"},
                    
                           
                       ]},
                       {id:3, mainTitle:"Old Navy ",
                       subHeader:[
                           {id:1,link:"/a",content:"Shop All Activewear"},
                           {id:2,link:"/a",content:" Activewear Tops"},
                           {id:3,link:"/a",content:"Activewear Bottoms"},
                           {id:4,link:"/a",content:"Jackets & Hoodies"},
                           {id:5,link:"/a",content:"Sports Bras"}
                       
                       ]},
                       {id:4, mainTitle:"Shoes and accessories ",
                       subHeader:[
                           {id:1,link:"/a",content:" Shoes"},
                           {id:2,link:"/a",content:"Handbags"},
                           {id:3,link:"/a",content:"Socks & Hosiery"},
                           {id:4,link:"/a",content:"Accessories"},
                           {id:5,link:"/a",content:"Beauty"}
                       ]},
                       {id:5, mainTitle:"Spical size ",
                   subHeader:[
                       {id:1,link:"/a",content:" petite"},
                       {id:2,link:"/a",content:"tall"},
                   
                   ]
               },
                       {id:6, mainTitle:"Deals ",
                   subHeader:[
                       {id:1,link:"/a",content:"sale"},
                       {id:2,link:"/a",content:"cleanarce"}
                   ]
                    }
              ],
              matrinty:[
                {id:1, mainTitle:"New & Now",
                      subHeader:[
                      {id:1,link:"/a",content:"new Arrival"},
                      {id:2,link:"/a",content:"ON trend"},
                      {id:3,link:"/a",content: "Family Matching"},
                      {id:4,link:"/a",content: "fun the sun "}
                      ]},
                      {id:2, mainTitle:"Shop by catalog",
                      subHeader:[
                          {id:1,link:"/tops",content:"Tops"},
                          {id:2,link:"/a",content: " Tees"},
                          {id:3,link:"/a",content:"Graphic Tees"},
                          {id:4,link:"/a",content:"Blouses & Shirts"},
                          {id:5,link:"/a",content:" Dresses"},
                          {id:6,link:"/a",content:" Rompers & Jumpsuits"},
                          {id:7,link:"/a",content:"Shorts"},
                          {id:8,link:"/a",content:"Jeans"},
            
                          
                      ]},
                      {id:3, mainTitle:"Old Navy ",
                      subHeader:[
                          {id:1,link:"/a",content:"Shop All Activewear"},
                          {id:2,link:"/a",content:" Activewear Tops"},
                          {id:3,link:"/a",content:"Activewear Bottoms"},
                          {id:4,link:"/a",content:"Jackets & Hoodies"},
                          {id:5,link:"/a",content:"Sports Bras"}
                      
                      ]},
                      {id:4, mainTitle:"Shoes and accessories ",
                      subHeader:[
                          {id:1,link:"/a",content:" Shoes"},
                          {id:2,link:"/a",content:"Handbags"},
                          {id:3,link:"/a",content:"Socks & Hosiery"},
                          {id:4,link:"/a",content:"Accessories"},
                          {id:5,link:"/a",content:"Beauty"}
                      ]},
                      {id:5, mainTitle:"Spical size ",
                  subHeader:[
                      {id:1,link:"/a",content:" petite"},
                      {id:2,link:"/a",content:"tall"},
                  
                  ]
              },
                      {id:6, mainTitle:"Deals ",
                  subHeader:[
                      {id:1,link:"/a",content:"sale"},
                      {id:2,link:"/a",content:"cleanarce"}
                  ]
                   }
             ],
             boy:[
                {id:1, mainTitle:"New & Now",
                      subHeader:[
                      {id:1,link:"/a",content:"new Arrival"},
                      {id:2,link:"/a",content:"ON trend"},
                      {id:3,link:"/a",content: "Family Matching"},
                      {id:4,link:"/a",content: "fun the sun "}
                      ]},
                      {id:2, mainTitle:"Shop by catalog",
                      subHeader:[
                          {id:1,link:"/a",content:"Tops"},
                          {id:2,link:"/a",content: " Tees"},
                          {id:3,link:"/a",content:"Graphic Tees"},
                          {id:4,link:"/a",content:"Blouses & Shirts"},
                          {id:5,link:"/a",content:" Dresses"},
                          {id:6,link:"/a",content:" Rompers & Jumpsuits"},
                          {id:7,link:"/a",content:"Shorts"},
                          {id:8,link:"/a",content:"Jeans"},
                  
                          
                      ]},
                      {id:3, mainTitle:"Old Navy ",
                      subHeader:[
                          {id:1,link:"/a",content:"Shop All Activewear"},
                          {id:2,link:"/a",content:" Activewear Tops"},
                          {id:3,link:"/a",content:"Activewear Bottoms"},
                          {id:4,link:"/a",content:"Jackets & Hoodies"},
                          {id:5,link:"/a",content:"Sports Bras"}
                      
                      ]},
                      {id:4, mainTitle:"Shoes and accessories ",
                      subHeader:[
                          {id:1,link:"/a",content:" Shoes"},
                          {id:2,link:"/a",content:"Handbags"},
                          {id:3,link:"/a",content:"Socks & Hosiery"},
                          {id:4,link:"/a",content:"Accessories"},
                          {id:5,link:"/a",content:"Beauty"}
                      ]},
                      {id:5, mainTitle:"Spical size ",
                  subHeader:[
                      {id:1,link:"/a",content:" petite"},
                      {id:2,link:"/a",content:"tall"},
                  
                  ]
              },
                      {id:6, mainTitle:"Deals ",
                  subHeader:[
                      {id:1,link:"/a",content:"sale"},
                      {id:2,link:"/a",content:"cleanarce"}
                  ]
                   }
             ],
             men:[
                {id:1, mainTitle:"New & Now",
                      subHeader:[
                      {id:1,link:"/a",content:"new Arrival"},
                      {id:2,link:"/a",content:"ON trend"},
                      {id:3,link:"/a",content: "Family Matching"},
                      {id:4,link:"/a",content: "fun the sun "}
                      ]},
                      {id:2, mainTitle:"Shop by catalog",
                      subHeader:[
                          {id:1,link:"/a",content:"Tops"},
                          {id:2,link:"/a",content: " Tees"},
                          {id:3,link:"/a",content:"Graphic Tees"},
                          {id:4,link:"/a",content:"Blouses & Shirts"},
                          {id:5,link:"/a",content:" Dresses"},
                          {id:6,link:"/a",content:" Rompers & Jumpsuits"},
                          {id:7,link:"/a",content:"Shorts"},
                          {id:8,link:"/a",content:"Jeans"},
                   
                          
                      ]},
                      {id:3, mainTitle:"Old Navy ",
                      subHeader:[
                          {id:1,link:"/a",content:"Shop All Activewear"},
                          {id:2,link:"/a",content:" Activewear Tops"},
                          {id:3,link:"/a",content:"Activewear Bottoms"},
                          {id:4,link:"/a",content:"Jackets & Hoodies"},
                          {id:5,link:"/a",content:"Sports Bras"}
                      
                      ]},
                      {id:4, mainTitle:"Shoes and accessories ",
                      subHeader:[
                          {id:1,link:"/a",content:" Shoes"},
                          {id:2,link:"/a",content:"Handbags"},
                          {id:3,link:"/a",content:"Socks & Hosiery"},
                          {id:4,link:"/a",content:"Accessories"},
                          {id:5,link:"/a",content:"Beauty"}
                      ]},
                      {id:5, mainTitle:"Spical size ",
                  subHeader:[
                      {id:1,link:"/a",content:" petite"},
                      {id:2,link:"/a",content:"tall"},
                  
                  ]
              },
                      {id:6, mainTitle:"Deals ",
                  subHeader:[
                      {id:1,link:"/a",content:"sale"},
                      {id:2,link:"/a",content:"cleanarce"}
                  ]
                   }
             ],
             girl:[
                {id:1, mainTitle:"New & Now",
                      subHeader:[
                      {id:1,link:"/a",content:"new Arrival"},
                      {id:2,link:"/a",content:"ON trend"},
                      {id:3,link:"/a",content: "Family Matching"},
                      {id:4,link:"/a",content: "fun the sun "}
                      ]},
                      {id:2, mainTitle:"Shop by catalog",
                      subHeader:[
                          {id:1,link:"/a",content:"Tops"},
                          {id:2,link:"/a",content: " Tees"},
                          {id:3,link:"/a",content:"Graphic Tees"},
                          {id:4,link:"/a",content:"Blouses & Shirts"},
                          {id:5,link:"/a",content:" Dresses"},
                          {id:6,link:"/a",content:" Rompers & Jumpsuits"},
                          {id:7,link:"/a",content:"Shorts"},
                          {id:8,link:"/a",content:"Jeans"},
                      
                          
                      ]},
                      {id:3, mainTitle:"Old Navy ",
                      subHeader:[
                          {id:1,link:"/a",content:"Shop All Activewear"},
                          {id:2,link:"/a",content:" Activewear Tops"},
                          {id:3,link:"/a",content:"Activewear Bottoms"},
                          {id:4,link:"/a",content:"Jackets & Hoodies"},
                          {id:5,link:"/a",content:"Sports Bras"}
                      
                      ]},
                      {id:4, mainTitle:"Shoes and accessories ",
                      subHeader:[
                          {id:1,link:"/a",content:" Shoes"},
                          {id:2,link:"/a",content:"Handbags"},
                          {id:3,link:"/a",content:"Socks & Hosiery"},
                          {id:4,link:"/a",content:"Accessories"},
                          {id:5,link:"/a",content:"Beauty"}
                      ]},
                      {id:5, mainTitle:"Spical size ",
                  subHeader:[
                      {id:1,link:"/a",content:" petite"},
                      {id:2,link:"/a",content:"tall"},
                  
                  ]
              },
                      {id:6, mainTitle:"Deals ",
                  subHeader:[
                      {id:1,link:"/a",content:"sale"},
                      {id:2,link:"/a",content:"cleanarce"}
                  ]
                   }
             ]
    },
    getters:{
        loadContent(state)
        {
            return state.pageContent
        },
        headerItemWomen(state)
        {
            return state.headerItemWomen
        },
        headerItemWomenPlus(state)
        {
            return state.headerItemWomenPlus
        },
        matrinty(state)
        {
            return state.matrinty
        },
        men(state)
        {
            return state.men
        },
        girl(state)
        {
            return state.girl
        },
        boy(state)
        {
            return state.boy
        }
    }
}