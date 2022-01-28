<template>
  <div>
    <h1>My first post</h1>
    <p>This a big post helps us to learn Vue Props</p>
    <button-1 name="Share" :handleClick="shareMe"></button-1>
  </div>
</template>

<script>
import Button1 from "./Button1.vue";
export default {
  components: {
    Button1,
  },

  methods: {
    shareMe() {
      console.log("share");
    },
  },
};
</script>

<style>
</style>