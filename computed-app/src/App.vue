<template>
  <div id="app">
     <computed-component-1/>
     <computed-component-2/>
     <computed-component-3/>
  </div>
</template>

<script>
import ComputedComponent1 from './components/ComputedComponent1.vue'
import ComputedComponent2 from './components/ComputedComponent2.vue'
import ComputedComponent3 from './components/ComputedComponent3.vue'

export default {
  name: 'App',
  components: {
    ComputedComponent1,
    ComputedComponent2,
    ComputedComponent3
    
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
