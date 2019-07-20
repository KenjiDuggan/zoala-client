<template>
  <div>
    <h1>Gainz Planner</h1>
      <!-- <div v-for="muscle of muscles" :key="muscle.id">
        <li>{{ muscle.name }}</li>
        <li>{{muscle.description}}</li>
        <li></li>
      </div> -->

  <!-- <div v-for="muscles of muscles" :key="muscles.id">
          <v-card>
            <v-card-title><h4>{{ muscles.name }}</h4></v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Description:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ muscles.description }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Weight:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ muscles.weight }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Reps:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ muscles.reps }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Sets:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ muscles.sets }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
  </div> -->
</div>
</template>
<script>
import axios from 'axios';

export default {
  data () {
    return {
      muscles: null,
    }
  },
//   mounted: function() {
//     var headers = {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDJiYmExYjM4YWI1YTBmZmNmNTU2MmMiLCJ1c2VybmFtZSI6InJlZUBvay5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCRqVHRTZ0lkNHZIdUJiMGM5eHlMRjJlWEpHV1I5cDFaekV4WmVkRWNMUTJ2ckR5a3YwdVRIcSIsIl9fdiI6MCwiaWF0IjoxNTYzMTQ2Nzg5LCJleHAiOjE1NjM3NTE1ODl9.JvtXhm1Nf571xw4WD68g-0lGWSYhFKt3ZoLdmqMgSdE'}
//     axios
//       .get('http://localhost:3001/api/muscle', {headers: headers})
//       .then((response) => {this.muscles = response.data})
//       .catch((e) => {console.log(e) })
// },
middleware: 'auth'
  };
</script>
