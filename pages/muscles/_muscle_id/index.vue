<template>
  <div>
    <nuxt-link to="/muscles">
      <v-btn left class="ma-2 secondary" dark>
        <v-icon dark left>
          arrow_back
        </v-icon>Back
      </v-btn>
    </nuxt-link>
    <br>
    <br>
    <h1 class="">
      Focused Weekly Workout
    </h1>
    <v-divider />
    <br>
    <h1>{{ muscle.name }}</h1><v-divider />
    <h3>{{ muscle.description }}</h3><br>
    <!-- <div class="d-flex justify-between align-center mb-3">
      <v-btn class="info--text accent rounded-corners" @click="editmuscle(k)">
        Edit this workout
      </v-btn>
      <v-btn class="info--text accent rounded-corners" @click="deletemuscle(k)">
        Delete this workout
      </v-btn>
    </div> -->
    <v-expansion-panel v-model="panel" expanded="true">
      <v-expansion-panel-content v-for="(item,i) in 6" :key="i" class="rounded-corner secondary">
        <template v-slot:header>
          <div class="info--text">
            {{ muscle.schedule[i].day.toUpperCase() }}
          </div>
        </template>
        <v-card>
          <v-card-text>
            <h4>{{ muscle.schedule[i].bodyPart }}</h4>
            <div v-for="(jtem, j) in muscle.schedule[i].workouts.length" :key="j">
              {{ muscle.schedule[i].workouts[j] }}
            </div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <br>
    <v-btn onclick="click" />
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
