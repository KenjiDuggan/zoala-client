import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBMzW7cjf-pnPGYZocIg25J5zE-9kUUrjM',
    libraries: 'places'
  },
  installComponents: true
})
