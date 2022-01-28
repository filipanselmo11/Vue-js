<template>
  <div id="app">
    <add-book-item
      v-model="editBook.title"
      v-on:add-book-event="addBookItem"
      v-bind:editBook="editBook"
      v-on:edit-book-event="editBookItemEvent"
    ></add-book-item>
    <books v-bind:books="books" v-on:del-book-event="deleteBookItem"></books>
  </div>
</template>

<script>
import AddBookItem from "./components/AddBookItem.vue";
import Books from "./components/Books.vue";
export default {
  name: "App",
  components: { Books, AddBookItem },
  data: () => ({
    books: [],
    editBook: {
      title: "",
      id: "",
    },
  }),
  methods: {
    addBookItem(newBook) {
      this.books = [...this.books, newBook];
    },

    deleteBookItem(id) {
      this.books = this.books.filter((book) => book.id !== id);
    },

    editBookItem(id) {
      var objIndex = this.books.findIndex((obj) => obj.id === id);
      this.editBook.title = this.books[objIndex].title;
      this.editBook.id = id;
    },

    editBookItemEvent(bookItem) {
      let objIndex = this.books.findIndex((obj) => obj.id === bookItem.id);
     this.books[objIndex].title = bookItem.title; 
    }
  },

  watch: {
    editBook: {
      handler() {
        this.title = this.editBook.title;
        this.id = this.editBook.id;
        this.edit = true;
      },
      deep: true,
    },
    title: {
      handler() {
        if (this.title === "") {
          this.edit = false;
        }
      },
    },
  },
  mounted() {
    if (localStorage.getItem("books")) {
      this.books = JSON.parse(localStorage.getItem("books"));
    }
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
