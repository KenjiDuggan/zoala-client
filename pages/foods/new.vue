<template>
    <div>
        <v-container class="my-5">
            <h1 class="warning--text text-xs-center text-uppercase">General information</h1>
            <v-card color="warning ma-5 px-3 py-5 rounded-corners">
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
                <h1 class="warning--text text-uppercase">Schedule</h1>
                <br/>
                <v-layout wrap row>
                    <v-flex v-for="(meal, i) in meals" :key="i" xs12 sm6 md4 lg3>
                        <v-card class="warning text-xs-center ma-3 pa-3 rounded-corners" flat>
                            <v-card-title
                                class="info--text text-xs-left font-weight-medium text-uppercase"
                            >{{ meals[i].day }}</v-card-title>
                            <div>{{meals[i].mealname1}}</div>
                            <v-text-field
                                color="background"
                                v-model="foodPlaceholders1[i]"
                                label="Food Items"
                                @keyup.enter="addFood1(meal[i].meal1, foodPlaceholders1[i])"
                                hint="Press enter to continue"
                            ></v-text-field>
                            <v-card-text class="px-4 text-xs-left">
                                <ul :style="{listStyle: 'none'}">
                                    <li
                                        class="text-xs-left background--text text-uppercase"
                                        :key="j"
                                        v-for="(meal1, j) in meals[i].meal1[j]"
                                    >{{ meal1 }}</li>
                                </ul>
                            </v-card-text>

                            <div>{{meals[i].mealname2}}</div>
                            <v-text-field
                                color="background"
                                v-model="foodPlaceholders2[i]"
                                label="Food Items"
                                @keyup.enter="addFood2(meal[i].meal2, foodPlaceholders2[i])"
                                hint="Press enter to continue"
                            ></v-text-field>
                            <v-card-text class="px-4 text-xs-left">
                                <ul :style="{listStyle: 'none'}">
                                    <li
                                        class="text-xs-left background--text text-uppercase"
                                        :key="j"
                                        v-for="(meal2, j) in meals[i].meal2[j]"
                                    >{{ meal2 }}</li>
                                </ul>
                            </v-card-text>

                        <div>{{meals[i].mealname3}}</div>
                            <v-text-field
                                color="background"
                                v-model="foodPlaceholders3[i]"
                                label="Food Items"
                                @keyup.enter="addFood3(meal[i].meal3, foodPlaceholders3[i])"
                                hint="Press enter to continue"
                            ></v-text-field>
                            <v-card-text class="px-4 text-xs-left">
                                <ul :style="{listStyle: 'none'}">
                                    <li
                                        class="text-xs-left background--text text-uppercase"
                                        :key="j"
                                        v-for="(meal3, j) in meals[i].meal3[j]"
                                    >{{ meal3 }}</li>
                                </ul>
                            </v-card-text>

                            <div>{{meals[i].mealname4}}</div>
                            <v-text-field
                                color="background"
                                v-model="foodPlaceholders4[i]"
                                label="Food Items"
                                @keyup.enter="addFood4(meal[i].meal4, foodPlaceholders4[i])"
                                hint="Press enter to continue"
                            ></v-text-field>
                            <v-card-text class="px-4 text-xs-left">
                                <ul :style="{listStyle: 'none'}">
                                    <li
                                        class="text-xs-left background--text text-uppercase"
                                        :key="j"
                                        v-for="(meal4, j) in meals[i].meal4[j]"
                                    >{{ meal4 }}</li>
                                </ul>
                            </v-card-text>
                                                   
                            <div>{{meals[i].mealname5}}</div>
                            <v-text-field
                                color="background"
                                v-model="foodPlaceholders5[i]"
                                label="Food Items"
                                @keyup.enter="addFood5(meal[i].meal5, foodPlaceholders5[i])"
                                hint="Press enter to continue"
                            ></v-text-field>
                            <v-card-text class="px-4 text-xs-left">
                                <ul :style="{listStyle: 'none'}">
                                    <li
                                        class="text-xs-left background--text text-uppercase"
                                        :key="j"
                                        v-for="(meal5, j) in meals[i].meal5[j]"
                                    >{{ meal5 }}</li>
                                </ul>
                            </v-card-text>

                            <div>{{meals[i].mealname6}}</div>
                            <v-text-field
                                color="background"
                                v-model="foodPlaceholders6[i]"
                                label="Food Items"
                                @keyup.enter="addFood6(meal[i].meal6, foodPlaceholders6[i])"
                                hint="Press enter to continue"
                            ></v-text-field>
                         
                            <v-card-text class="px-4 text-xs-left">
                                <ul :style="{listStyle: 'none'}">
                                    <li
                                        class="text-xs-left background--text text-uppercase"
                                        :key="j"
                                        v-for="(meal6, j) in meals[i].meal6[j]"
                                    >{{ meal6 }}</li>
                                </ul>
                            </v-card-text>

                        </v-card>

                    </v-flex>
                </v-layout>
            </v-card>
            <div class="text-xs-center">
                <v-btn
                    class="warning mx-0 mt-5 info--text text-uppercase rounded-corners"
                    @click="sendFood"
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
            foodPlaceholders1: ["", "", "", "", "", "", ""],
            foodPlaceholders2: ["", "", "", "", "", "", ""],
            foodPlaceholders3: ["", "", "", "", "", "", ""],
            foodPlaceholders4: ["", "", "", "", "", "", ""],
            foodPlaceholders5: ["", "", "", "", "", "", ""],
            foodPlaceholders6: ["", "", "", "", "", "", ""],
            meals: [
                {
                    day: "monday",
                    mealname1: "pre-workout",
                    meal1: [],
                    mealname2: "breakfast",
                    meal2: [],
                    mealname3: "snack",
                    meal3: [],
                    mealname4: "lunch",
                    meal4: [],
                    mealname5: "snack",
                    meal5: [],
                    mealname6: "dinner",
                    meal6: [],
                },
                {
                    day: "tuesday",
                    mealname1: "pre-workout",
                    meal1: [],
                    mealname2: "breakfast",
                    meal2: [],
                    mealname3: "snack",
                    meal3: [],
                    mealname4: "lunch",
                    meal4: [],
                    mealname5: "snack",
                    meal5: [],
                    mealname6: "dinner",
                    meal6: [],
                },
                {
                    day: "wednesday",
                    mealname1: "pre-workout",
                    meal1: [],
                    mealname2: "breakfast",
                    meal2: [],
                    mealname3: "snack",
                    meal3: [],
                    mealname4: "lunch",
                    meal4: [],
                    mealname5: "snack",
                    meal5: [],
                    mealname6: "dinner",
                    meal6: [],
                },
                {
                    day: "thursday",
                    mealname1: "pre-workout",
                    meal1: [],
                    mealname2: "breakfast",
                    meal2: [],
                    mealname3: "snack",
                    meal3: [],
                    mealname4: "lunch",
                    meal4: [],
                    mealname5: "snack",
                    meal5: [],
                    mealname6: "dinner",
                    meal6: [],
                },
                {
                    day: "friday",
                    mealname1: "pre-workout",
                    meal1: [],
                    mealname2: "breakfast",
                    meal2: [],
                    mealname3: "snack",
                    meal3: [],
                    mealname4: "lunch",
                    meal4: [],
                    mealname5: "snack",
                    meal5: [],
                    mealname6: "dinner",
                    meal6: [],
                },
                {
                    day: "saturday",
                    mealname1: "pre-workout",
                    meal1: [],
                    mealname2: "breakfast",
                    meal2: [],
                    mealname3: "snack",
                    meal3: [],
                    mealname4: "lunch",
                    meal4: [],
                    mealname5: "snack",
                    meal5: [],
                    mealname6: "dinner",
                    meal6: [],
                },
                {
                    day: "sunday",
                    mealname1: "pre-workout",
                    meal1: [],
                    mealname2: "breakfast",
                    meal2: [],
                    mealname3: "snack",
                    meal3: [],
                    mealname4: "lunch",
                    meal4: [],
                    mealname5: "snack",
                    meal5: [],
                    mealname6: "dinner",
                    meal6: [],
                }
            ],
        };
    },
    methods: {
        addFood1(array, item) {
            array.push(item);
            this.foodPlaceholders1 = ["", "", "", "", "", "", ""];
        },
        addFood2(array, item) {
            array.push(item);
            this.foodPlaceholders2 = ["", "", "", "", "", "", ""];
        },
        addFood3(array, item) {
            array.push(item);
            this.foodPlaceholders3 = ["", "", "", "", "", "", ""];
        },
        addFood4(array, item) {
            array.push(item);
            this.foodPlaceholders4 = ["", "", "", "", "", "", ""];
        },
        addFood5(array, item) {
            array.push(item);
            this.foodPlaceholders5 = ["", "", "", "", "", "", ""];
        },
        addFood6(array, item) {
            array.push(item);
            this.foodPlaceholders6 = ["", "", "", "", "", "", ""];
        },
        sendFood() {
        let username = this.$store.state.username;
        this.$axios.post('/api/food', {
          name: this.name,
          description: this.description,
          meals: this.meals,
          username: username
        }, {headers: {Authorization: 'Bearer ' + this.$store.state.token}})
        .then((response) => {
            console.log(response.data);
            this.$router.push('/foods');
        }).catch((error) => {
            console.log(error);
        });
        }
    },
    middleware: 'auth'
};
</script>
