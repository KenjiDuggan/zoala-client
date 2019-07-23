
<template>
  <div>
    <v-container class="primary--text success"> 
      <v-flex>
      <h1>welcome {{this.$store.state.username}}</h1>
      <br/>
      <v-divider></v-divider>
      <h3>Email: {{this.$store.state.email}}</h3>
      <h3>Token: {{this.$store.state.token}}</h3>
      </v-flex>
    </v-container>
  </div>
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
