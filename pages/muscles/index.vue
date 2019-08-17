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
    <div v-for="(ktem, k) in muscle.length" :key="k">
      <h1>{{ muscle[k].name }}</h1><v-divider />
      <h3>{{ muscle[k].description }}</h3><br>
      <div class="d-flex justify-between align-center mb-3">
        <v-btn class="info--text accent rounded-corners" @click="seemuscle(k)">
          See this workout
        </v-btn>
        <v-btn class="info--text accent rounded-corners" @click="editmuscle(k)">
          Edit this workout
        </v-btn>
        <v-btn class="info--text accent rounded-corners" @click="deletemuscle(k)">
          Delete this workout
        </v-btn>
      </div>
      <v-expansion-panel v-model="panel" inset>
        <v-expansion-panel-content v-for="(item,i) in 6" :key="i" class="rounded-corner secondary">
          <template v-slot:header>
            <div class="info--text">
              {{ muscle[k].schedule[i].day.toUpperCase() }}
            </div>
          </template>
          <v-card>
            <v-card-text>
              <h4>{{ muscle[k].schedule[i].bodyPart }}</h4>
              <div v-for="(jtem, j) in muscle[k].schedule[i].workouts.length" :key="j">
                {{ muscle[k].schedule[i].workouts[j] }}
              </div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      muscle: [],
      muscleedit: [],
      items: 12,
      jtems: 24,
      ktems: 4,
      length: 3
    }
  },
  created() {
    this.$axios.get('/api/muscle',
      { setCredentials: true })
      .then((response) => {
        this.muscle = response.data.muscles
        console.log(response.data.muscles) // eslint-disable-line
        this.$store.commit('setMuscle', response.data.muscles)
        console.log(this.$store.state.muscle) // eslint-disable-line
        throw response.data
      }).catch((error) => {
        throw error
      })
  },
  methods: {
    seemuscle(k) {
      this.$store.commit('setMuscleId', this.muscle[k])
      const id = this.muscle[k]._id
      this.$router.push('/muscles/' + id)
    },
    editmuscle(k) {
      this.$store.commit('setMuscleId', this.muscle[k])
      const id = this.muscle[k]._id
      this.$router.push('/muscles/' + id + '/edit')
    },
    deletemuscle(k) {
      const id = this.muscle[k]._id
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        buttons: 'Delete'
      }).then(() => {
        this.$axios.delete('/api/muscle/' + id,
          { setCredentials: true })
          .then(() => {
            this.$axios.get('/api/muscle',
              { setCredentials: true })
              .then((response) => {
                this.muscle = response.data.muscles
                this.$store.commit('setMuscle', response.data.muscles)
                throw response.data
              }).catch((error) => {
                throw error
              })
          })
          console.log(this.muscle[k].name) // eslint-disable-line
      }).catch((e) => {
        console.log(e) // eslint-disable-line
      })
    }
  },
  middleware: 'auth'
}
</script>
