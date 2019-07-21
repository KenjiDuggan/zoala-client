<template>
<div>
  <v-jumbotron>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Weekly Workout</h3>
          <span class="subheading">Get ThiKK or go home! </span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Add New Weekly Workout Routine</div>
          <nuxt-link to="/addmuscle"><v-btn
            class="mx-0"
            color="primary"
            large
          >
            Add Workout
          </v-btn></nuxt-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>


  <div class="d-flex justify-between align-center mb-3">
      <v-btn @click="all">Check all week!</v-btn>
      <v-btn @click="none">Close Em'</v-btn>
  </div>


  <h2>{{muscle[2].name}}</h2>
  <v-divider></v-divider>
  <h3>{{muscle[2].description}}</h3>
  <v-divider></v-divider>

   <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(item,i) in 6"
      :key="i"
    >
      <template v-slot:header>
        <div>{{muscle[2].schedule[i].day}}</div>
      </template>
         <v-card>
              <v-card-text>
                 <h4>{{muscle[2].schedule[i].bodyPart}}</h4>
                 <div
                            :key="j"
                            v-for="(workout, j) in muscle[2].schedule[i].workouts[j]"
                            class="my-1"
                        >{{ workout }}</div>
              </v-card-text>
          </v-card>
          <!-- <v-card>
              <v-card-text>
                  {{muscle[2].schedule[i].bodyPart]}}
              </v-card-text>
          </v-card> -->
          <!-- <v-card>
              <v-card-text>
                  {{muscle[2].schedule[i].workouts}}
              </v-card-text>
          </v-card> -->
    </v-expansion-panel-content>
  </v-expansion-panel>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      muscle: [],
      items: 12,
      jtems: 24,
      panel: [],
      length: 3
    };
  },
   methods: {
      all () {
        this.panel = [...Array(this.items).keys()].map(_ => true)
      },
      none () {
        this.panel = []
      }
    },
  created() {
        const headers = {
            "Authorization": this.$store.state.token,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        let email = this.$store.state.email;
        axios.post('http://localhost:8081/getmuscle',{
          email: email
        }, {headers: headers})
        .then((response) => {
            console.log(response.data);
            this.muscle = response.data;

            this.$store.commit('setMuscle', response.data);
        }).catch((error) => {
            console.log(error);
        });
  }
}
</script>
