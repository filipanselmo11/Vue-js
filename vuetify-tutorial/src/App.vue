<template>
  <v-app>
    <v-main>
      <Card />
      <CardOutlined/>
      <CardMisc/>
    </v-main>
  </v-app>
</template>

<script>
//import Aplicacao from "./components/Aplicacao.vue";
//import AppBar from "./components/AppBar.vue";
//import Alerta from "./components/Alerta.vue";
//import AspectRadios from "./components/AspectRadios.vue";
//import Avatar from "./components/Avatar.vue";
//import Badge from "./components/Badge.vue";
//import Banners from "./components/Banners.vue";
import Card from "./components/Card.vue";
import CardMisc from "./components/CardMisc.vue";
import CardOutlined from "./components/CardOutlined.vue";
//import Hover from "./components/Hover.vue";
//import Imagem from "./components/Imagem.vue"
//import Lazy from "./components/Lazy.vue"
//import Lista from "./components/Lista.vue";
//import Tab from "./components/Tab.vue"
export default {
  name: "App",

  components: {
    //Avatar,
    //Aplicacao,
    //AppBar,
    //Alerta,
    //AspectRadios,
    //Badge,
    //Banners,
    Card,
    CardMisc,
    CardOutlined,
    //Hover,
    //Imagem,
    //Lazy,
    //Lista,
    //Tab
  },

  data: () => ({
    //
  }),
};
</script>
