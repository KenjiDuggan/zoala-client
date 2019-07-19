/* eslint-disable no-unused-expressions */
<template>
<div>
  <h1>Login</h1>
  <divider></divider>
  <Notification :message="error" v-if="error"/>
    <v-form v-model="valid" ref="form">
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
    <v-btn @click="login" :class="{ red: !valid, green: valid }">submit</v-btn>
    <v-btn @click="reset">clear</v-btn>
  </v-form>
</div>
</template>

<script>
import Notification from '../components/Notification';
const Cookie = process.client ? require('js-cookie') : undefined;

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
    async login() {
      try {
          await this.$axios.post('login', {
            email: this.email,
            password: this.password
          }).then((response) =>
          this.$store.state.email = this.email,
          console.log(response)
          );

          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            }
          }).then((response) => {
            let cancer = JSON.parse(response);
            console.log(cancer);
            this.$store.state.auth.loggedIn = true;
          })

        // this.$store.dispatch('asyncData');
        // this.$store.commit('setAuth', this.token);
        // Cookie.set('auth', token);
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message

      }
    }
  },
  }
</script>
