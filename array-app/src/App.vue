<template>
  <div id="app">
    <lista-component-2/>
  </div>
</template>

<script>
import ListaComponent2 from './components/ListaComponent2.vue'
//import ListaComponent1 from './components/ListaComponent1.vue'

export default {
  name: 'App',
  components: {
    ListaComponent2
    //ListaComponent1
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
