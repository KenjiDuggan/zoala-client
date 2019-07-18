/* eslint-disable no-unused-expressions */
<template>
<div>
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
        await this.$token.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          },
          token: {
            accessToken: 'someStringGotFromApiServiceWithAjax'
          },
        })
         this.$store.commit('settoken', token);
         Cookie.set('token', token);
         this.$router.push('/');
      } catch (e) {
        this.error = e.response.data.message
        this.$router.push('/register')
      }
    },
  },
  middleware: 'guest'
  }  
</script>
