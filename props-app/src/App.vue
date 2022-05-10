<template>
  <div id="app">
    <email></email>
  </div>
  <!-- <div id="app">
    <app-header :title="title"></app-header>
    <app-ninjas :ninjas="ninjas"></app-ninjas>
    <app-footer :title="title"></app-footer>
  </div> -->
</template>

<script>
import Email from "./components/Email.vue";
//import Task from "./components/Task.vue";
// import Header from "./components/Header.vue";
// import Footer from "./components/Footer.vue";
// import Ninjas from "./components/Ninjas.vue";

export default {
  name: "App",
  components: {
    Email,
    // "app-header": Header,
    // "app-footer": Footer,
    // "app-ninjas": Ninjas,
  },
  data: () => ({
    ninjas: [
      { name: "Ryu", speciality: "Vue Components", show: false },
      { name: "Crystal", speciality: "HTML Wizardy", show: false },
      { name: "Hitoshi", speciality: "Click Events", show: false },
      { name: "Tango", speciality: "Conditionals", show: false },
      { name: "Kami", speciality: "Webpack", show: false },
      { name: "Yoshi", speciality: "Data Diggin", show: false },
    ],
    title: "Vue Ninjas",
    tasks: [
      {
        id: 1,
        title: "Estudar mais sobre Props",
        completed: true,
      },
      {
        id: 2,
        title: "Estudar mais mais sobre Props",
        completed: true,
      },
      {
        id: 3,
        title: "Estudar mais mai mais sobre Props",
        completed: true,
      },
    ],
  }),
};
</script>

<style></style>
