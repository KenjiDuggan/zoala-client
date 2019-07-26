<template>
  <v-card
    class="mx-auto"
    max-width="1000"
  >
    <img
      class="white--text"
      height="300px"
      src='~assets/anonym.jpg'
    />
 

    <v-card-text>
      
      <span class="text--primary">
        <span>Email: {{this.$store.state.email}}</span><br>
        <span>Token: {{this.$store.state.token}}</span>
      </span>
    </v-card-text>

    <v-card-actions class="text-xs-center">
      <v-btn
        text
        color="secondary"
      >
        gainz
      </v-btn>
      <v-btn
        text
        color="success"
      >
        cardio
      </v-btn>
       <v-btn
        text
        color="warning"
      >
        food
      </v-btn>
       <v-btn
        text
        color="accent"
      >
        sleep
      </v-btn>
    </v-card-actions>
  </v-card>
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
