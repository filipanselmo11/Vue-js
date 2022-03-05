<template>
  <div>
    FirstName: <input type="text" v-model="firstname" /> <br />
    <br />
    LastName: <input type="text" v-model="lastname" /> <br />
    <br />

    <h1>My name is {{ firstname }} {{ lastname }}</h1>
    <h1>Using computed method: {{ getfullname }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    firstname: "",
    lastname: "",
  }),

  computed: {
    getfullname() {
      return this.firstname + " " + this.lastname;
    },
  },
};
</script>

<style></style>
