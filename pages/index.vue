<template>
  <div>
    <h1>Workout posts</h1>
    <p>Fetching workouts...</p>

    <v-btn @click="fetchWorkout">Skidit please</v-btn>
    <div v-if="loggedInUser">wow</div>
      <div v-for="workout of workouts" :key="workout.id">
        <li>{{ workout.name }}</li>
        <li>{{workout.description}}</li>
      </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      workouts: []
    }
  },
  methods: {
    async fetchWorkout() {
      try {
        this.$axios.setToken(token, '');
        await this.$auth.workout('local', {
          data: {
            name: this.name,
            description: this.description,
            weight: this.weight,
            reps: this.reps,
            type: this.type
          }
        })
        this.workouts = JSON.parse(data);
      } catch (e) {
        this.error = e.response.data.message
        this.$router.push('/register')
      }
    }
  }
}
</script>
