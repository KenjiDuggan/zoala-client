<template>
  <ul>
    <li v-for="workout in workouts" :key="workout.id">
      <input type="checkbox" >
      <span>{{ workout.name }}</span>
      <span>{{ workout.description }}</span>
      <span> {{ workout.weight }} </span>
    </li>
    <li><input></li>
  </ul>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: {
      Workout
  },
  mounted () {
    this.$store.dispatch('GET_WORKOUTS');
  },
  computed: {
    ...mapState([
        'workouts'
    ])
  },
  methods: {
    addWorkout (e) {
      this.$store.commit('addworkout', e.target.value)
      e.target.value = ''
    },

  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>