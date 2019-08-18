<template>
  <div>
    <nuxt-link to="/muscles">
      <v-btn left class="ma-2 secondary info--text" dark>
        <v-icon dark left>
          arrow_back
        </v-icon>Back
      </v-btn>
    </nuxt-link>
    <br>
    <br>
    <br>
    <h1 class="">
      Edit Weekly Workout
    </h1>
    <v-divider />
    <v-btn onclick="all">
      Start Editing
    </v-btn>
    <br>
    <h1>{{ muscleid.name }}</h1><v-divider />
    <h3>{{ muscleid.description }}</h3><br>
    <v-expansion-panels
      v-model="panel"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(item,i) in 6" :key="i" class="rounded-corner secondary">
          <template v-slot:header>
            <div class="info--text">
              {{ muscleid.schedule[i].day.toUpperCase() }}
            </div>
          </template>
          <v-card>
            <v-card-text>
              <v-form @submit="editnow">
                <v-textarea v-model="bodypartedit" rows="1" :label="muscleid.schedule[i].bodyPart" />
                <v-textarea v-for="(jtem, j) in muscleid.schedule[i].workouts.length" :key="j" v-model="workoutseditPlaceholders[j]" rows="1" :label="muscleid.schedule[i].workouts[j]" />
                <v-btn @click="submit">
                  Edit Day
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <br>
    <v-btn class="secondary info--text">
      Save the changes
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      panel: [],
      jtems: 24,
      ktems: 4,
      length: 3,
      bodypartedit: '',
      workoutseditPlaceholders: ['', '', '', '', '', '', '', '', '', '', '', ''],
      editworkouts: [
        {
          day: this.$store.state.muscleid.schedule[0].day,
          bodypart: this.$store.state.muscleid.schedule[0].bodyPart,
          workouts: this.$store.state.muscleid.schedule[0].workouts
        },
        {
          day: this.$store.state.muscleid.schedule[1].day,
          bodypart: this.$store.state.muscleid.schedule[1].bodyPart,
          workouts: this.$store.state.muscleid.schedule[1].workouts
        },
        {
          day: this.$store.state.muscleid.schedule[2].day,
          bodypart: this.$store.state.muscleid.schedule[2].bodyPart,
          workouts: this.$store.state.muscleid.schedule[2].workouts
        },
        {
          day: this.$store.state.muscleid.schedule[3].day,
          bodypart: this.$store.state.muscleid.schedule[3].bodyPart,
          workouts: this.$store.state.muscleid.schedule[3].workouts
        },
        {
          day: this.$store.state.muscleid.schedule[4].day,
          bodypart: this.$store.state.muscleid.schedule[4].bodyPart,
          workouts: this.$store.state.muscleid.schedule[4].workouts
        },
        {
          day: this.$store.state.muscleid.schedule[5].day,
          bodypart: this.$store.state.muscleid.schedule[5].bodyPart,
          workouts: this.$store.state.muscleid.schedule[5].workouts
        },
        {
          day: this.$store.state.muscleid.schedule[6].day,
          bodypart: this.$store.state.muscleid.schedule[6].bodyPart,
          workouts: this.$store.state.muscleid.schedule[6].workouts
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'muscleid'
    ])
  },
  methods: {
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i)
    },
    editday(k) {

    },
    editweek(k) {

    }
  },
  middleware: 'auth'
}
</script>

<style scoped>
.primary{
  font-size: 30px;
}
.secondary{
  font-size: 23px;
}
.uppercase{
  text-transform: uppercase;
}
</style>
