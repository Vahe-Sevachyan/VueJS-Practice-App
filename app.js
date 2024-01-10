const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    countPlus(num) {
      this.counter = this.counter + num;
    },
    countMinus(num) {
      this.counter = this.counter - num;
    },
  },
});
app.mount("#user-goal");
