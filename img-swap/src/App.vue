<template>
  <v-app>
    <v-main>
      <hello-world />
      <slider-1/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import Slider1 from './components/Slider1.vue';
export default {
  name: "App",

  components: {
    HelloWorld,
    Slider1
  },

  data: () => ({
    //
  }),
};
</script>
