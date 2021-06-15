const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name: "",
      confirmedName: "",
      fullname: "",
    };
  },

  watch: {
    counter(newValue, oldValue) {
      console.log("newValue");
      console.log(newValue);
      console.log("oldValue");
      console.log(oldValue);
      if (newValue > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 500);
      }
    },
    // name(newValue, oldValue) {
    //   console.log("newValue");
    //   console.log(newValue);
    //   console.log("oldValue");
    //   console.log(oldValue);
    // },
  },
  computed: {
    // fullname() {
    //   console.log(" Running ........");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + "  " + "Al-Qassab";
    // },
  },
  methods: {
    outputFullName() {
      console.log(" Running .......methods.");

      if (this.name === "") {
        return "";
      }
      return this.name + "  " + "Al-Qassab";
    },

    addCounter(num) {
      this.counter = this.counter + num;
    },

    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      console.log(event, lastName);
      //this.name = event.target.value + "  " + lastName;
      this.name = event.target.value;
    },
    submitForm(event) {
      // event.preventDefault();
      console.log("Hello");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
