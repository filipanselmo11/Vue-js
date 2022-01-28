<template>
  <div id="list-to-do">
    <ol>
      <ToDo v-for="item in groceryList" :todo="item" :key="item.id"></ToDo>
    </ol>
  </div>
</template>

<script>
import ToDo from "./ToDo.vue";
export default {
  data: () => ({
    groceryList: [],
  }),
  component: {
    ToDo,
  },
};
</script>

<style>
</style>