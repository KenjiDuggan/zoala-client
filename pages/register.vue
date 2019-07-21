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
          <v-select
            label="Item"
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            required
          ></v-select>
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
        items: [
          'get thick',
          'get lean',
          'get smart',
          'get sleep'
        ],
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
    async register() {
          try{
            await this.$axios.post('register', {
              username: this.username,
              email: this.email,
              password: this.password
            }).then((response) => {
              this.$store.state.email = this.email;
              this.$store.state.password = this.password;
              this.$store.state.username = this.username;
              console.log(response.data);
              this.$router.push('/login');
              this.$swal(
                'Thanks for registering!',
                'Great!',
                'Now please login'
                );
            }).catch((error) => {
              console.log(error.response);
              this.$router.push('/register');
              this.$swal(
                'Something went wrong,',
                'Please try again,',
                );
            })

          }catch(e){
            this.error = e.response.data.message
            console.log(this.error);
            this.$router.push('/register');
          }
        },
  },
  middleware: 'guest',
}
</script>

<style scoped>
.rounded-corner{
  border-radius: 15px;
}
.rounded-corners{
  border-radius: 10px;
}
.to-lower{
  text-transform: none !important;
}
</style>