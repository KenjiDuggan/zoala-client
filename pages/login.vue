/* eslint-disable no-unused-expressions */
<template>
<div>
  <Notification :message="error" v-if="error"/>
  <br/>

  <v-container class="accent rounded-corner">
       <br/>
  <h1 class="text-xs-center display-1 info--text">login</h1>
  <br/>
    <divider></divider>
      <v-layout align-center>
        <v-flex class="text-sm-center">
          <v-form v-model="valid" ref="form" class="info--text">
            <v-text-field
              label="E-mail"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
                <v-text-field
              label="Password"
              v-model="password"
              :rules="passwordRules"
              required
            ></v-text-field>
            <v-btn @click="login" class="success rounded-corners to-lower">start</v-btn>
            <v-btn @click="reset" class="rounded-corners warning to-lower">woops</v-btn>
           </v-form>
         </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import Notification from '../components/Notification';
const Cookie = process.client ? require('js-cookie') : undefined;
// import {api} from "../plugins/axios.js";

export default {
  middleware: 'guest',
  components: {
    Notification
  },
  data () {
      return {
        valid: false,
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          (v) => !!v || 'Password is required',
        ],
        email: '',
        password: '',
        error: null,
        response: '',
        id: ''
      }
    },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    async login({store}) {
      try {

        const response = await this.$axios.post('/auth/login', {
            email: this.email,
            password: this.password
          },)
           
          console.log(response.data);
    
          if(response.data.token){
            this.$auth.setToken('local', response.data.token)
            this.$store.state.email = this.email;
            this.$store.state.username = response.data.username;
            Cookie.set('auth', response.data.token);
            this.$store.state.token = response.data.token;
          }
          
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            }
          })
          .then((response) => {
            this.$store.state.auth.loggedIn = true;
            this.$router.push('/');
          })
          .catch((e) => {
            console.log(e);
          })
        this.$router.push('/')
      } catch (e) {
        this.error = e.response;
        console.log(e);
      }
    }
  },
  }
</script>
