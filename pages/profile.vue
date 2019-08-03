<template>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          account_circle
        </v-icon>
        Reason
      </v-tab>
      <v-tab>
        <v-icon left>
          lock
        </v-icon>
        User Info
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>Reason for joining: {{ this.$store.state.reason }}</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Username: {{ this.$store.state.username }}
            </p>

            <p>
              Email: {{ this.$store.state.email }}
            </p>

            <p>
              Token: {{ this.$store.state.token }}
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  middleware: 'auth',
  methods: {
    new() {

    }
  }
}
</script>
