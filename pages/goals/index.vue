<template>  
      <v-container>
        <v-layout row justify-center class="ma-5">
          <v-flex>
            <v-card>
              <v-toolbar color="secondary" dark>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title class="headline text-xs-center">Today's List</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>

              <v-list two-line subheader>
                <v-container>
                  <v-subheader class="headline">{{day}}, {{date}}{{ord}} {{year}}</v-subheader>
                  <v-spacer></v-spacer>

                  <p class="text-xs-right"><b>{{todos.length}}</b> Tasks</p>

                  <v-flex xs12>
                    <v-text-field clearable v-model="newTodo" id="newTodo" name="newTodo" label="Type your task" @keyup.enter="addTodo">
                    </v-text-field>
                  </v-flex>
                </v-container>
                <v-subheader class="subheading" v-if="todos.length == 0">You have 0 Tasks, add some</v-subheader>
                <v-subheader class="subheading" v-else>Your Tasks</v-subheader>
                <div v-for="(todo, i) in todos" :key="todo.id"> 
                  <v-list-tile avatar>
                    <v-list-tile-action>
                      <v-checkbox v-model="todo.done"></v-checkbox>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title :class="{
                  done: todo.done
                  }" class="title">{{todo.title | capitalize}}
                      </v-list-tile-title>
                      <v-list-tile-sub-title>Added on: {{date}}{{ord}} {{day}} {{year}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-btn icon ripple color="red"  v-if="todo.done" @click="removeTodo(i)">
                      <v-icon class="white--text">close</v-icon>
                    </v-btn>
                  </v-list-tile>
                </div>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template> 
<script>
export default({
  data () {
    return {
      isDark:true,
      show: true,
      newTodo: '',
      todo: [],
      todos: [],
      day: this.todoDay(),
      date: new Date().getDate(),
      ord: this.nth(new Date().getDate()),
      year: new Date().getFullYear(),
    }
  },
  methods: {
    addTodo() {
      var value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.todos.push({
        title: this.newTodo,
        done: false
      });
      this.newTodo = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    todoDay() {
      var d = new Date();
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      return days[d.getDay()];
    },
    nth(d) {
      if(d>3 && d<21) return 'th';
      switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
      }
    },
  },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
});
</script>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>