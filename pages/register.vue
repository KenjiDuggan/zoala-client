<template>
<div>
  <Notification :message="error" v-if="error"/>
    <v-form v-model="valid" ref="form">
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
    <v-checkbox
      label="Do you agree?"
      v-model="checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      required
    ></v-checkbox>

    <v-btn @click="register" :class="{ red: !valid, green: valid }">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
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
          (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
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
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4'
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
              console.log(response.data);
              this.$router.push('/login');
            }).catch((error) => {
              console.log(error.response);
              this.$router.push('/register');
            })
            // await this.$auth.loginWith('local', {
            //   data: {
            //     email: this.email,
            //     password: this.password
            //   },
            // }).then((response) => {
            //   console.log(response);
            //   this.$router.push('/');
            // }).catch((e) => {
            //   console.log(e);
            // })
            this.$router.push('/login');
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