<template>
<div>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex>
        <h3 class="display-3">Weekly Cardio</h3><nuxt-link to="/cardios/new"><v-btn
          class="mx-0 rounded-corners secondary info--text"
          color="success"
          large
        ><v-icon>playlist_add</v-icon>
            Add Cardio Plan
        </v-btn></nuxt-link>
        <v-divider class="my-3"></v-divider>
      </v-flex>
    </v-layout>
  </v-container>
    <v-container fill-height align-content-center>
        <v-layout align-center>
            <v-flex>
                <div>{{this.map}}</div>
                <h1>Going for a trip outdoors? Let's try a new trail!</h1>
                <br/>
                  <GmapMap
                    :center="{lat:10, lng:10}"
                    :zoom="7"
                    map-type-id="terrain"
                    style="width: 700px; height: 450px"
                    />
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      cardio: [],
      items: 12,
      jtems: 24,
      ktems: 4,
      panel: [],
      length: 3,
      map: "",
    };
  },
  methods: {
      getRoute: function () {
        this.directionsService = new google.maps.DirectionsService()
        this.directionsDisplay = new google.maps.DirectionsRenderer()
        this.directionsDisplay.setMap(this.$refs.trip.$mapObject)
        var vm = this
        vm.directionsService.route({
            origin: this.coords,
            destination: this.destination,
            travelMode: 'LEGS'
        }, function (response, status) {
            if (status === 'OK') {
            vm.directionsDisplay.setDirections(response)
            } else {
            console.log('Directions request failed due to ' + status);
            }
        })
    },
      all () {
        this.panel = [...Array(this.items).keys()].map((k, i) => true)
      },
      none () {
         this.panel = []
      },
    },
  mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 1.38, lng: 103.80})
    })
  },
  middleware: 'auth',
  created() {
        let username = this.$store.state.username;
        this.$axios.get('/api/cardio', {headers: {Authorization: 'Bearer ' + this.$store.state.token}})  
        .then((response) => {
            console.log(response.data);
            this.cardio = response.data;
            this.$store.commit('setCardio', response.data);
        }).catch((error) => {
            console.log(error);
        });

        const map = axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyBMzW7cjf-pnPGYZocIg25J5zE-9kUUrjM')
        this.map = map;
  },
}