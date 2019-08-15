<template>
  <div>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">
            Weekly Gainz
          </h3><nuxt-link to="/muscles/new">
            <v-btn
              class="mx-0 rounded-corners secondary info--text"
              color="primary"
              large
            >
              <v-icon>playlist_add</v-icon>
              Add Workout
            </v-btn>
          </nuxt-link>
          <v-divider class="my-3" />
        </v-flex>
      </v-layout>
    </v-container>
    <h1>{{ muscle.name }}</h1><v-divider />
    <h3>{{ muscle.description }}</h3><br>
    <div class="d-flex justify-between align-center mb-3">
      <v-btn class="info--text accent rounded-corners" @click="editmuscle(k)">
        Edit this workout
      </v-btn>
      <v-btn class="info--text accent rounded-corners" @click="deletemuscle(k)">
        Delete this workout
      </v-btn>
    </div>
    <v-expansion-panel v-model="panel">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      muscle: [],
      items: 12,
      jtems: 24,
      ktems: 4,
      length: 3
    }
  },
  computed() {
    this.muscle = this.$store.state.muscleid
  },
  methods: {

  },
  middleware: 'auth'
}
</script>
