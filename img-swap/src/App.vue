<template>
  <v-app>
    <v-main>
      <Slider />
    </v-main>
  </v-app>
</template>

<script>
import Slider from "@/components/Slider";

export default {
  name: "App",

  components: {
    Slider,
  },

  data: () => ({
    //
  }),
};
</script>
