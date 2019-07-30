<template>
  <div>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Weekly Cardio</h3>
          <nuxt-link to="/cardios/new">
            <v-btn class="mx-0 rounded-corners secondary info--text" color="success" large>
              <v-icon>playlist_add</v-icon>Add Cardio Plan
            </v-btn>
          </nuxt-link>
          <v-divider class="my-3"></v-divider>
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
            :key="index"
            v-for="(m, index) in markers"
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
  </div>
</template>

<script>
import key from '../../secret'
import axios from 'axios'
export default {
  data() {
    return {
      mapTypeId: "terrain",
      markers: [
        { position: { lat: -0.48585, lng: 117.1466 } },
        { position: { lat: -6.9127778, lng: 107.6205556} }
      ],
      cardio: [],
      items: 12,
      jtems: 24,
      ktems: 4,
      panel: [],
      length: 3,
    }
  },
  methods: {
   
  },
  // created() {
  //   let username = this.$store.state.username
  //   this.$axios
  //     .get('/api/cardio', {
  //       headers: { Authorization: 'Bearer ' + this.$store.state.token }
  //     })    
  //     console.log(map);
  //   console.log(this.$store.state.map)
  //     .then((response) => {
  //       console.log(response.data)
  //       this.cardio = response.data
  //       this.$store.commit('setCardio', response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },

  middleware: 'auth'
}
