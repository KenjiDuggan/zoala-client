<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <template v-if="isAuthenticated">
        <v-list>
          <v-list-tile
            v-for="useractive in useractives"
            :key="useractive.id"
            :to="useractive.to"
            router
            exact
          >
            <v-list-tile-action>
              <v-icon>{{ useractive.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="useractive.title" />
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-action>
              <v-icon>flight_takeoff</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Skiirtt</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </template>
      <template v-if="!isAuthenticated">
        <v-list>
          <v-list-tile
            v-for="usernot in usernots"
            :key="usernot.id"
            :to="usernot.to"
            router
            exact
          >
            <v-list-tile-action>
              <v-icon>{{ usernot.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="usernot.title" />
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer">
        <v-icon icon>
          menu
        </v-icon>
      </v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>link</v-icon>
      </v-btn>
      <v-spacer />
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; zoala 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

const Cookie = process.client ? require('js-cookie') : undefined
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      useractives: [
        {
          icon: 'check_circle',
          title: 'Dailies',
          to: '/goals'
        },
        {
          icon: 'offline_bolt',
          title: 'inspiration',
          to: '/inspire'
        },
        {
          icon: 'fitness_center',
          title: 'gainz',
          to: '/muscles'
        },
        {
          icon: 'directions_bike',
          title: 'heart',
          to: '/cardios'
        },
        {
          icon: 'local_grocery_store',
          title: 'nourri',
          to: '/foods'
        },
        {
          icon: 'poll',
          title: 'sleep',
          to: '/sleeps'
        },
        {
          icon: 'mood',
          title: 'profile',
          to: '/profile'
        }
      ],
      usernots: [
        {
          icon: 'apps',
          title: 'welcome',
          to: '/'
        },
        {
          icon: 'person_add',
          title: 'register',
          to: '/register'
        },
        {
          icon: 'exit_to_app',
          title: 'login',
          to: '/login'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: ''
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    logout() {
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
      this.$router.redirect('/login')
    }
  }
}

</script>
