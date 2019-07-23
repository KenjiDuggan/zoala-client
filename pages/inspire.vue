<template>
<div>
  <h1 class="text-xs-center display-3">Inspiration?</h1>
  <br/>
  <br/>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</div>
</template>
 
 <script>
const church = require('../assets/church.jpg');
const country = require('../assets/country.jpg');
const vangoth = require('../assets/vangoth.jpg');
const woman = require('../assets/woman.jpg');

  export default {
    data () {
      return {
        items: [
          {
          src:church
          },
          {
          src:country
          },
          {
          src:vangoth
          },
          {
          src:woman
          }
        ]
      }
    }
  }
</script>
