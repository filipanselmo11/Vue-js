<template>
  <div>
    <new-image-slider-component :images="imageAkali">
    </new-image-slider-component>
    <new-image-slider-component :images="imageJujutsu">
    </new-image-slider-component>
    <new-image-slider-component :images="imagePain">
    </new-image-slider-component>
    <new-image-slider-component :images="imageBatman">
    </new-image-slider-component>
  </div>
</template>

<script>
import NewImageSliderComponent from "./NewImageSliderComponent.vue";
export default {
  components: { NewImageSliderComponent },

  data: () => ({
    imageList: [
      { text: "Akali" },
      { text: "Jujutsu Kaisen" },
      { text: "Pain" },
      { text: "Batman" },
    ],
    imageAkali: [
      require("@/assets/Akali-Ronin-Yoshimitsu.png"),
      require("@/assets/akali-1.jpg"),
      require("@/assets/akali-2.jpg"),
      require("@/assets/akali-3.jpg"),
    ],
    imageJujutsu: [
      require("@/assets/jujutsu_kaisen.jpeg"),
      require("@/assets/jujutsu-kaisen-1.jpg"),
      require("@/assets/jujutsu-kaisen-2.jpg"),
      require("@/assets/jujutsu-kaisen-3.jpg"),
    ],
    imagePain: [
      require("@/assets/pain-1.jpg"),
      require("@/assets/pain-2.jpg"),
      require("@/assets/pain-3.jpg"),
      require("@/assets/pain-4.jpg"),
    ],
    imageBatman: [
      require("@/assets/the-batman.jpg"),
      require("@/assets/batman-1.jpg"),
      require("@/assets/batman-2.jpg"),
      require("@/assets/batman-3.jpg"),
    ],
  }),
};
</script>

<style></style>
