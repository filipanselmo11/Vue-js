<template>
  <div id="app">
    <transition-component-3></transition-component-3>
    <!--<transition-component-2></transition-component-2>-->
    <!--<transition-component-1></transition-component-1>-->
  </div>
</template>

<script>
import TransitionComponent3 from './components/TransitionComponent3.vue'
//import TransitionComponent2 from './components/TransitionComponent2.vue'
//import TransitionComponent1 from './components/TransitionComponent1.vue'


export default {
  name: 'App',
  components: {
    TransitionComponent3
    //TransitionComponent2
    //TransitionComponent1
  }
}
</script>

<style>
</style>
