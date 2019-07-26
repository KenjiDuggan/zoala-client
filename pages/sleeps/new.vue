<template>
    <div>
        <vue-clock-picker
        v-model="anotherValue"
        required
        label="Went to bed: "
        active-text-color="black"
        active-color="warning"
        id="clock-picker-1"
        done-text="ok" cancel-text="close"></vue-clock-picker>
    <vue-clock-picker active-color="warning" active-text-color="black" v-model="value" label="Waking time" id="clock-picker-2"></vue-clock-picker>
     <v-btn class="secondary mx-0 mt-5 info--text text-uppercase rounded-corners" @click="getSleep">So?</v-btn>
     <v-btn class="secondary mx-0 mt-5 info--text text-uppercase rounded-corners" @click="getVariation">Get variation</v-btn>
    </div>
</template>
<script>
import VueClockPicker from '@pencilpix/vue2-clock-picker';
import '@pencilpix/vue2-clock-picker/dist/vue2-clock-picker.min.css';

export default{
    data() {
        return {
            value: '',
            anotherValue: '',
            hour1: null,
            hour2: null,
            minute1: null,
            minute2: null,
            sendhour: null,
            sendminute: null
        }
    },
    components: {
        VueClockPicker
    },
    methods:{
        getSleep() { 
            let time1 = this.value.split(':'); //morning wakey
            let time2 = this.anotherValue.split(':'); //went to bed at
            this.hour1 = parseInt(time1[0], 10);
            this.hour2 = parseInt(time2[0], 10);
            this.minute1 = parseInt(time1[1], 10);
            this.minute2 = parseInt(time2[1], 10);
        },
        getVariation() {
            this.hour1 = this.hour1 * 60;
            this.hour2 = this.hour2 * 60;
            let totminute1 = this.hour1 + this.minute1;
            let totminute2 = this.hour2 + this.minute2;
            this.variation = Math.abs(totminute1 - totminute2);
            this.sendminute = this.variation % 60;
            this.sendhour = (this.variation - this.sendminute) / 60;
            console.log(this.sendminute);
            console.log(this.sendhour);
        }
    }
}
</script>