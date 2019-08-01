<template>
  <div>
    <v-container class="my-5">
      <h1 class="success--text text-xs-center text-uppercase">
        Weekly Cardio Info
      </h1>
      <v-card color="success ma-5 px-3 py-5 rounded-corners">
        <v-form class="px-3">
          <v-text-field
            v-model="name"
            name="name"
            color="background"
            class="mb-3"
            label="Plan Name"
            required
          />
          <v-text-field
            v-model="description"
            name="description"
            color="background"
            class="mb-3"
            label="Description"
            required
          />
        </v-form>
      </v-card>
      <v-card class="background pa-4 text-xs-center rounded-corners" flat>
        <h1 class="success--text text-uppercase">
          Schedule
        </h1>
        <br>
        <v-layout wrap row>
          <v-flex
            v-for="(day, i) in days"
            :key="i"
            xs12
            sm6
            md4
            lg3
          >
            <v-card class="success text-xs-center ma-3 pa-3 rounded-corners" flat>
              <v-card-title
                class="info--text text-xs-center font-weight-medium text-uppercase"
              >
                {{ day.day }}
              </v-card-title>
              <v-select
                v-model="day.speed"
                :items="items"
                color="background"
                label="Relative Effort"
              />
              <v-select
                v-model="day.time"
                :jtems="jtems"
                color="background"
                label="Time (minutes)"
              />
              <v-select
                v-model="day.distance"
                :ktems="ktems"
                color="background"
                label="~Distance (miles)"
              />
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
      <div class="text-xs-center">
        <v-btn
          class="success mx-0 mt-5 info--text text-uppercase rounded-corners"
          @click="sendCardio"
        >
          Submit
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  data() {
    return {
      items: ['Low', 'Moderate', 'High'],
      jtems: ['5', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
      ktems: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
      token: null,
      name: '',
      description: '',
      cardioPlaceholders: ['', '', '', '', '', '', ''],
      days: [
        {
          day: 'monday',
          speed: '',
          time: '',
          distance: ''
        },
        {
          day: 'tuesday',
          speed: '',
          time: '',
          distance: ''
        },
        {
          day: 'wednesday',
          speed: '',
          time: '',
          distance: ''
        },
        {
          day: 'thursday',
          speed: '',
          time: '',
          distance: ''
        },
        {
          day: 'friday',
          speed: '',
          time: '',
          distance: ''
        },
        {
          day: 'saturday',
          speed: '',
          time: '',
          distance: ''
        },
        {
          day: 'sunday',
          speed: '',
          time: '',
          distance: ''
        }
      ]
    }
  },
  methods: {
    sendCardio() {
      const username = this.$store.state.username
      this.$axios.post('/api/cardio', {
        name: this.name,
        description: this.description,
        days: this.days,
        username: username
      }, { headers: { Authorization: 'Bearer ' + this.$store.state.token } })
        .then((response) => {
          this.$router.push('/cardios')
        }).catch((error) => {
          throw error
        })
    }
  },
  middleware: 'auth'
}
</script>
