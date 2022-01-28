<template>
  <li>
    {{ todo.text }}
  </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: String
        }
    },
  data: () => ({
    groceryList: [
      { id: 0, text: 'Vegetables'},
      { id: 1, text: 'Cheese'},
      { id: 2, text: 'Whatever else humans are supposed to eat'},
    ],
  }),
};
</script>

<style>
</style>