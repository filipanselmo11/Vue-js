<template>
  <v-app>
    <v-main>
      <something-way-component></something-way-component>
    </v-main>
  </v-app>
</template>

<script>
import SomethingWayComponent from './components/SomethingWayComponent.vue';
//import OtherImageComponent from './components/OtherImageComponent.vue';
//import NewImageComponent from './components/NewImageComponent.vue'
//import ImageComponent from './components/ImageComponent.vue';
//import ImageSliderComponent from "./components/ImageSliderComponent.vue";

export default {
  name: "App",

  components: {
    //OtherImageComponent,
    SomethingWayComponent,
    //NewImageComponent
    //ImageComponent
    //ImageSliderComponent,
  },

  data: () => ({
    //
  }),
};
</script>
