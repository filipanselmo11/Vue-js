<template>
  <div>
    <h2>My Books List</h2>
    <div v-for="book in books" :key="book.id">
      <BookItem 
        v-bind:book="book" 
        v-on:del-book-item="deleteBook"
        v-on:edit-book-item="editBook"></BookItem>
    </div>
  </div>
</template>

<script>
import BookItem from "./BookItem.vue";
export default {
  name: "Books",
  props: ["books"],
  components: {
    BookItem,
  },

  methods: {
    deleteBook(id) {
      this.$emit("del-book-event", id);
    },
    editBook(id){
        this.$emit('edit-book-event', id);
    }
  },
};
</script>

<style scoped></style>
