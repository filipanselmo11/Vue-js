<template>
  <div>
    <component-1></component-1>
    <br />
  </div>
</template>

<script>
import Component1 from "./components/Component-1.vue";


export default {
  name: "App",
  components: {
    Component1,
  },
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
