<template>
  <div>
    <h1>Name: {{ muscle.name }}</h1>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">
            Day
          </th>
          <th class="text-left">
            Body Part
          </th>
          <th class="text-left">
            Exercises
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <div v-for="(item, i) in 6" :key="i">
            <td>{{ muscle.schedule[i].day }}</td>
            <td>{{ muscle.schedule[i].bodyPart }}</td>
            <td v-for="(jtem, j) in muscle.schedule[i].workouts.length" :key="j">
              {{ muscle.schedule[i].workouts[j] }}
            </td>
          </div>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      muscle: '',
      items: 12,
      jtems: 24,
      ktems: 4,
      length: 3
    }
  },
  created() {
    console.log(this.muscle) // eslint-disable-line
    this.muscle = this.$store.getters.muscleid
  },
  methods: {
    click() {
      console.log(this.muscle) // eslint-disable-line
    }
  },
  middleware: 'auth'
}
</script>
