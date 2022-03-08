<template>
  <div>
    <transition name="lef-slide" mode="out-in">
      <section :key="activeSlide.image">
        <img :src="activeSlide.image" />
      </section>
    </transition>

    <button @click="activeSlideIndex = activeSlide + 1">Next</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeSlideIndex: 0,
    slides: [
      { image: "https://picsum.photos/500/300?random=1" },
      { image: "https://picsum.photos/500/300?random=2" },
      { image: "https://picsum.photos/500/300?random=3" },
      { image: "https://picsum.photos/500/300?random=4" },
    ],
  }),

  computed: {
    activeSlide() {
      return this.slides[this.activeSlideIndex];
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
