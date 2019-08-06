/* eslint-disable no-unused-expressions */
<template>
  <div>
    <Notification v-if="error" :message="error" />
    <br>

    <v-container class="accent rounded-corner">
      <br>
      <h1 class="text-xs-center display-1 info--text">
        login
      </h1>
      <br>
      <v-divider />
      <v-layout align-center>
        <v-flex class="text-sm-center">
          <v-form ref="form" v-model="valid" class="info--text">
            <v-text-field
              v-model="email"
              label="E-mail"
              :rules="emailRules"
              required
            />
            <v-text-field
              v-model="password"
              label="Password"
              :rules="passwordRules"
              required
            />
            <v-btn class="success rounded-corners to-lower" @click="login">
              start
            </v-btn>
            <v-btn class="rounded-corners warning to-lower" @click="reset">
              woops
            </v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Notification from '../components/Notification'

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'guest',
  components: {
    Notification
  },
  data() {
    return {
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required', // eslint-disable-line 
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid' // eslint-disable-line 
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      email: '',
      username: '',
      password: '',
      error: null,
      response: '',
      id: ''
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    async login({ store }) {
      try {
        const response = await this.$axios.post('/auth/login', {
          email: this.email,
          password: this.password
        },
        { setCredentials: true }
        )
        if (response.data.token) {
          this.$store.commit('setEmail', this.email)
          this.$store.commit('setUsername', response.data.username)
          this.$store.commit('setToken', response.data.token)
          this.$store.commit('setReason', response.data.reason)
          this.$auth.setToken('local', 'Bearer ' + response.data.token)
          Cookie.set('auth', 'Bearer ' + response.data.token)
        }
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then((response) => {
            this.$store.commit('setAuth', true)

            this.$swal({
              title: 'You are logged in!',
              text: 'You clicked the button!',
              icon: 'success',
              button: 'Aww yeeee!'
            })
            this.$router.push('/goals')
          })
          .catch((e) => {
            throw e
          })
      } catch (e) {
        this.error = e.response
        throw e
      }
    }
  }
}
</script>
