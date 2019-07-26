<template>
<div>

  <Notification :message="error" v-if="error"/>
  <br/>
    <v-container class="accent rounded-corner">
         <br/>

   <h1 class="text-xs-center display-1 info--text">register</h1>
   <br/>
  <divider></divider>
      <v-layout align-center>
         <v-flex class="text-sm-center">
          <v-form v-model="valid" ref="form" class="info--text">
          <v-text-field
            label="Name"
            v-model="username"
            :rules="usernameRules"
            :counter="10"
            required
          ></v-text-field>
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
          <br/>
          <v-btn @click="register" class="rounded-corners success to-lower">register</v-btn>
          <v-btn @click="reset" class="rounded-corners warning to-lower">woops</v-btn>
          <br/>
        </v-form>
         </v-flex>
      </v-layout>
    </v-container>

</div>
</template>

<script>
import Notification from '../components/Notification';
const Cookie = process.client ? require('js-cookie') : undefined;

export default {
  components: {
    Notification
  },
  data () {
      return {
        valid: false,
        usernameRules: [
          (v) => !!v || 'Name is required',
          (v) => v && v.length <= 20 || 'Name must be less than 20 characters'
        ],
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          (v) => !!v || 'Password is required',
        ],
        select: null,
        checkbox: true,
        username: '',
        email: '',
        password: ''
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
    async register({store}) {
        try{
            const response = await this.$axios.post('/auth/register', {
              username: this.username,
              email: this.email,
              password: this.password
            })
            console.log(response.data);

            if(response) {
              this.$store.state.email = this.email;
              this.$store.state.username = response.data.username;
            }

        this.$router.push('/login');

        } catch (e) {
           this.error = e.response;
           console.log(e);
        }
  },
},
  middleware: 'guest',
}
</script>