<template>
  <div>
    <nuxt-link to="/muscles">
      <v-btn left class="ma-2 secondary info--text" dark>
        <v-icon dark left>
          arrow_back
        </v-icon>Back
      </v-btn>
    </nuxt-link>
    <br><br>
    <h1>Name: {{ muscleid.name }}</h1>
    <v-divider />
    <h2>Description: {{ muscleid.description }}</h2>
    <br>
    <v-container>
      <v-flex>
        <v-toolbar color="secondary" dark>
          <v-toolbar-side-icon />
          <v-toolbar-title class="headline text-xs-center">
            Weekly Workout
          </v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <material-card
          class="card-tabs"
          color="secondary"
        >
          <v-flex
            slot="header"
          >
            <v-tabs
              v-model="tab"
              fixed-tabs
            >
              <v-tabs-slider color="amber darken-3" />
              <v-tab
                v-for="(item, index) in items"
                :key="item"
                :class="{active: currentTab === index}"
                @click="currentTab = index"
              >
                {{ item }}
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tab">
            <v-card flat>
              <div v-if="currentTab === 0" v-show="currentTab === 0">
                <v-card-text>
                  <h3>{{ muscleid.schedule[currentTab].bodyPart }}: </h3>
                  <div v-for="j in (muscleid.schedule[currentTab].workouts.length)" :key="j">
                    {{ muscleid.schedule[currentTab].workouts[j-1] }}
                  </div>
                </v-card-text>
              </div>
              <div v-if="currentTab === 1" v-show="currentTab === 1">
                <v-card-text>
                  <h3>{{ muscleid.schedule[currentTab].bodyPart }}: </h3>
                  <div v-for="j in (muscleid.schedule[currentTab].workouts.length + 1)" :key="j">
                    {{ muscleid.schedule[currentTab].workouts[j-1] }}
                  </div>
                </v-card-text>
              </div>
              <div v-if="currentTab === 2" v-show="currentTab === 2">
                <v-card-text>
                  <h3>{{ muscleid.schedule[currentTab].bodyPart }}: </h3>
                  <div v-for="j in (muscleid.schedule[currentTab].workouts.length + 1)" :key="j">
                    {{ muscleid.schedule[currentTab].workouts[j-1] }}
                  </div>
                </v-card-text>
              </div>
              <div v-if="currentTab === 3" v-show="currentTab === 3">
                <v-card-text>
                  <h3>{{ muscleid.schedule[currentTab].bodyPart }}: </h3>
                  <div v-for="j in (muscleid.schedule[currentTab].workouts.length + 1)" :key="j">
                    {{ muscleid.schedule[currentTab].workouts[j-1] }}
                  </div>
                </v-card-text>
              </div>
              <div v-if="currentTab === 4" v-show="currentTab === 4">
                <v-card-text>
                  <h3>{{ muscleid.schedule[currentTab].bodyPart }}: </h3>
                  <div v-for="j in (muscleid.schedule[currentTab].workouts.length + 1)" :key="j">
                    {{ muscleid.schedule[currentTab].workouts[j-1] }}
                  </div>
                </v-card-text>
              </div>
              <div v-if="currentTab === 5" v-show="currentTab === 5">
                <v-card-text>
                  <h3>{{ muscleid.schedule[currentTab].bodyPart }}: </h3>
                  <div v-for="j in (muscleid.schedule[currentTab].workouts.length + 1)" :key="j">
                    {{ muscleid.schedule[currentTab].workouts[j-1] }}
                  </div>
                </v-card-text>
              </div>
              <div v-if="currentTab === 6" v-show="currentTab === 6">
                <v-card-text>
                  <h3>{{ muscleid.schedule[currentTab].bodyPart }}: </h3>
                  <div v-for="j in (muscleid.schedule[currentTab].workouts.length + 1)" :key="j">
                    {{ muscleid.schedule[currentTab].workouts[j-1] }}
                  </div>
                </v-card-text>
              </div>
            </v-card>
          </v-tabs-items>
        </material-card>
      </v-flex>
    </v-container>
  </div>
  </v-card>
  </v-tabs-items>
  </material-card>
  </v-flex>
  </v-container>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentTab: 0,
      tab: null,
      muscle: [],
      items: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      jtems: 24,
      ktems: 4,
      length: 3
    }
  },
  computed: {
    ...mapGetters([
      'muscleid'
    ])
  },
  methods: {
  },
  middleware: 'auth'
}
</script>
