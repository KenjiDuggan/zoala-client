<template>
  <div>
    <h1>Name: {{ muscle.name }}</h1>
    <v-divider />
    <h2>Description: {{ muscle.description }}</h2>
    <!-- <v-simple-table class="warning">
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

      <tbody class="error">
        <div v-for="(item, i) in 6" :key="i">
          <tr>
            <td>{{ muscle.schedule[i].day }}</td>
          </tr>
          <tr>
            <td>{{ muscle.schedule[i].bodyPart }}</td>
          </tr>
          <td v-for="(jtem, j) in muscle.schedule[i].workouts.length" :key="j">
            {{ muscle.schedule[i].workouts[j] }}
          </td>

          </tr>
        </div>
      </tbody>
    </v-simple-table> -->
    <no-ssr placeholder="Loading...">
      <v-client-table :data="tableData" :columns="columns" />
    </no-ssr>
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
      length: 3,
      columns: ['days', 'bodyPart', 'schedule'],
      tableData: [
        { id: 1, day: 'Monday', bodyPart: this.$store.getters.muscleid.schedule[0].bodyPart, schedule: this.$store.getters.muscleid.schedule[0].workouts },
        { id: 2, day: 'Tuesday', bodyPart: this.$store.getters.muscleid.schedule[1].bodyPart, schedule: this.$store.getters.muscleid.schedule[1].workouts },
        { id: 3, day: 'Wednesday', bodyPart: this.$store.getters.muscleid.schedule[2].bodyPart, schedule: this.$store.getters.muscle.schedule[2].workouts },
        { id: 4, day: 'Thursday', bodyPart: this.$store.getters.muscleid.schedule[3].bodyPart, schedule: this.$store.getters.muscle.schedule[3].workouts },
        { id: 5, day: 'Friday', bodyPart: this.$store.getters.muscleid.schedule[4].bodyPart, schedule: this.$store.getters.muscle.schedule[4].workouts },
        { id: 6, day: 'Saturday', bodyPart: this.$store.getters.muscleid.schedule[5].bodyPart, schedule: this.$store.getters.muscle.schedule[5].workouts },
        { id: 7, day: 'Sunday', bodyPart: this.$store.getters.muscleid.schedule[6].bodyPart, schedule: this.$store.getters.muscle.schedule[6].workouts }
      ],
      options: {
        // see the options API
      }
    }
  },
  computed() {
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
