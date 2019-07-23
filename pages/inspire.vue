<template>
<div>
  <h1 class="text-xs-center display-3">inspiration</h1>
  <br/>
  <br/>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <h1 class="text-xs-center display-3">memes</h1>
  <br/>
  <br/>
  <v-carousel>
    <v-carousel-item
      v-for="(jtem,j) in jtems"
      :key="j"
      :src="jtem.src"
    ></v-carousel-item>
  </v-carousel>
</div>
</template>
 
 <script>
const church = require('../assets/church.jpg');
const country = require('../assets/country.jpg');
const vangoth = require('../assets/vangoth.jpg');
const woman = require('../assets/woman.jpg');
const meme1 = require('../assets/meme1.jpg');
const meme2 = require('../assets/meme2.png');
const meme3 = require('../assets/meme3.jpg');
const meme4 = require('../assets/meme4.jpg');

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
        ],
         jtems: [
          {
          src:meme1
          },
          {
          src:meme2
          },
          {
          src:meme3
          },
          {
          src:meme4
          }
        ]
      }
    }
  }
</script>
