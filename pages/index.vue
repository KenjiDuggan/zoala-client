<template>
<div>
  <div v-if="isAuthenticated">Wow great job!! {{ loggedInUser.username }}</div>
  <div v-else>Go get registered loser</div>
  </div>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
const Cookie = process.client ? require('js-cookie') : undefined;

export default {
  data () {
    return {
      workouts: null,
    }
  },
computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
  }

</script>