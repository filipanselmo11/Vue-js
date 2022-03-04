<template>
  <v-row>
    <div id="currentIndex" v-for="index in [currentIndex]" :key="index">
      <img max-height="600" max-width="890" :src="currentImg" />
    </div>
    <v-btn icon @click="startSlide">
      <v-icon>
        {{ play ? "mdi-pause-circle-outline" : "mdi-play-circle-outline" }}
      </v-icon>
    </v-btn>
    <v-slider
      v-model="currentIndex"
      hide-details
      min="0"
      :max="endImg"
      step="1"
    >
    </v-slider>
  </v-row>
</template>

<script>
export default {
  name: "NewImageSliderComponent",
  props: {
    images: {
      type: Array,
    },
  },
  data: () => ({
    play: false,
    timer: undefined,
    currentIndex: undefined,
  }),

  created() {
    this.startSlide();
  },

  computed: {
    startImg() {
      return 0;
    },
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },

    endImg() {
      return this.images.length - 1;
    },
  },

  methods: {
    startSlide() {
      this.play = !this.play;
      if (this.play) {
        this.timer = setInterval(() => {
          if (this.currentIndex == this.endImg) {
            this.currentIndex = this.startImg;
          } else {
            this.currentIndex += 1;
          }
        }, 1000);
      } else {
        this.clearAnimationInterval();
      }
    },

    next() {
      this.currentIndex += 1;
    },

    clearAnimationInterval() {
      clearInterval(this.timer);
      this.play = false;
    },

    /*changePlayer() {
        this.play = !this.play;
        if(this.play) {
            this.timer = 
        }
    }*/
  },
};
</script>

<style>
img {
  height: 600px;
  width: 100%;
}
</style>
