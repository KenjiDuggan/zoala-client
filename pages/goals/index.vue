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
              v-model="tabs"
              color="transparent"
              slider-color="white"
            >
              <span
                class="subheading font-weight-light mr-3"
                style="align-self: center"
              >Tasks:</span>
              <v-tab v-model="daily">
                Daily
              </v-tab>
              <v-tab v-model="urgent">
                Urgent
              </v-tab>
              <v-tab v-model="ongoing">
                Ongoing
              </v-tab>
              <v-tab v-model="health">
                Health
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
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
          </v-tabs-items>
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
                <p class="text-xs-right">
                  <b>
                    {{ todos.length }}
                  </b>
                  Tasks
                </p>
                <v-flex xs12>
                  <v-text-field v-model="newTodo" clearable name="newTodo" label="Type your task" @keyup.enter="addTodo" />
                </v-flex>
              </v-container>
              <v-subheader v-if="todos.length == 0" class="subheading">
                You have 0 Tasks, add some
              </v-subheader>
              <v-subheader v-else class="subheading">
                Your Tasks
              </v-subheader>
              <!-- <div v-for="(todo, i) in todos" :key="todo.id">
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-checkbox v-model="todo.done" />
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title
                      class="title"
                      :class="{
                        done: todo.done
                      }"
                    >
                    {{ todo.title | capitalize }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      Added on: {{ date }}{{ ord }} {{ day }} {{ year }}
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-btn v-if="todo.done" icon ripple color="red" @click="removeTodo(i)">
                    <v-icon class="white--text">
                      close
                    </v-icon>
                  </v-btn>
                </v-list-tile>
              </div> -->
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
      list: {
        0: false,
        1: false,
        2: false
      },
      isDark: true,
      show: true,
      newTodo: '',
      todo: [],
      todos: [],
      day: this.todoDay(),
      date: new Date().getDate(),
      ord: this.nth(new Date().getDate()),
      year: new Date().getFullYear()
    }
  },
  methods: {
    addTodo() {
      const value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }
      this.todos.push({
        title: this.newTodo,
        done: false
      })
      this.newTodo = ''
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
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
