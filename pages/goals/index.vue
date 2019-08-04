<template>
  <div>
    <v-container>
      <v-flex>
        <v-toolbar color="secondary" dark>
          <v-toolbar-side-icon />
          <v-toolbar-title class="headline text-xs-center">
            List of Things To-Do
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
                <v-card-text v-for="item in dailies" :key="item.id">
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
              <div v-else-if="currentTab === 1" v-show="currentTab === 1">
                <v-card-text v-for="item in urgents" :key="item.id">
                  <b>{{ item.title }}</b>
                  <v-btn
                    slot="activator"
                    left
                    class="v-btn--simple"
                    color="danger"
                    icon
                    @click="removeUrgent(index)"
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
                    @click="editUrgent1()"
                  >
                    <v-icon color="error">
                      edit
                    </v-icon>
                  </v-btn>
                  <div v-if="editUrgent">
                    <v-flex xs12>
                      <v-text-field v-model="urgentEdit" label="Editing Now" @keyup.enter="editUrgent2(item.id)" />
                    </v-flex>
                  </div>
                </v-card-text>
              </div>
              <div v-else-if="currentTab === 2" v-show="currentTab === 2">
                <v-card-text v-for="item in ongoings" :key="item.id">
                  <b>{{ item.title }}</b>
                  <v-btn
                    slot="activator"
                    left
                    class="v-btn--simple"
                    color="danger"
                    icon
                    @click="removeOngoing(index)"
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
                    @click="editOngoing1()"
                  >
                    <v-icon color="error">
                      edit
                    </v-icon>
                  </v-btn>
                  <div v-if="editOngoing">
                    <v-flex xs12>
                      <v-text-field v-model="ongoingEdit" label="Editing Now" @keyup.enter="editOngoing2(item.id)" />
                    </v-flex>
                  </div>
                </v-card-text>
              </div>
              <div v-else-if="currentTab === 3" v-show="currentTab === 3">
                <v-card-text v-for="item in healths" :key="item.id">
                  <b>{{ item.title }}</b>
                  <v-btn
                    slot="activator"
                    left
                    class="v-btn--simple"
                    color="danger"
                    icon
                    @click="removeHealth(index)"
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
                    @click="editHealth1(index)"
                  >
                    <v-icon color="error">
                      edit
                    </v-icon>
                  </v-btn>
                  <div v-if="editHealth">
                    <v-flex xs12>
                      <v-text-field v-model="healthEdit" label="Editing Now" @keyup.enter="editHealth2(item.id)" />
                    </v-flex>
                  </div>
                </v-card-text>
              </div>
            </v-card>
          </v-tabs-items>
        </material-card>
      </v-flex>
    </v-container>
    <br>
    <v-container>
      <v-layout row justify-center class="ma-5">
        <v-flex>
          <v-card>
            <v-list two-line subheader>
              <v-container>
                <v-subheader class="headline">
                  {{ day }}, {{ date }}{{ ord }} {{ year }}
                </v-subheader>
                <v-spacer />
                <v-select
                  v-model="selected"
                  :items="items"
                  label="Type of task"
                  @change="selectTodo"
                />
                <div v-if="dailietruth">
                  <v-flex xs12>
                    <v-text-field v-model="newDailie" clearable name="newDailie" label="Task description" @keyup.enter="addDailie()" />
                  </v-flex>
                </div>
                <div v-else-if="urgenttruth">
                  <v-flex xs12>
                    <v-text-field v-model="newUrgent" clearable name="newUrgent" label="Task description" @keyup.enter="addUrgent()" />
                  </v-flex>
                </div>
                <div v-else-if="ongoingtruth">
                  <v-flex xs12>
                    <v-text-field v-model="newOngoing" clearable name="newOngoing" label="Task description" @keyup.enter="addOngoing()" />
                  </v-flex>
                </div>
                <div v-else>
                  <v-flex xs12>
                    <v-text-field v-model="newHealth" clearable name="newHealth" label="Task description" @keyup.enter="addHealth()" />
                  </v-flex>
                </div>
              </v-container>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn @click="sendGoals">
      Save your goals!
    </v-btn>
  </div>
