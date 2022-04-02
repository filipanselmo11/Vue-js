<template>
  <div>
      <h1 class="text-center">White List 1 User</h1>
      <drizzle-account units="Ether" :precision="2" class="text-center"/>
      <modal></modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Modal from '../components/Modal.vue';
export default {
  components: { Modal},
    name: "WhiteList-1",
    computed: {
        ...mapGetters("drizzle", ["drizzleInstance"])
    },
}
</script>

<style>

</style>