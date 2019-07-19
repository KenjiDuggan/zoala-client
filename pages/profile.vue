<template>
  <section class="section">
    <div class="container">

      <div v-if="isAuthenticated">
        <h1>Your Profile: </h1>
        <h2>
          <strong>Email:</strong>
          <div>  </div>{{loggedInUser.email}}
        </h2>
        <h2>Token: {{token}}</h2>
      </div>

      <div v-else>
        You are not logged in, not user information.
      </div>

      <div>
        Get registered man
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  state: {
   email: '',
   token: this.$store.state.token
  },
  computed: {
    email () {
      return this.$store.state.email
    },
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  middleware: 'auth',
};

</script>
