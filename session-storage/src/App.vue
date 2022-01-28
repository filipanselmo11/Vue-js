<template>
  <div id="app">
    <GatosStorage/>
  </div>
</template>

<script>
//import LocalStorage1 from "./components/LocalStorage1.vue"
import GatosStorage from "./components/GatosStorage.vue";
export default {
  name: "App",
  /*mounted() {
    this.$session.set("username", "user123");
    console.log(this.$session.clear("username"));
  }*/
  components: {
    GatosStorage,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
