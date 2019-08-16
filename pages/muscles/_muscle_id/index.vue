<template>
  <div>
    <h1>Name: {{ muscle.name }}</h1>
    <v-divider />
    <h2>Description: {{ muscle.description }}</h2>
    <!-- <v-simple-table class="warning">
      <thead>
        <tr>
          <th class="text-left">
            Day
          </th>
          <th class="text-left">
            Body Part
          </th>
          <th class="text-left">
            Exercises
          </th>
        </tr>
      </thead>

      <tbody class="error">
        <div v-for="(item, i) in 6" :key="i">
          <tr>
            <td>{{ muscle.schedule[i].day }}</td>
          </tr>
          <tr>
            <td>{{ muscle.schedule[i].bodyPart }}</td>
          </tr>
          <td v-for="(jtem, j) in muscle.schedule[i].workouts.length" :key="j">
            {{ muscle.schedule[i].workouts[j] }}
          </td>

          </tr>
        </div>
      </tbody>
    </v-simple-table> -->
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
                  <b>{{ item.title }}</b>
                  <v-btn
                    slot="activator"
                    left
                    class="v-btn--simple txt-xs-right"
                    color="danger"
                    icon
                    @click="removeDailie(index)"
                  >
                    <v-icon color="error">
                      check
                    </v-icon>
                  </v-btn>
                  <v-btn
                    slot="activator"
                    left
                    class="v-btn--simple"
                    color="danger"
                    icon
                    @click="editDailie1()"
                  >
                    <v-icon color="error">
                      edit
                    </v-icon>
                  </v-btn>
                  <div v-if="editDailie">
                    <v-flex xs12>
                      <v-text-field v-model="dailyEdit" label="Editing Now" @keyup.enter="editDailie2(item.id)" />
                    </v-flex>
                  </div>
                </v-card-text>
              </div>
            </v-card>
          </v-tabs-items>
        </material-card>
      </v-flex>
    </v-container>
    <v-btn onclick="click">
      wow
    </v-btn>
  </div>
</template>
<script>

export default {
  data() {
    return {
      muscle: [],
      items: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      jtems: 24,
      ktems: 4,
      length: 3
    }
  },
  mounted() {
    this.muscle = this.$store.getters.muscleid
    console.log(this.muscle) // eslint-disable-line
  },
  methods: {
    click() {
      console.log(this.muscle) // eslint-disable-line
    }
  },
  middleware: 'auth'
}
</script>
