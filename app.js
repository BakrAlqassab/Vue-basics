const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name: "",
      confirmedName:"",
    };
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },

    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    setName(event,lastName) {
      console.log(event,lastName);
      this.name = event.target.value + '  ' + lastName;
    },
    submitForm(event) {

     // event.preventDefault();
     console.log('Hello');
    },
    confirmInput() {

      this.confirmedName = this.name;


    }
  },
});

app.mount("#events");
