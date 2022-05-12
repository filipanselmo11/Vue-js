<template>
  <button class="Button" @click="buttonClicked">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'Shop-Button-Empty',
    data:() => ({

    }),

    methods: {
        buttonClicked() {
            this.$emit('emit-empty-cart');
        }
    },
}
</script>

<style>

</style>