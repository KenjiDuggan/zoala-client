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
//   mounted: function() {
//     var headers = {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDJiYmExYjM4YWI1YTBmZmNmNTU2MmMiLCJ1c2VybmFtZSI6InJlZUBvay5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCRqVHRTZ0lkNHZIdUJiMGM5eHlMRjJlWEpHV1I5cDFaekV4WmVkRWNMUTJ2ckR5a3YwdVRIcSIsIl9fdiI6MCwiaWF0IjoxNTYzMTQ2Nzg5LCJleHAiOjE1NjM3NTE1ODl9.JvtXhm1Nf571xw4WD68g-0lGWSYhFKt3ZoLdmqMgSdE'}
//     axios
//       .get('http://localhost:3001/api/me', {headers: headers})
//       .then((response) => {this.workouts = response.data})
//       .catch((e) => {console.log(e) })
// },
computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
  }

</script>