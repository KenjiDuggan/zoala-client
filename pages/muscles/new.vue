<template>
    <div>
        <v-container class="my-5">
            <h1 class="secondary--text text-xs-center text-uppercase">General information</h1>
            <v-card color="secondary ma-5 px-3 py-5 rounded-corners">
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
            <v-card class="background pa-4 text-xs-center rounded-corners" flat>
                <h1 class="secondary--text text-uppercase">Schedule</h1>
                <br/>
                <v-layout wrap row>
                    <v-flex v-for="(day, i) in days" :key="i" xs12 sm6 md4 lg3>
                        <v-card class="secondary text-xs-center ma-3 pa-3 rounded-corners" flat>
                            <v-card-title
                                class="info--text text-xs-center font-weight-medium text-uppercase"
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
                    class="secondary mx-0 mt-5 info--text text-uppercase rounded-corners"
                    @click="sendMuscle"
                >Submit</v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    data() {
        return {
            token: null,
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
        let username = this.$store.state.username;
        this.$axios.post('/api/muscle', {
          name: this.name,
          description: this.description,
          days: this.days,
          username: username
        }, {headers: {Authorization: 'Bearer ' + this.$store.state.token}})
        .then((response) => {
            console.log(response.data);
            this.$router.push('/muscles');
        }).catch((error) => {
            console.log(error);
        });
        }
    },
    middleware: 'auth'
};
</script>
