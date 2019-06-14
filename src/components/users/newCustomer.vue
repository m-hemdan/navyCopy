<template>
   <div>
           <v-container>
               <v-layout row justify-center>
                   <v-flex xs12 md5>
                       <v-form class="signInForm pa-5 ml-3" >
                         <h2>Sign In</h2>
                         <label>Email address</label>
                         <v-text-field
                         solo
                        
                         type="email" label="email"
                         v-model="email"
                         ></v-text-field>
                         <label>password</label>
                            <v-text-field solo
                            suffix="show"
                            label="password"
                         v-model="password"
                        type="password"></v-text-field>
                        <router-link to="/"><a>I forget my password</a></router-link>
                        <v-layout mt-4>
                            <v-flex>
                                <v-btn
                                class="orange white--text" @click.prevent="signIn">sign in</v-btn>
                                <v-btn flat color="blue--text" @click="cancel">cancel</v-btn>

                            </v-flex>
                        </v-layout>
                       </v-form>
                   </v-flex >
                   <v-flex xs12 md5>
                         <v-form class="signInForm pa-5 ml-3" >
                         <h2>create an account</h2>
                         <p>Register to use convenient features and quick checkout</p>
                         <label>Email address</label>
                         <v-text-field
                         solo
                         placeholder="email"
                         type="email" label="email"
                        
                         v-model="signUpEmail"
                         ></v-text-field>
                        <v-layout mt-4>
                            <v-flex>
                                <v-btn
                                class="orange white--text"
                                @click.prevent="register">Register</v-btn>
                                <v-btn flat color="blue--text">cancel</v-btn>

                            </v-flex>
                        </v-layout>
                       </v-form>
                   </v-flex>
               </v-layout>
           </v-container>
    </div>
</template>
<script>
export default {
    data()
    {
        return {
            email:'',
            password:'',
            signUpEmail:''
        }
    },
    methods:
    {
        signIn()
        {
          this.$store.dispatch("signInUser",{email:this.email,password:this.password})
        },
        cancel()
        {

        },
        register()
        {
            this.$store.commit("continueSignUp",this.signUpEmail)
           
        }
    }
}
</script>

<style>
.signInForm
{
    border-radius: 6px;
    background: rgba(184, 153, 158, 0.301);
}
.signInForm > a
{
    font-size: 15px;
    text-decoration: underline;

}
.signInForm > a:hover
{
    text-decoration: none;
}
</style>
