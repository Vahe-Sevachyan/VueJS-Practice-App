const app = Vue.createApp({
  data() {
    return {
      courseGoal: "My Course Goal",
      myPage: "https://vahe.tech",
      goal1: "Learn Vue",
      goal2: "Vue is Awesome",
      textInput: "",
      counter: 0,
      name: "",
    };
  },
  methods: {
    displayGoal() {
      const random = Math.random();
      if (random <= 0.5) {
        return this.goal1;
      } else {
        return `Yooo! ${this.goal2} `;
      }
    },
    textInput() {
      return this.textInput;
    },
    add() {
      if (this.counter < 10) {
        return this.counter++;
      } else if (this.counter === 10) {
        alert("You have reached the max count!");
      }
    },
    reduce() {
      if (this.counter >= 1) return this.counter--;
      else if (this.counter === 0) {
        alert("You have reached the lowest count!");
      }
    },
    setName(event) {
      this.name = event.target.value;
    },
  },
});
app.mount("#app");
