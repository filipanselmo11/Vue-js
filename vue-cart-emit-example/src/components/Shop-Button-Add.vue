<template>
  <button class="Button" @click="buttonClicked">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Shop-Button-Add',
  props: ['item'],
  data: () => ({}),

  methods: {
    buttonClicked() {
      this.$emit('button-clicked');
    },
  },
};
</script>

<style></style>
