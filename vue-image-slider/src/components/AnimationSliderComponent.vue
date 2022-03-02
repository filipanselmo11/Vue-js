<template>
  <v-row class="ml-5 mr-6 my-4" align="center">
    <v-btn icon @click="changePlayer">
      <v-icon>
        {{ play ? "mdi-pause-circle-outline" : "mdi-play-circle-outline" }}
      </v-icon>
    </v-btn>
    <v-slider
      v-model="currentImage"
      hide-details
      min="0"
      :max="endImage"
      step="1"
      :thumb-label="play ? 'always' : ''"
    >
        <template v-slot:prepend>
            <span class="ml-1 mt-1">
                {{ imageFeatures[endImage].image }}
            </span>
        </template>
        <template v-slot:thumb-label="{ value }">
            <v-chip>
                <strong>
                    {{ imageFeatures[inverseImageFeatureIndex(value)].image }}
                </strong>
            </v-chip>
        </template>
        <template v-slot:append>
            {{ imageFeatures[startImage].image }}
        </template>
    </v-slider>
  </v-row>
</template>

<script>
export default {
  name: "AnimationSliderComponent",
  props: {
    imageFeatures: {
      type: Array,
    },
  },
  data: () => ({
    imageFeatureSelect: undefined,
    currentImage: undefined,
    play: false,
    interval: undefined,
  }),

  watch: {
    currentImage(value) {
      if (value) {
        this.init();
      }
    },
  },

  mounted() {
    this.init();
  },

  computed: {
    startImage() {
      return 0;
    },

    endImage() {
      return this.imageFeatures.length - 1;
    },
  },

  methods: {
    init() {
      this.currentImage =
        this.imageFeatures && this.imageFeatures.length
          ? this.imageFeatures.length - 1
          : undefined;
      this.imageFeatureSelect =
        this.imageFeatures && this.imageFeatures.length
          ? this.imageFeatures[0]
          : undefined;
    },

    changePlayer() {
      this.play = !this.play;
      if (this.play) {
        this.interval = setInterval(() => {
          if (this.currentImage == this.endImage) {
            this.currentImage = this.startImage;
          } else {
            this.currentImage += 1;
          }
        }, 900);
      } else {
        this.clearAnimationInterval();
      }
    },

    changeImageFeature(value) {
      const imageFeature =
        this.imageFeatures[this.inverseImageFeatureIndex(value)];
      this.imageFeatureSelect = imageFeature;
      this.$emit("changeImageFeature", imageFeature);
    },

    changeImageFeatureSelect(value) {
      if (!this.play) {
        this.currentImage = this.inverseImageFeatureIndex(
          this.imageFeatures.findIndex((item) => item.image == value.image)
        );
      }
    },

    inverseImageFeatureIndex() {
      clearInterval(this.interval);
      this.play = false;
    },
  },
};
</script>

<style></style>
