<template>
  <ul class="list-group">
    <li v-for="(item, index) in list" :key="index" class="list-group-item">
      {{ item.titulo }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListComponent",
  created() {
    var vm = this;
    this.$root.$on("submit", function (titulo) {
      if(titulo){
          vm.list.push({titulo:titulo});
      }
    });
  },

  data: () => ({
    list: [{ titulo: "Ir a feira" }],
  }),
};
// const eventBus = new Vue();
</script>

<style></style>
