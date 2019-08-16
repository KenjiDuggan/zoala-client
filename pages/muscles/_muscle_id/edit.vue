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
    <h1>{{ muscleid.name }}</h1><v-divider />
    <h3>{{ muscleid.description }}</h3><br>
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
            {{ muscleid.schedule[i].day.toUpperCase() }}
          </div>
        </template>
        <v-card>
          <v-card-text>
            <h4>{{ muscleid.schedule[i].bodyPart }}</h4>
            <div v-for="(jtem, j) in muscleid.schedule[i].workouts.length" :key="j">
              {{ muscleid.schedule[i].workouts[j] }}
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
import mapGetters from 'vuex'
export default {
  data() {
    return {
      muscle: '',
      jtems: 24,
      ktems: 4,
      length: 3
    }
  },
  ccomputed: {
    ...mapGetters([
      'muscleid'
    ])
  },
  methods: {
    click() {
      console.log(this.muscle) // eslint-disable-line
    },
    deletemuscle1(k) {
      const id = muscleid._id
      console.log(muscleid._id)
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
