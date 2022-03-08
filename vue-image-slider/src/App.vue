<template>
  <v-app>
    <v-main>
     <new-app-image></new-app-image>
    </v-main>
  </v-app>
</template>

<script>
import NewAppImage from './components/NewAppImage.vue';
//import SomethingWayComponent from './components/SomethingWayComponent.vue';
//import OtherImageComponent from './components/OtherImageComponent.vue';
//import NewImageComponent from './components/NewImageComponent.vue'
//import ImageComponent from './components/ImageComponent.vue';
//import ImageSliderComponent from "./components/ImageSliderComponent.vue";

export default {
  name: "App",

  components: {
    //OtherImageComponent,
    //SomethingWayComponen,
    NewAppImage,
    //NewImageComponent
    //ImageComponent
    //ImageSliderComponent,
  },

  data: () => ({
    //
  }),
};
</script>
