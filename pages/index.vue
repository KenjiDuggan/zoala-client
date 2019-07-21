<template>
<div>
  <br/>
  <br/>
  <v-jumbotron color="grey lighten-2">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex class="text-sm-center">
          <h3 class="display-3 black--text" dark>Welcome to zoala!</h3>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3 black--text" dark>Awesome! Log in or register a new account to get your life together!</div>
          <nuxt-link to="/register"><v-btn large color="primary" class="mx-">Sign Up</v-btn></nuxt-link>
          <nuxt-link to="/login"><v-btn large color="secondary" class="mx-0">Log In</v-btn></nuxt-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</div>
</template>