</template>
<script>
export default {
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  data() {
    return {
      currentTab: 0,
      tab: null,
      items: ['Dailie', 'Urgent', 'Ongoing', 'Health'],
      selected: '',
      list: {
        0: false,
        1: false,
        2: false
      },
      dailietruth: false,
      ongoingtruth: false,
      urgenttruth: false,
      healthtruth: false,
      editDailie: false,
      editOngoing: false,
      editUrgent: false,
      editHealth: false,
      isDark: true,
      show: true,
      newDailie: '',
      newHealth: '',
      newOngoing: '',
      newUrgent: '',
      dailieEdit: '',
      healthEdit: '',
      ongoingEdit: '',
      urgentEdit: '',
      dailies: [],
      dailie: [],
      urgents: [],
      urgent: [],
      ongoings: [],
      ongoing: [],
      healths: [],
      health: [],
      day: this.todoDay(),
      date: new Date().getDate(),
      ord: this.nth(new Date().getDate()),
      year: new Date().getFullYear()
    }
  },
  created() {
    this.$axios.get('/api/goal', { headers: { Authorization: 'Bearer ' + this.$store.state.token } })
      .then((response) => {
        console.log(response.data[response.data.length - 1].dailie) // eslint-disable-line
        this.dailies = response.data[response.data.length - 1].dailie
        this.ongoings = response.data[response.data.length - 1].ongoing
        this.urgents = response.data[response.data.length - 1].urgent
        this.healths = response.data[response.data.length - 1].health
          console.log(this.dailies) // eslint-disable-line
          console.log(this.ongoings) // eslint-disable-line
        throw response.data
      }).catch((error) => {
        throw error
      })
  },
  methods: {
    addDailie() {
      const value = this.newDailie && this.newDailie.trim()
      if (!value) {
        return this.newDailie
      }
      this.dailies.push({
        title: this.newDailie,
        done: false
      })
      this.newDailie = ''
    },
    addUrgent() {
      const value = this.newUrgent && this.newUrgent.trim()
      if (!value) {
        return this.newUrgent
      }
      this.urgents.push({
        title: this.newUrgent,
        done: false
      })
      this.newUrgent = ''
    },
    addOngoing() {
      const value = this.newOngoing && this.newOngoing.trim()
      if (!value) {
        return this.newOngoing
      }
      this.ongoings.push({
        title: this.newOngoing,
        done: false
      })
      this.newOngoing = ''
    },
    addHealth() {
      const value = this.newHealth && this.newHealth.trim()
      if (!value) {
        return this.newHealth
      }
      this.healths.push({
        title: this.newHealth,
        done: false
      })
      this.newHealth = ''
    },
    removeDailie(index) {
      this.dailies.splice(index, 1)
    },
    removeUrgent(index) {
      this.urgents.splice(index, 1)
    },
    removeOngoing(index) {
      this.ongoings.splice(index, 1)
    },
    removeHealth(index) {
      this.healths.splice(index, 1)
    },
    editDailie1(index) {
      this.editDailie = true
    },
    editUrgent1(index) {
      this.editUrgent = true
    },
    editOngoing1(index) {
      this.editOngoing = true
    },
    editHealth1(index) {
      this.editHealth = true
    },
    editDailie2(index) {
      console.log(this.dailies) // eslint-disable-line
      console.log(index); // eslint-disable-line
      this.dailies[index] = this.dailieEdit
      this.editDailie = false
      this.dailiEdit = ''
    },
    editUrgent2(index) {
      this.urgents[index] = this.urgentEdit
      this.editUrgent = false
      this.urgentEdit = ''
    },
    editOngoing2(index) {
      this.ongoings[index] = this.ongoingEdit
      this.editOngoing = false
      this.ongoingEdit = ''
    },
    editHealth2(index) {
      this.healths[index] = this.healthEdit
      this.editHealth = false
      this.healthEdit = ''
    },
    todoDay() {
      const d = new Date()
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      return days[d.getDay()]
    },
    nth(d) {
      if (d > 3 && d < 21) return 'th'
      switch (d % 10) {
        case 1: return 'st'
        case 2: return 'nd'
        case 3:return 'rd'
        default:return 'th'
      }
    },
    complete(index) {
      this.list[index] = !this.list[index]
    },
    selectTodo() {
      if (this.selected === 'Dailie') {
        this.dailietruth = true
        this.urgenttruth = false
        this.ongoingtruth = false
        this.healthtruth = false
      } else if (this.selected === 'Urgent') {
        this.dailietruth = false
        this.urgenttruth = true
        this.ongoingtruth = false
        this.healthtruth = false
      } else if (this.selected === 'Ongoing') {
        this.dailietruth = false
        this.urgenttruth = false
        this.ongoingtruth = true
        this.healthtruth = false
      } else if (this.selected === 'Health') {
        this.dailietruth = false
        this.urgenttruth = false
        this.ongoingtruth = false
        this.healthtruth = true
      }
    },
    sendGoals() {
      this.$axios.post('/api/goal', {
        dailie: this.dailies,
        urgent: this.urgents,
        ongoing: this.ongoings,
        health: this.healths
      }, { headers: { Authorization: 'Bearer ' + this.$store.state.token } })
        .then((response) => {
          this.$store.commit('setDailies', this.dailies)
          this.$store.commit('setUrgents', this.urgents)
          this.$store.commit('setOngoings', this.ongoings)
          this.$store.commit('setHealths', this.healths)
          throw response
        }).catch((error) => {
          throw error
        })
    }
  }
}
</script>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>
