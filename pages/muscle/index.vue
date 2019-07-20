<template>
<div>
    <h1>This your schedule</h1>
    <h1>Weekly Schedule</h1><v-btn round color="primary" dark><nuxt-link to="/addmuscle">Add Muscle</nuxt-link></v-btn>
    <div>{{muscle}}</div>
</div>
</template>

<script>

export default {
  data() {
    return {
      muscle: ""
    };
  },

  created() {
    const response = this.$axios.get('/muscle/'+this.$route.params.id+ "/");
    console.log(this.$route.params);
    console.log(response);
    this.muscle = response;
  }
}
</script>
