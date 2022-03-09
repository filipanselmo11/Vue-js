<template>
  <div>
    <app-slider :images="images" />
  </div>
</template>

<script>
import AppSlider from "./AppSlider.vue";
export default {
  data: () => ({
    images: [
      require("../assets/batman-1.jpg"),
      require("../assets/batman-2.jpg"),
      require("../assets/batman-3.jpg"),
      require("../assets/akali-1.jpg"),
      require("../assets/akali-2.jpg"),
      require("../assets/akali-3.jpg"),
    ],
  }),
  components: { AppSlider },
};
</script>

<style></style>
