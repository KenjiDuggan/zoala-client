<template>
  <section class="section">
    <div class="container">

      <div v-if="isAuthenticated">
        <h1>Your Profile: {{this.$store.state.username}}</h1>
        <v-divider></v-divider>
        <h2>
          <strong>Email:</strong>
          <div>  </div>{{this.$store.state.email}}
        </h2>
        <h2>Password: {{this.$store.state.email}}</h2>
        <h2>Token: {{this.$store.state.token}}</h2>
      </div>

      <div v-else>
        <h2 class="display-2">Go get registered!!!!</h2>
      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  middleware: 'auth',
};

</script>
