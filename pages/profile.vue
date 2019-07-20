<template>
  <section class="section">
    <div class="container">

      <div v-if="isAuthenticated">
        <h1>Your Profile: </h1>
        <v-divider></v-divider>
        <h2>
          <strong>Email:</strong>
          <div>  </div>{{this.$store.state.email}}
        </h2>

      </div>

      <div v-else>
        You are not logged in, not user information.
        Get registered man.
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
