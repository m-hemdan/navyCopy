<template>
    <div>
        <v-container>
            <v-layout>
                <v-flex xs12 md7>
                    <h2>Create an account</h2>
                    <v-form >
                        <v-container>
                       <v-layout row wrap >
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >Email address</p>
                        </v-flex>
                        <v-flex xs12 md7>
                            <p class="data">{{activeEmail}}</p>
                           <!-- <v-text-field  solo  v-model="activeEmail"></v-text-field> -->
                        </v-flex>
                     </v-layout>
                     <v-layout row wrap>
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >Create a password*</p>
                        </v-flex>
                        <v-flex xs12 md7>
                            <v-text-field  solo  v-model="password"></v-text-field> 
                             <p class="conditionPAssword">
                                Password must be 8-20 characters, 
                                including: at least one capital letter, 
                                at least one small letter, one number and
                                 one special character - ! @ # $ % ^ & * ( ) _ +
                            </p>
                        </v-flex>
                     </v-layout>
                     <v-layout row wrap>
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >Confirm password*</p>
                        </v-flex>
                        <v-flex xs12 md7>
                            <v-text-field  solo  v-model="confirmPassword"></v-text-field> 
                        </v-flex>
                     </v-layout>
                     
                       <v-layout row wrap>
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >first name*</p>
                        </v-flex>
                        <v-flex xs12 md7>
                            <v-text-field  solo  v-model="firstName"></v-text-field> 
                        </v-flex>
                     </v-layout>
                     <v-layout row wrap>
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >last name*</p>
                        </v-flex>
                        <v-flex xs12 md7>
                            <v-text-field  solo  v-model="lastName"></v-text-field> 
                        </v-flex>
                     </v-layout>
                     <v-layout row wrap>
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >language preference*</p>
                        </v-flex>
                        <v-flex xs12 md7>
                           <v-select solo 
                                v-model="selectLanguage"
                                :items="language" 
                                label="select language">
                              </v-select>
                        </v-flex>
                     </v-layout>
                      <v-layout row wrap>
                        <v-flex   xs12  md5 lg4>
                            <p class="label" >Postal code</p>
                        </v-flex>
                        <v-flex xs12 md4  >
                            <v-text-field  solo  v-model="postalCode"></v-text-field> 
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
export default {
    data(){
        return {
          language:["english","french"],
          email:this.activeEmail,
          password:'',
          confirmPassword:'',
          firstName:'',
          lastName:'',
          selectLanguage:'',
          postalCode:''

        }
    },
computed:{
    activeEmail()
    {
        return this.$store.getters.myEmail
    }
},
methods:
{
    saveData()
    {
        const data={
            email:this.activeEmail,
            password:this.password,
            firstName:this.firstName,
            lastName:this.lastName,
            language:this.selectLanguage,
            postalCode:this.postalCode
        }
     this.$store.dispatch("signUpUser",data)
    },
    cancel()
    {}
}
}
</script>

<style>
.label
{
   
  
    font-size: 1.2rem;
    color: gray;
   
}
.data
{
    font-size:1.2rem;
}
.conditionPAssword
{
    margin-top: -1.5rem;
    font-size: 12px;
}
</style>
