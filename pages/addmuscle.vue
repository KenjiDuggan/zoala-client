<template>
    <div id="registerplan">
        <h1 class="my-2 subheading secondary--text text-uppercase">Register your weekly plan to get gainz</h1>
        <v-container class="my-5">
            <h1 class="primary--text text-xs-center text-uppercase">General Information</h1>
            <v-card color="primary ma-5 px-3 py-5">
                <v-form class="px-3">
                    <v-text-field
                        name="name"
                        color="background"
                        class="mb-3"
                        label="Plan Name"
                        v-model="name"
                        required
                    ></v-text-field>
                    <v-text-field
                        name="description"
                        color="background"
                        class="mb-3"
                        label="Description"
                        v-model="description"
                        required
                    ></v-text-field>
                </v-form>
            </v-card>
            <v-card class="background pa-4 text-xs-center" flat>
                <h1 class="primary--text text-uppercase">Schedule</h1>
                <v-layout wrap row>
                    <v-flex v-for="(day, i) in days" :key="i" xs12 sm6 md4 lg3>
                        <v-card class="primary text-xs-center ma-3 pa-3" flat>
                            <v-card-title
                                class="subtext1--text text-xs-center font-weight-medium text-uppercase"
                            >{{ day.day }}</v-card-title>
                            <v-text-field
                                color="background"
                                v-model="day.bodyPart"
                                label="Body Part"
                            ></v-text-field>
                            <v-text-field
                                color="background"
                                v-model="musclePlaceholders[i]"
                                label="Exercises"
                                @keyup.enter="addMuscle(day.workouts, musclePlaceholders[i])"
                                hint="Press enter to continue"
                            ></v-text-field>
                            <v-card-text class="px-4 text-xs-left">
                                <ul :style="{listStyle: 'none'}">
                                    <li
                                        class="text-xs-left background--text text-uppercase"
                                        :key="j"
                                        v-for="(workout, j) in day.workouts"
                                    >{{ workout }}</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>
            <div class="text-xs-center">
                <v-btn
                    class="primary mx-0 mt-5 background--text text-uppercase"
                    @click="sendMuscle"
                >Submit</v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
// import {api} from '../plugins/axios.js';

export default {
    data() {
        return {
            name: "",
            description: "",
            musclePlaceholders: ["", "", "", "", "", "", ""],
            days: [
                {
                    day: "monday",
                    bodyPart: "",
                    workouts: []
                },
                {
                    day: "tuesday",
                    bodyPart: "",
                    workouts: []
                },
                {
                    day: "wednesday",
                    bodyPart: "",
                    workouts: []
                },
                {
                    day: "thursday",
                    workouts: []
                },
                {
                    day: "friday",
                    bodyPart: "",
                    workouts: []
                },
                {
                    day: "saturday",
                    bodyPart: "",
                    workouts: []
                },
                {
                    day: "sunday",
                    bodyPart: "",
                    workouts: []
                }
            ],
        };
    },
    methods: {
        addMuscle(array, item) {
            array.push(item);
            this.musclePlaceholders = ["", "", "", "", "", "", ""];
        },
        sendMuscle() {
            // console.log(this.$store.state.token);
            // this.$axios
            //     .post("/muscle", {
            //         name: this.name,
            //         description: this.description,
            //         days: this.days,
            //         username: this.$store.state.username,
            //     })
            //     .then(
            //         setTimeout(() => {
            //             this.$router.push(
            //                 "/muscle"
            //             );
            //         }, 200)
            //     );
       
        let token = this.$store.state.auth
        let username = this.$store.state.username;
        this.$axios.post('/api/muscle', {
          name: this.name,
          description: this.description,
          days: this.days,
          username: username
        },  {headers: {Authorization: this.$store.state.token}})
        .then((response) => {
            console.log(response.data);
            this.$router.push('/inspire');
        }).catch((error) => {
            console.log(error);
        });
        }
    },
};
</script>
