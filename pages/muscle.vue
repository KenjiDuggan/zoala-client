<template>
<div>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Weekly Gainz</h3><div>   </div><nuxt-link to="/addmuscle"><v-btn
            class="mx-0 rounded-corners secondary info--text"
            color="primary"
            large
          >
            Add Workout
          </v-btn></nuxt-link>
          <v-divider class="my-3"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>

 
 
  <h1>{{muscle[1].name}}</h1>
  <v-divider></v-divider>
  <h3>{{muscle[1].description}}</h3>
  <br/>
   <div class="d-flex justify-between align-center mb-3">
      <v-btn  class="info--text accent rounded-corners" @click="all">Check all week!</v-btn>
      <v-btn class="info--text accent rounded-corners" @click="none">Close Em'</v-btn>
  </div>
   <v-expansion-panel v-model="panel">
    <v-expansion-panel-content
    class="rounded-corner secondary"
      v-for="(item,i) in 6"
      :key="i"
    >
      <template v-slot:header>
        <div class="info--text">{{muscle[1].schedule[i].day.toUpperCase()}}</div>
      </template>
         <v-card>
              <v-card-text>
                <h4>{{muscle[1].schedule[i].bodyPart}}</h4>
                <div v-for="(jtem, j) in muscle[1].schedule[i].workouts.length" :key="j">{{muscle[1].schedule[i].workouts[j]}}</h4>     
                </v-card-text>
          </v-card> 
          
    </v-expansion-panel-content>
  </v-expansion-panel>
  </div>
</div>
</template>

<script>

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
        this.panel = [...Array(this.items).keys()].map((k, i) => true)
      },
      none () {
        this.panel = []
      },
    },
  created() {
        let username = this.$store.state.username;
        this.$axios.post('/api/getmuscle', {
          username: this.username
        }, {headers: {Authorization: this.$store.state.token}})  
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
  </v-jumbotron>