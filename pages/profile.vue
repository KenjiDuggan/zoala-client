<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex tag="h1" class="headline">My Profile</v-flex>
            </v-layout>
            <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <v-card-text><strong>Username: </strong>{{ loggedInUser.username }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card flat>
              <v-card-text><strong>Email: </strong>{{ loggedInUser.email }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
        </v-container>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default{
    computed: {
        ...mapGetters(['loggedInUser'])
    },
    middleware: 'auth',
}
</script>