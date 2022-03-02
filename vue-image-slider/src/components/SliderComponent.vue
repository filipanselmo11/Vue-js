<template>
  <animation-slider-component
    :imageFeatures="imageFeatures"
    @changeImageFeature="changeImageFeature($event)"
  >
    <div v-for="(item, index) in imageFeatures" :key="index">
      <v-img>
        {{ item[index] }}
      </v-img>
    </div>
  </animation-slider-component>
</template>

<script>
import AnimationSliderComponent from "./AnimationSliderComponent.vue";
export default {
  components: { AnimationSliderComponent },
  name: "SliderComponent",
  data: () => ({
    imageFeatures: [
      {image: "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg"},
      {image: "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg"},
      {image: "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg"},
      {image: "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"},
    ],
    //timer: undefined,
    //currentIndex: 0,

    methods: {
      changeImageFeature(imageFeature) {
        this.$emit("changeInput", {
          eventName: "changeImageFeature",
          params: imageFeature,
        });
      },
    },
  }),

  /*mounted() {
    this.startSlide();
  },*/

  /*methods: {
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },
    next() {
      this.currentIndex += 1;
    },

    prev() {
      this.currentIndex -= 1;
    },
  },*/

  /*computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },*/
};
</script>

<style></style>
