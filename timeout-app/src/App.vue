<template>
  <div id="app">
    <timeout-componet-1/>
    <br/>
    <timeout-component-2/>
  </div>
</template>

<script>
import TimeoutComponet1 from './components/TimeoutComponet1.vue'
import TimeoutComponent2 from './components/TimeoutComponent2.vue'
export default {
  name: 'App',
  components: {
    TimeoutComponet1,
    TimeoutComponent2
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
