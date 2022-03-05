<template>
  <div>
    <input type="text" v-model="fullName" />
    <h1>{{ firstName }}</h1>
    <h1>{{ lastName }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    firstName: "Terry",
    lastName: "Ben",
  }),

  methods: {},
  computed: {
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },

      set(name) {
          var fname = name.split(" ");
          this.firstName = fname[0];
          this.lastName = fname[1];
      }
    },
  },
};
</script>

<style></style>
