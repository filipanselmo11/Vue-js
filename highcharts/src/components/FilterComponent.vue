<template>
  <div>
    <select @change="commit" v-model="gender">
      <option value="">Ambos</option>
      <option value="">Male</option>
      <option value="">Female</option>
    </select>
  </div>
</template>

<script>
export default {
  data: () => ({
    gender: "",
  }),

  methods: {
    commit() {
      this.$store.commit('SET_FILTER', this.gender);
    }
  }
};
</script>

<style>
</style>