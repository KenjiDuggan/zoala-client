<template>
  <div>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">
            Weekly Cardio
          </h3>
          <nuxt-link to="/cardios/new">
            <v-btn class="mx-0 rounded-corners secondary info--text" color="success" large>
              <v-icon>playlist_add</v-icon>Add Cardio Plan
            </v-btn>
          </nuxt-link>
          <v-divider class="my-3" />
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fill-height align-content-center>
      <v-layout align-center>
        <v-flex>
          <div>
            <h1>Google Maps Demo</h1>
            <GmapMap
              :center="{lat:10, lng:10}"
              :zoom="7"
              map-type-id="terrain"
              style="width: 500px; height: 300px"
            >
              <GmapMarker
                v-for="(m, index) in markers"
                :key="index"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              />
            </GmapMap>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <br>
    <v-container>
      <div v-for="(ktem, k) in cardio.length" :key="k">
        <h1>{{ cardio[k].name }}</h1><v-divider />
        <h3>{{ cardio[k].description }}</h3><br>
        <div class="d-flex justify-between align-center mb-3">
          <v-btn class="info--text accent rounded-corners" @click="editcardio1(k)">
            Edit this run
          </v-btn>
          <v-btn class="info--text accent rounded-corners" @click="deletecardio1(k)">
            Delete this run
          </v-btn>
        </div>
        <v-expansion-panel v-model="panel">
          <v-expansion-panel-content v-for="(item,i) in 6" :key="i" class="rounded-corner success">
            <template v-slot:header>
              <div class="info--text">
                {{ cardio[k].schedule[i].day.toUpperCase() }}
              </div>
            </template>
            <v-card>
              <v-card-text>
                <h4>{{ cardio[k].schedule[i].speed }}</h4>
                <h4>{{ cardio[k].schedule[i].distance }} miles -- {{ cardio[k].schedule[i].time }} minutes</h4>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <br>
      </div>
    </v-container>
  </div>
</template>

<script>
// import key from '../../secret'
// import axios from 'axios'
export default {
  data() {
    return {
      mapTypeId: 'terrain',
      markers: [
        { position: { lat: -0.48585, lng: 117.1466 } },
        { position: { lat: -6.9127778, lng: 107.6205556 } }
      ],
      cardio: [],
      items: 12,
      jtems: 24,
      ktems: 4,
      panel: [],
      length: 3
    }
  },
  created() {
    this.$axios.get('/api/cardio',
      { setCredentials: true })
      .then((response) => {
        this.cardio = response.data.cardios
        console.log(response.data.cardios) // eslint-disable-line
        this.$store.commit('setCardio', response.data.cardios)
        throw response.data
      }).catch((error) => {
        throw error
      })
  },
  methods: {
    editcardio1(k) {
    console.log(this.cardio) // eslint-disable-line
    console.log(this.cardio[k]._id) // eslint-disable-line
    },
    deletecardio1(k) {
      const id = this.cardio[k]._id
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        buttons: 'Delete'
      }).then(() => {
        this.$axios.delete('/api/cardio/' + id,
          { setCredentials: true })
          .then(() => {
            this.$axios.get('/api/cardio',
              { setCredentials: true })
              .then((response) => {
                this.cardio = response.data.cardios
                this.$store.commit('setCardio', response.data.cardios)
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
