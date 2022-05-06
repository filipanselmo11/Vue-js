<template>
  <div class="contact-details-component">
    <h4>Contact Details:</h4>
    <label for="phone" class="form-control">Phone: </label>
    <input class="form-control input-sm" name="phone" v-model="phone" />
    <label for="email" class="form-control">Email: </label>
    <input class="form-control input-sm" name="email" v-model="email" />

    <h4>Address:</h4>
    <address :address-type="addressType"></address>
  </div>
</template>

<script>
import Address from "./Address.vue";
export default {
  props: ["phone", "email"],
  components: { Address },
  name: "ContactDetails",
};
</script>

<style>
</style>