<template>
  <v-app>
    <v-main>
      <image-slider/>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from "@/components/HelloWorld";
//import Slider1 from './components/Slider1.vue';
import ImageSlider from './components/ImageSlider.vue';
export default {
  name: "App",

  components: {
    //HelloWorld,
    //Slider1,
    ImageSlider
  },

  data: () => ({
    //
  }),
};
</script>
