<template>
  <div>
    <form @submit="addBook">
      <input type="text" name="title" v-model="title" placeholder="Add Book" />
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddBookItem",
  props: ["editBook"],
  data: () => ({
    title: "",
    id: "",
    edit: false,
  }),
  methods: {
    addBook(e) {
      e.preventDefault();
      if (this.edit === false) {
        const newBook = {
          title: this.title,
          id: Math.floor(Math.random() * 100),
        };
        if (newBook.title !== "") {
          this.$emit("add-book-event", newBook);
        }
        this.title = "";
      } else {
        const bookItem = {
          title: this.title,
          id: this.id,
        };
        this.$emit("edit-book-event", bookItem);
        this.title = "";
        this.edit = false;
      }
    },
  },
};
</script>

<style></style>
