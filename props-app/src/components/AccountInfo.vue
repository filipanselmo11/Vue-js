<template>
  <div id="account-info">
    <button @click="changeUsername()">Change Username</button>
    {{ username }}
  </div>
</template>

<script>
export default {
  name: "AccountInfo",
  props: {
    username: String,
  },
  methods: {
    changeUsername() {
      this.$emit("changeUsername");
    },
  },
};
</script>

<style>
</style>