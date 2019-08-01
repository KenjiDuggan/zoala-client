<template>
  <div>
    <br>
    <v-jumbotron>
      <v-container fill-height class="accent rounded-corner">
        <br>
        <v-layout align-center>
          <v-flex class="text-sm-center">
            <h3 class="display-3 info--text" dark>
              welcome to zoala
            </h3>
            <v-divider class="my-3" />
            <div class="title mb-3 info--text" dark>
              get your life together now by signing up
            </div>
            <br>
            <br>
            <nuxt-link to="/register">
              <v-btn large color="rounded-corners primary" class="mx- to-lower">
                register
              </v-btn>
            </nuxt-link>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>
