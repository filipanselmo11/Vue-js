<template>
  <div class="float-left">
    <span>{{ book.title }}</span>
    <button>
      <i
        class="glyphicon glyphicon-pencil"
        @click="$emit('edit-book-item', 'book.id')"
        >edit</i
      >
    </button>
    <button>
      <i
        class="glyphicon glyphicon-trash"
        @click="$emit('del-book-item', 'book.id')"
        >delete</i
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: ["book"],
};
</script>

<style></style>
