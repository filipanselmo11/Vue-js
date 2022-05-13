<template>
  <div>
    <!-- {{ items }} -->
    <ul>
      <li v-for="(index, item) in items" :key="index">
        <a @click.stop.prevent="emitClick(index)" href="#">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    emitClick(index) {
      this.$emit("emit-click", index);
    },
  },
};
</script>

<style></style>
