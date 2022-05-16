<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <router-link :to="{ name: 'transformers' }">Transformers</router-link>
    <router-link :to="{ name: 'game-of-thrones' }">GOT</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import TransformersComponent from "./components/TransformersComponent.vue";
// import AjaxComponent from './components/AjaxComponent.vue'
//import AxiosComponent from "./components/AxiosComponent.vue";
// import CardComponent from "./components/CardComponent.vue";
// import CardForm from './components/CardForm.vue'
// import ListComponent from './components/ListComponent.vue'

export default {
  name: "App",
  data: () => ({
    movie: "transformers",
  }),
  created() {
    this.$router.push({ name: 'transformers-content', params: { name: 'megatron' } });
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
.v-enter-active .v-leave-active {
  transition: opacity 0.5s;
}

.v-enter .v-leave-to {
  opacity: 0;
}
</style>
