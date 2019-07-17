<template>
  <v-container>
    <v-layout row wrap>
      <v-flex tag="h1" class="headline">Main Page</v-flex>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <v-card-text>Wow this is the main page</v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card flat>
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <Workout />
  </v-container>

</template>
<script>
export default {
  components: {
    Workout
  }
}
</script>
