<template>
    <div>
        <h1 class="my-2 subheading secondary--text text-uppercase text-uppercase">{{ plan.name }}</h1>
        <v-container class="my-5">
            <!-- Schedule expansion pannel -->
            <h1 class="display-1 text-uppercase white--text mb-1">schedule</h1>
             
            <v-expansion-panel expand>
                <v-expansion-panel-content
                    :key="i"
                    v-for="(day, i) in plan.schedule"
                    class="primary background--text"
                >
                    <div slot="header" class="text-uppercase">{{ day.day }}</div>
                    <v-card>
                        <v-card-text class="px-4 grey--text subtext1">
                            <div class="font-weight-bold text-uppercase mb-3">{{ day.bodyPart }}</div>
                            <div
                                :key="i"
                                v-for="(muscle, i) in day.plan"
                                class="my-1"
                            >{{ muscle }}</div>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
            
           
            <!-- <div class="text-xs-center mt-5">
                <v-btn flat color="primary" @click="deletePlan()">
                    <v-icon class="primary--text">delete</v-icon>delete plan
                </v-btn>
            </div> -->
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      muscle: "",
    };
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
            console.log('okk');
            console.log(response.data);
            this.muscle = response.data;
        }).catch((error) => {
            console.log('reee');
            console.log(error);
        });
  }
}
</script>
