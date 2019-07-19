<template>
  <section class="section">
    <div class="container">
      <h2 class="title">My Profile</h2>
       <h1>
          <strong>Email:</strong>
          {{email}}
        </h1>
      
      <div v-else>
        Get registered man
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  state: {
   email: ''
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
