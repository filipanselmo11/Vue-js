<template>
  <div id="app">
    <date-component></date-component>
  </div>
</template>

<script>
import DateComponent from './components/DateComponent.vue'


export default {
  name: 'App',
  components: {
    DateComponent
   
  }
}
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
