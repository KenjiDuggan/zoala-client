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

export default {
  name: {
      Workout
  },
  props: {
      workoutId: {
          type: Number,
          required: true
      }
  },
  data () {
      return {
          workout: []
      }
  },
  computed: {

  },
  async fetch() {
      headers.append('Content-Type',undefined);
      this.workout = await fetch(`http://localhost:3001/api/workout`, JSON.stringify(workout)).map((res) => res.json())
  }

}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>