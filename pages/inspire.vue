<template>
<div>
  <div>Inspire me</div>
  <li v-for="wow in wows"  :key="wow._id">
    <span>{{wow}}</span>
  </li>
</div>
</template>

<script>

export default {
  computed: {
    wows(){
      return this.$store.state.token
    }
  },
}
</script>
