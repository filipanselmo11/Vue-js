<template>
  <div class="camera">
    <h2 class="camera__name">{{ name }}</h2>
    <span class="camera__rating">{{ rating }}</span>
    <img class="camera__image" src="img" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
  },
  computed:{
      img(){
          return `./images/cameras/${encodeURIComponent(this.name)}·jpg`;
      }
  },
};
</script>

<style>
</style>