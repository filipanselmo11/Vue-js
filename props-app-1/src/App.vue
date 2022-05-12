<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <email-pass 
      :email.sync="email" 
      :password.sync="password"
      ></email-pass>
  </div>
</template>

<script>
import EmailPass from "./components/EmailPass.vue";

export default {
  name: "App",
  components: {
    EmailPass,
  },
  data: () => ({
    nome: "",
    idade: undefined,
    email: "",
    password: "",
    arrayData:[],
  }),
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
