<template>
  <div>
    <v-container>
      <v-flex>
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
              <div v-show="currentTab === 0">
                <v-card-text v-for="item in dailies" :key="item.title">
                  {{ item.title }}
                </v-card-text>
              </div>
              <div v-show="currentTab === 1">
                <v-card-text v-for="item in ongoings" :key="item.title">
                  {{ item.title }}
                </v-card-text>
              </div>
              <div v-show="currentTab === 2">
                <v-card-text v-for="item in urgents" :key="item.title">
                  {{ item.title }}
                </v-card-text>
              </div>
              <div v-show="currentTab === 3">
                <v-card-text v-for="item in healths" :key="item.title">
                  {{ item.title }}
                </v-card-text>
              </div>
            </v-card>
          </v-tabs-items>
          <!-- <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <v-list three-line>
                <v-list-tile @click="complete(0)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="green"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Sign contract for "What are conference organized afraid of?"
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">
                          pencil
                        </v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">
                          close
                        </v-icon>
                      </v-btn>
                      <span>Status</span>
                    </v-tooltip>

                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">
                          close
                        </v-icon>
                      </v-btn>
                      <span>
                        Close
                      </span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
                <v-divider />
                <v-list-tile @click="complete(1)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[1]"
                      color="success"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Lines From Great Russian Literature? Or E-mails From My Boss?
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">
                          pencil
                        </v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">
                          close
                        </v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
                <v-divider />
                <v-list-tile @click="complete(2)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[2]"
                      color="success"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">
                          pencil
                        </v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">
                          close
                        </v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
              </v-list>
            </v-tab-item>
          </v-tabs-items> -->
        </material-card>
      </v-flex>
    </v-container>
    <br>
    <v-container>
      <v-layout row justify-center class="ma-5">
        <v-flex>
          <v-card>
            <v-toolbar color="secondary" dark>
              <v-toolbar-side-icon />
              <v-toolbar-title class="headline text-xs-center">
                Today's List
              </v-toolbar-title>
              <v-spacer />>
            </v-toolbar>
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
                />
                <div v-if="selected==='Dailie'">
                  <v-flex xs12>
                    <v-text-field v-model="newDailie" clearable name="newDailie" label="Task description" @keyup.enter="addDailie" />
                  </v-flex>
                </div>
                <div v-else-if="selected==='Urgent'">
                  <v-flex xs12>
                    <v-text-field v-model="newUrgent" clearable name="newUrgent" label="Task description" @keyup.enter="addUrgent" />
                  </v-flex>
                </div>
                <div v-else-if="selected==='Ongoing'">
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
              <div v-if="selected='Dailie'">
                <v-subheader v-if="dailies.length == 0" class="subheading">
                  You have 0 Tasks, add some
                </v-subheader>
                <v-subheader v-else class="subheading">
                  Your Tasks
                </v-subheader> // eslint-disable-next-line
                <!-- <div v-for="(dailie, i) in dailies" :key="dailie.id">
                  // eslint-disable-line
                  // eslint-disable-line
                  <v-list-tile avatar>
                    <v-list-tile-action>
                      <v-checkbox v-model="dailie.done" />
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title
                        class="title"
                        :class="{
                          done: dailie.done
                        }"
                      >
                        {{ dailie.title | capitalize }}
                      </v-list-tile-title>
                      <v-list-tile-sub-title>
                        Added on: {{ date }}{{ ord }} {{ day }} {{ year }}
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-btn v-if="dailie.done" icon ripple color="red" @click="removeDailie(i)">
                      <v-icon class="white--text">
                        close
                      </v-icon>
                    </v-btn>
                  </v-list-tile>
                </div> -->
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
      list: {
        0: false,
        1: false,
        2: false
      },
      dailietruth: false,
      ongoingtruth: false,
      urgenttruth: false,
      healthtruth: false,
      selected: '',
      isDark: true,
      show: true,
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
    }
  }
}
</script>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>
