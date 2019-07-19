<template>
  <div>
      <div v-for="workout of workouts" :key="workout.id">
        <li>{{ workout.name }}</li>
        <li>{{workout.description}}</li>
        <li></li>
      </div>
<div v-for="workout of workouts" :key="workout.id">
          <v-card>
            <v-card-title><h4>{{ workouts.name }}</h4></v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Description:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ workouts.description }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Weight:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ workouts.weight }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Reps:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ workouts.reps }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Sets:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ workouts.sets }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
            <div>{{workouts}}</div>
          </v-card>
</div>
</div>
</template>
<script>
import axios from 'axios';

export default {
  data () {
    return {
      workouts: []
    }
  },
  computed() {
      axios.defaults.headers.common['Authorization'] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDJiYmExYjM4YWI1YTBmZmNmNTU2MmMiLCJ1c2VybmFtZSI6InJlZUBvay5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCRqVHRTZ0lkNHZIdUJiMGM5eHlMRjJlWEpHV1I5cDFaekV4WmVkRWNMUTJ2ckR5a3YwdVRIcSIsIl9fdiI6MCwiaWF0IjoxNTYzMTQ2Nzg5LCJleHAiOjE1NjM3NTE1ODl9.JvtXhm1Nf571xw4WD68g-0lGWSYhFKt3ZoLdmqMgSdE' // for all requests
      let headers = {
          'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDJiYmExYjM4YWI1YTBmZmNmNTU2MmMiLCJ1c2VybmFtZSI6InJlZUBvay5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCRqVHRTZ0lkNHZIdUJiMGM5eHlMRjJlWEpHV1I5cDFaekV4WmVkRWNMUTJ2ckR5a3YwdVRIcSIsIl9fdiI6MCwiaWF0IjoxNTYzMTQ2Nzg5LCJleHAiOjE1NjM3NTE1ODl9.JvtXhm1Nf571xw4WD68g-0lGWSYhFKt3ZoLdmqMgSdE',
          'Content-Type': 'application/x-www-form-urlencoded'
      };
      axios.get('http:localhost:3001/api/workout', {headers: headers})
      .then(((response) => (this.workouts = response.data)))
      .catch((e) => console.log(e))
  },
  methods: {
  }
}
</script>
