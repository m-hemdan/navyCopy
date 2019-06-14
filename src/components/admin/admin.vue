<template>
    <div>
         <v-container>
             <v-layout v-if="error">
                 <v-flex>
                     <v-alert :value="true" text="error.message" type="error" dismissible></v-alert>
                 </v-flex>
             </v-layout>
            <v-layout>
                <v-flex xs12 md7>
                    <h2>Make Order</h2>
                    <v-form >
                        <v-container>
                       <v-layout row wrap>
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >Shoes Name</p>
                        </v-flex>
                        <v-flex xs12 md7>
                            <v-text-field  solo  v-model="name" @input="$v.name.$touch()"></v-text-field> 
                            <p class="red--text" v-if="$v.name.$error">Pleace Enter Valid name </p>
                        </v-flex>
                      </v-layout>
                     <v-layout row wrap>
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >Size</p>
                        </v-flex>
                        <v-flex xs12 md7>
                            <v-text-field  solo  v-model="size" type="number" min="1"></v-text-field> 
                        </v-flex>
                     </v-layout>
                     
                       <v-layout row wrap>
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >Picture</p>
                        </v-flex>
                        <v-flex xs12 md7>
                            <v-text-field  solo  v-model="image" @input="$v.image.$touch()"></v-text-field> 
                             <p class="red--text" v-if="$v.image.$error">Pleace Enter Valid image </p>
                        </v-flex>
                     </v-layout>
                     <v-layout row wrap>
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >Description</p>
                        </v-flex>
                        <v-flex xs12 md7>
                            <v-text-field  solo  v-model="description" @input="$v.description.$touch()"></v-text-field> 
                             <p class="red--text" v-if="$v.description.$error" >Pleace Enter Valid Description </p>
                        </v-flex>
                     </v-layout>
                     <v-layout row wrap>
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >Number</p>
                        </v-flex>
                        <v-flex xs12 md7>
                            <v-text-field type="number" min="1" solo  v-model="number"></v-text-field> 
                       </v-flex>
                     </v-layout>
                      <v-layout row wrap>
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >Color</p>
                        </v-flex>
                        <v-flex xs12 md7>
                            <v-text-field  solo  v-model="color" @input="$v.image.$touch()"></v-text-field> 
                            <p class="red--text" v-if="$v.image.$error">Pleace Enter Valid color </p>
                        </v-flex>
                     </v-layout>
                      <v-layout row wrap>
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >Price</p>
                        </v-flex>
                        <v-flex xs12 md7>
                            <v-text-field  solo  v-model="price" @input="$v.price.$touch()"></v-text-field> 
                            <p class="red--text" v-if="$v.price.$error">Pleace Enter Valid price </p>
                        </v-flex>
                     </v-layout>
                      <v-layout row wrap>
                        <v-flex   xs12  md4 ></v-flex>
                        <v-flex xs12 md6 >
                            <v-btn class="orange white--text" @click="saveData">save</v-btn>
                             <v-btn flat class=" blue--text" @click="cancel">cancel</v-btn>
                      
                        </v-flex>
                     </v-layout>
                        </v-container>
                   </v-form> 
                 </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import { required,email ,minLength } from "vuelidate/lib/validators"
export default {
    data()   {
        return {
        name:'',
        size:1,
        image:'',
        description:'',
        number:1,
        color:'',
        price:0
        }

    },
    validations:
    {
        name:{
            required,
            min:minLength(4)
        },
        image:
        {
            required
        },
        color:
        {
            required
        },
        description:
        {
            required
        },
        price:
        {
            required
        }
      
    }
    ,
    computed:
    {
       error()
       {
           return this.$store.getters.error
       }
    },
    methods: {
        saveData()
        {
            if( this.name=='' || this.color=='' || this.description == '' || this.image== '')
            {
                alert("Sorry Please add all data")
                return
            }
            if (this.$v.name.$error || this.$v.color.$error || this.$v.description.$error || this.$v.image.$error || this.$v.price.$error)
            return 

            const data={
                name:this.name,
                size:this.size,
                image:this.image,
                description:this.description,
                number:this.number,
                color:this.color,
                price:this.price
            }
            this.$store.dispatch("storeTopsItem",data)
            this.name='',
            this.size='',
             this.image='',
                this.description='',
                this.number='',
                this.color='',
                this.price=''
        },
        cancel()
        {

        }
    },
}
</script>