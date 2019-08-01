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
                <v-card-text v-for="item in dailies" :key="item.title">
                  <b>{{ item.title }}</b>
                  <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                    <v-icon color="error">
                      close
                    </v-icon>
                  </v-btn>
                  <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                    <v-icon color="error">
                      done
                    </v-icon>
                  </v-btn>
                  <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                    <v-icon color="error">
                      edit
                    </v-icon>
                  </v-btn>
                </v-card-text>
              </div>
              <div v-else-if="currentTab === 1" v-show="currentTab === 1">
                <v-card-text v-for="item in urgents" :key="item.title">
                  <b>{{ item.title }}</b>
                  <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                    <v-icon color="error">
                      close
                    </v-icon>
                  </v-btn>
                  <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                    <v-icon color="error">
                      done
                    </v-icon>
                  </v-btn>
                  <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                    <v-icon color="error">
                      edit
                    </v-icon>
                  </v-btn>
                </v-card-text>
              </div>
              <div v-else-if="currentTab === 2" v-show="currentTab === 2">
                <v-card-text v-for="item in ongoings" :key="item.title">
                  <b>{{ item.title }}</b>
                  <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                    <v-icon color="error">
                      close
                    </v-icon>
                  </v-btn>
                  <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                    <v-icon color="error">
                      done
                    </v-icon>
                  </v-btn>
                  <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                    <v-icon color="error">
                      edit
                    </v-icon>
                  </v-btn>
                </v-card-text>
              </div>
              <div v-else-if="currentTab === 3" v-show="currentTab === 3">
                <v-card-text v-for="item in healths" :key="item.title">
                  <b>{{ item.title }}</b>
                  <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                    <v-icon color="error">
                      close
                    </v-icon>
                  </v-btn>
                  <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                    <v-icon color="error">
                      done
                    </v-icon>
                  </v-btn>
                  <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                    <v-icon color="error">
                      edit
                    </v-icon>
                  </v-btn>
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
                    <v-text-field v-model="newDailie" clearable name="newDailie" label="Task description" @keyup.enter="addDailie" />
                  </v-flex>
                </div>
                <div v-else-if="urgenttruth">
                  <v-flex xs12>
                    <v-text-field v-model="newUrgent" clearable name="newUrgent" label="Task description" @keyup.enter="addUrgent" />
                  </v-flex>
                </div>
                <div v-else-if="ongoingtruth">
                  <v-flex xs12>
                    <v-text-field v-model="newOngoing" clearable name="newOngoing" label="Task description" @keyup.enter="addOngoing" />
                  </v-flex>
                </div>
                <div v-else>
                  <v-flex xs12>
                    <v-text-field v-model="newHealth" clearable name="newHealth" label="Task description" @keyup.enter="addHealth" />
                  </v-flex>
                </div>
              </v-container>
              <div v-if="dailietruth">
                <v-subheader v-if="dailies.length == 0" class="subheading">
                  You have 0 Tasks, add some
                </v-subheader>
                <v-subheader v-else class="subheading">
                  Your Tasks
                </v-subheader>
              </div>
              <div v-else-if="urgenttruth">
                <v-subheader v-if="urgents.length == 0" class="subheading">
                  You have 0 Tasks, add some
                </v-subheader>
                <v-subheader v-else class="subheading">
                  Your Tasks
                </v-subheader>
              </div>
              <div v-else-if="ongoingtruth">
                <v-subheader v-if="ongoings.length == 0" class="subheading">
                  You have 0 Tasks, add some
                </v-subheader>
                <v-subheader v-else class="subheading">
                  Your Tasks
                </v-subheader>
              </div>
              <div v-else>
                <v-subheader v-if="healths.length == 0" class="subheading">
                  You have 0 Tasks, add some
                </v-subheader>
                <v-subheader v-else class="subheading">
                  Your Tasks
                </v-subheader>
              </div>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
      isDark: true,
      show: true,
      newDailie: '',
      newHealth: '',
      newOngoing: '',
      newUrgent: '',
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
  methods: {
    addDailie() {
      const value = this.newDailie && this.newDailie.trim()
      if (!value) {
        return
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
        return
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
        return
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
        return
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
    }
  }
}
</script>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>
