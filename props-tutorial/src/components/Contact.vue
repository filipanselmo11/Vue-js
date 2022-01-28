<template>
  <div class="contact">
    <h4>Contact:</h4>
    <label for="phone" class="form-control">Phone:</label>
    <input class="form-control input-sm" name="phone" v-model="phone" />
    <label for="email" class="form-control">Email: </label>
    <input class="form-control input-sm" name="email" v-model="email" />
    <br/>

    <h4>Address:</h4>
    <Address :address-type="AddressType"></Address>
  </div>
</template>

<script>
import Address from "./Address.vue";
export default {
  props: {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    addressType:'Office'
  }),
  components: {
     Address,
  }
};
</script>

<style>
</style>