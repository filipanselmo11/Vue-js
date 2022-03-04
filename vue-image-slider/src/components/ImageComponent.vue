<template>
    <animation-image-component
        :images="images">
    </animation-image-component>
</template>

<script>
import AnimationImageComponent from './AnimationImageComponent.vue';
export default {
  components: { AnimationImageComponent },
  data: () => ({
    images: [
      require("@/assets/Akali-Ronin-Yoshimitsu.png"),
      require("@/assets/jujutsu_kaisen.jpeg"),
      require("@/assets/linux.jpg"),
      require("@/assets/Rinnegan.jpg"),
      require("@/assets/the-batman.jpg"),
      require("@/assets/wallpaper-abstrato.jpg"),
    ],
  }),
};
</script>

<style></style>
