<template>
    <div id="slider">
        <transition-group name="left-slide" tag="div" class="wrapper-image-slider">
            <div v-if="this.activeImageSlider === batmanSlider[0]">
                <div v-for="(batman) in batmanSlider" :key="batman.id">
                    <img class="slide-image" :src="batman.image"/>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
  data: () => ({
    slideActive: "",
    activeImageSlider: 0,
    batmanSlider: [
      { id: "batman0", image: require("../assets/batman-1.jpg") },
      { id: "batman1", image: require("../assets/batman-2.jpg") },
      { id: "batman2", image: require("../assets/batman-3.jpg") },
      { id: "batman3", image: require("../assets/the-batman.jpg") },
    ],
  }),

  mounted() {
      this.slideActive = setInterval(this.nextBatman, 2000);
  },

  methods: {
      nextBatman() {
          const max = this.batmanSlider.length - 1;
          (this.activeImageSlider == max) ? this.activeImageSlider = 0 : this.activeImageSlider++;
      }
  }
};
</script>

<style scoped>
#slider {
  width: 450px;
  height: 187.5px;
  position: relative;
  overflow: hidden;
}

.wrapper-image-slider {
  width: 450px;
  height: 187.5px;
  position: relative;
  overflow: hidden;
}
.slide-image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.left-slide-enter-active,
.left-slide-leave-active {
  transition: all 1s;
}

.left-slide-enter {
  transform: translate(100%, 0);
}

.left-slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
