<template>
  <v-app>
    <v-main>
      <GeoJson />
    </v-main>
  </v-app>
</template>

<script>
//import Mapa from "./components/Mapa.vue";
//import MapaAcessivel from "./components/MapaAcessivel.vue";
//import MapBox from "./components/MapBox.vue";
import GeoJson from './components/GeoJson.vue';
export default {
  name: "App",

  components: {
    //Mapa,
    //MapaAcessivel
    GeoJson
  },

  data: () => ({
    //
  }),
};
</script>
