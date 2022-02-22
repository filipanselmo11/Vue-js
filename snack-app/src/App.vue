<template>
  <v-app id="app">
    <v-btn @click="showSnack = true" color="primary">Trigger Snackbar</v-btn>
    <snack-component :timeout="5 * 1000" v-model="showSnack">
      Tá fufando
    </snack-component>
  </v-app>
</template>

<script>
import SnackComponent from "./components/SnackComponent.vue";
export default {
  name: "App",

  components: { SnackComponent },

  data: () => ({
    showSnack: false,
  }),
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
