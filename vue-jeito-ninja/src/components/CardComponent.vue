<template>
  <div class="card">
    <div class="card-block">
      <slot name="title"></slot>
      <slot name="text"></slot>
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  data: () => ({
    title: "",
  }),
};
</script>

<style></style>
