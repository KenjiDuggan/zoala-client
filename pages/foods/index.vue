<template>
  <div>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">
            Weekly Food Plan
          </h3>
          <nuxt-link to="/foods/new">
            <v-btn class="mx-0 rounded-corners warning info--text" color="success" large>
              <v-icon>playlist_add</v-icon>Add Food Plan
            </v-btn>
          </nuxt-link>
          <v-divider class="my-3" />
        </v-flex>
      </v-layout>
    </v-container>
    <br>
    <v-container>
      <div v-for="(ktem, k) in food.length" :key="k">
        <h1>{{ food[k].name }}</h1><v-divider />
        <h3>{{ food[k].description }}</h3><br>
        <div class="d-flex justify-between align-center mb-3">
          <v-btn class="info--text accent rounded-corners" @click="editfood1(k)">
            Edit this run
          </v-btn>
          <v-btn class="info--text accent rounded-corners" @click="deletefood1(k)">
            Delete this run
          </v-btn>
        </div>
        <v-expansion-panel v-model="panel">
          <v-expansion-panel-content v-for="(item,i) in 6" :key="i" class="rounded-corner success">
            <template v-slot:header>
              <div class="info--text">
                {{ food[k].schedule[i].day.toUpperCase() }}
              </div>
            </template>
            <v-card>
              <v-card-text>
                <h4>{{ food[k].schedule[i].speed }}</h4>
                <h4>{{ food[k].schedule[i].distance }}</h4>
                <h4></h4>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <br>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      food: [],
      items: 12,
      jtems: 24,
      ktems: 4,
      length: 3
    }
  },
  created() {
    this.$axios.get('/api/food',
      { setCredentials: true })
      .then((response) => {
        this.food = response.data.foods
        console.log(response.data.foods) // eslint-disable-line
        this.$store.commit('setfood', response.data)
        throw response.data
      }).catch((error) => {
        throw error
      })
  },
  methods: {
    editfood1(k) {
      console.log(this.food) // eslint-disable-line
      console.log(this.food[k]._id) // eslint-disable-line
    },
    deletefood1(k) {
      const id = this.food[k]._id
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        buttons: 'Delete'
      }).then(() => {
        this.$axios.delete('/api/food/' + id,
          { setCredentials: true })
          .then(() => {
            this.$axios.get('/api/food',
              { setCredentials: true })
              .then((response) => {
                this.food = response.data.foods
                this.$store.commit('setfood', response.data.foods)
                throw response.data
              }).catch((error) => {
                throw error
              })
          })
          console.log(this.food[k].name) // eslint-disable-line
      }).catch((e) => {
        console.log(e) // eslint-disable-line
      })
    }
  },
  middleware: 'auth'
}
</script>
