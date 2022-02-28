<template>
  <div id="app">
   <list-component-5/>
  </div>
</template>

<script>
import ListComponent5 from './components/ListComponent5.vue'
//import ListaComponent4 from './components/ListaComponent4.vue'
//import ListaComponent3 from './components/ListaComponent3.vue'
//import ListaComponent2 from './components/ListaComponent2.vue'
//import ListaComponent1 from './components/ListaComponent1.vue'

export default {
  name: 'App',
  components: {
    ListComponent5
    //ListaComponent4
    //ListaComponent3
    //ListaComponent2
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
