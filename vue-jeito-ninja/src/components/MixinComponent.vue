<template></template>

<script>
var mixin = {
  methods: {
    getUsers() {
      console.log("Get Users");
    },
  },
};
export default {
  name: "MixinComponent",
  mixins: [mixin],
  data: () => ({}),
};
</script>

<style></style>
