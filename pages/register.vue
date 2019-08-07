<template>
  <div>
    <Notification v-if="error" :message="error" />
    <br>
    <v-container class="accent rounded-corner">
      <br>

      <h1 class="text-xs-center display-1 info--text">
        register
      </h1>
      <br>
      <v-divider />
      <v-layout align-center>
        <v-flex class="text-sm-center">
          <v-form ref="form" v-model="valid" class="info--text">
            <v-text-field
              v-model="username"
              label="Name"
              :rules="usernameRules"
              :counter="10"
              required
            />
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
            <v-select
              v-model="reason"
              :items="items"
              :menu-props="{ top: true, offsetY: true }"
              label="Reason For Joining"
            />
            <br>
            <v-btn class="rounded-corners success to-lower" @click="register">
              register
            </v-btn>
            <v-btn class="rounded-corners warning to-lower" @click="reset">
              woops
            </v-btn>
            <br>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Notification from '../components/Notification'
// const Cookie = process.client ? require('js-cookie') : undefined

export default {
  components: {
    Notification
  },
  data() {
    return {
      items: ['Get Healthy', 'Get Thick', 'Get Lean', 'Get Sleep', 'Get Smart'],
      valid: false,
      usernameRules: [
        v => !!v || 'Name is required',
        v => v && v.length <= 20,
        v => v || 'Name must be less than 20 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid' // eslint-disable-line 
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      select: null,
      checkbox: true,
      username: '',
      email: '',
      password: '',
      reason: ''
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
    async register({ store }) {
      try {
        const response = await this.$axios.post('/auth/register', {
          username: this.username,
          email: this.email,
          password: this.password,
          reason: this.reason
        },
        { setCredentials: true })
        if (response) {
          this.$store.commit('setEmail', this.email)
          this.$store.commit('setReason', this.reason)
          this.$store.commit('setAuth', true)
          this.$store.commit('setUsername', response.data.username)
        }
        this.$router.push('/goals')
        throw response.data
      } catch (e) {
        console.log(e) // eslint-disable-line
        throw e
      }
    }
  },
  middleware: 'guest'
}
</script>
