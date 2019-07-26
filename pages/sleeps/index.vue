<template>
<div>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex>
        <h3 class="display-3">Sleep Tracker</h3>
        <v-btn class="rounded-corners error"><nuxt-link to="/sleeps/new/">Sleep</nuxt-link></v-btn>
        <v-divider class="my-3"></v-divider>
        <h3>Current sleep time average in minutes:  {{avg}}</h3>
      </v-flex>
    </v-layout>
  </v-container>
      <vue-frappe
            id="test"
            :labels="[
               'day 1', 'day 2', 'day 3', 'day 4', 'day 5'
            ]"
            title="Sleep Minutes Per Day"
            type="axis-mixed"
            :height="300"
            :colors="['purple', '#ffa3ef', 'light-blue']"
            :dataSets="this.data">
        </vue-frappe>
        <br/>
        <v-divider></v-divider>
    <v-expansion-panel v-model="panel">
      <v-expansion-panel-content class="rounded-corner error" v-for="(item,i) in sleep.length" :key="i">
        <template v-slot:header>
          <div class="info--text">Day {{i + 1}}</div>
        </template>
        <v-card>
          <v-card-text>
            <h4>From: {{sleep[i].schedule[0].hour1}}:{{sleep[i].schedule[0].minute1}}</h4>
            <h4>To: {{sleep[i].schedule[0].hour2}}:{{sleep[i].schedule[0].minute2}}</h4>
            <h4>Length of Sleep: {{sleep[i].schedule[0].sendhour}}:{{sleep[i].schedule[0].sendminute}}</h4>
            <h4>Total Nber of minutes: {{sleep[i].schedule[0].avgminute}}</h4>
          </v-card-text>
        </v-card> 
      </v-expansion-panel-content>
    </v-expansion-panel>
</div>
</template>

<script>
import Vue from 'vue'
import Chart from 'vue2-frappe'
 
Vue.use(Chart)

export default {
  data() {
    return {
     data: [
         {
        name: "Sleep Min", type: "line",
        values: []
        },
      ],
      sleep: [],
      items: 4,
      length: 3,
      avg: 0
    };
  },
  middleware: 'auth',
  created() {
        let username = this.$store.state.username;
        this.$axios.get('/api/sleep', {headers: {Authorization: 'Bearer ' + this.$store.state.token}})  
        .then((response) => {
            console.log(response.data);
            this.sleep = response.data;
            let tot = 0;
            for (var i = 0; i < response.data.length; i++){
                this.data[0].values.push(this.sleep[i].schedule[0].avgminute);
                tot += this.sleep[i].schedule[0].avgminute
            }
            this.avg = tot/(response.data.length);
            this.$store.commit('setSleep', response.data);
        }).catch((error) => {
            console.log(error);
        });
  },
}
</script>
