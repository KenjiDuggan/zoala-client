<template>
<div>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex>
        <h3 class="display-3">Weekly Cardio</h3><nuxt-link to="/cardios/new"><v-btn
          class="mx-0 rounded-corners secondary info--text"
          color="primary"
          large
        ><v-icon>playlist_add</v-icon>
            Add Cardio Plan
        </v-btn></nuxt-link>
        <v-divider class="my-3"></v-divider>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- <div v-for="(ktem, k) in cardio.length" :key="k">
    <h1>{{cardio[k].name}}</h1><v-divider></v-divider>
    <h3>{{cardio[k].description}}</h3><br/>
    <div class="d-flex justify-between align-center mb-3">
      <v-btn  class="info--text accent rounded-corners" @click="all" >Check all week!</v-btn>
      <v-btn class="info--text accent rounded-corners" @click="none">Close Em'</v-btn>
    </div>
    <v-expansion-panel v-model="panel">
      <v-expansion-panel-content class="rounded-corner secondary" v-for="(item,i) in 6" :key="i">
        <template v-slot:header>
          <div class="info--text">{{cardio[k].schedule[i].day.toUpperCase()}}</div>
        </template>
        <v-card>
          <v-card-text>
            <h4>{{cardio[k].schedule[i].bodyPart}}</h4>
            <div v-for="(jtem, j) in cardio[k].schedule[i].workouts.length" :key="j">{{cardio[k].schedule[i].workouts[j]}} </div>
          </v-card-text>
        </v-card> 
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div> -->
    <v-container fill-height align-content-center>
        <v-layout align-center>
            <v-flex>
                <h1>Going for a trip outdoors? Let's try a new trail!</h1>
                <br/>
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
            </v-flex>
        </v-layout>
    </v-container>

</div>
</template>
<script>
export default {
  data() {
    return {
      cardio: [],
      items: 12,
      jtems: 24,
      ktems: 4,
      panel: [],
      length: 3
    };
  },
  methods: {
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
  },

}