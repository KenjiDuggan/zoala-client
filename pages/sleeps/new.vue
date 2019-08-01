<template>
  <div>
    <vue-clock-picker
      id="clock-picker-1"
      v-model="anotherValue"
      required
      label="Went to bed: "
      active-text-color="black"
      active-color="warning"
      done-text="ok"
      cancel-text="close"
    />
    <vue-clock-picker id="clock-picker-2" v-model="value" active-color="warning" active-text-color="black" label="Waking time" />
    <v-btn class="error mx-0 mt-5 info--text text-uppercase rounded-corners" @click="sendSleep">
      Get variation
    </v-btn>
  </div>
</template>
<script>
import VueClockPicker from '@pencilpix/vue2-clock-picker'
import '@pencilpix/vue2-clock-picker/dist/vue2-clock-picker.min.css'

export default {
  components: {
    VueClockPicker
  },
  data() {
    return {
      value: '',
      anotherValue: '',
      hours: {
        hour1: '',
        hour2: '',
        minute1: '',
        minute2: '',
        avgminute: '',
        sendminute: '',
        sendhour: '',
        variation: ''
      }
    }
  },
  methods: {
    sendSleep() {
      const time1 = this.value.split(':') // morning wakey
      const time2 = this.anotherValue.split(':') // went to bed at
      this.hours.hour1 = parseInt(time1[0], 10)
      this.hours.hour2 = parseInt(time2[0], 10)
      this.hours.minute1 = parseInt(time1[1], 10)
      this.hours.minute2 = parseInt(time2[1], 10)
      const hour1min = this.hours.hour1 * 60
      const hour2min = this.hours.hour2 * 60
      const totminute1 = hour1min + this.hours.minute1
      const totminute2 = hour2min + this.hours.minute2
      this.hours.variation = Math.abs(totminute1 - totminute2)
      this.hours.avgminute = this.hours.variation
      this.hours.sendminute = this.hours.variation % 60
      this.hours.sendhour = (this.hours.variation - this.hours.sendminute) / 60
      const username = this.$store.state.username
      this.$axios.post('/api/sleep', {
        hours: this.hours,
        username: username
      }, { headers: { Authorization: 'Bearer ' + this.$store.state.token } })
        .then((response) => {
          throw response.data
          // this.$router.push('/sleeps')
        }).catch((error) => {
          throw error
        })
    }
  }
}
</script>
