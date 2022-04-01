<template>
  <div>
      <h1 class="text-center">White List 1 User</h1>
      <drizzle-account units="Ether" :precision="2" class="text-center"/>
      <modal></modal>
      <modal-2></modal-2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Modal2 from '../components/Modal-2.vue';
import Modal from '../components/Modal.vue';
export default {
  components: { Modal, Modal2 },
    name: "WhiteList-1",
    computed: {
        ...mapGetters("drizzle", ["drizzleInstance"])
    },
}
</script>

<style>

</style>