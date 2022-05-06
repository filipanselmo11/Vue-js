<template>
  <div id="app">
    <test v-bind:artists="artists" />
    <test-2 v-bind:artists="artists" />
    <!-- <camera-component name="SONY A&RIV" img="alguma-imagem.jpg"></camera-component> -->
    <camera-component :name="cameraName" :img="cameraImage"></camera-component>
  </div>
</template>

<script>
import CameraComponent from './components/CameraComponent.vue';
import Test from "./components/Test.vue";
import Test2 from "./components/Test2.vue";

export default {
  name: "App",
  components: {
    Test,
    Test2,
    CameraComponent,
  },
  data: () => ({
    artists: [
      { name: "Davido", genre: "afrobeats", country: "Nigeria" },
      { name: "Burna Boy", genre: "afrobeats", country: "Nigeria" },
      { name: "AKA", genre: "hiphop", country: "South-Africa" },
      { name: "Sarkodie", genre: "hiphop", country: "Ghana" },
      { name: "Stormzy", genre: "hiphop", country: "United Kingdom" },
      { name: "Lil Nas", genre: "Country", country: "United States" },
      { name: "Nasty C", genre: "hiphop", country: "South-Africa" },
      { name: "Shatta-walle", genre: "Reagae", country: "Ghana" },
      { name: "Khalid", genre: "pop", country: "United States" },
      { name: "Ed Sheeran", genre: "pop", country: "United Kingdom" },
    ],
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
