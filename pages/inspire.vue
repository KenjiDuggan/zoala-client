<template>
<div>
  <h1 style="text-xs-center">Inspiration?</h1>
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
  export default {
    data () {
      return {
        items: [
          {
          src: '~/assets/church.jpg'
          },
          {
            src: '~/assets/country.jpg'
          },
          {
            src: '~/assets/vangoth.jpg'
          },
          {
            src: '~/assets/woman.jpg'
          }
        ]
      }
    }
  }
</script>
