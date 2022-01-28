<template>
  <div class="user">
    <label for="name" class="form-control">Name:</label>
    <input class="form-control input-sm" name="name" v-model="name" />
    <contact :phone="phone" :email="email"></contact>
  </div>
</template>

<script>
import Contact from './Contact.vue';
export default {
  components: {
    Contact,
  },
  data: () => ({
    name: "",
    phone: "",
    email: "",
  }),
};
</script>

<style>
</style>