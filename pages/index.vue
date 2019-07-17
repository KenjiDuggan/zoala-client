<template>
  <div>
    <h1>Workout posts</h1>
    <p v-if="$isFetching">Fetching workouts...</p>
    <ul v-else>
      <li v-for="workout of workouts" :key="workout.id">
        <n-link :to="`/workout/${workout.id}`">{{ workout.name }}</n-link>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  data () {
    return {
      workouts: []
    }
  },
  async fetch () {
    this.workouts = await fetch(`http://localhost:3001/api/workout`).then((res) => res.json())
  }
}
</script>
