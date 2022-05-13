<template>
  <ul class="list-groups">
    <li v-for="(item, index) in lista" :key="index">
      {{ item.nome }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "TransformersComponent",
  data: () => ({
    lista: [
      { nome: "Optimus Prime" },
      { nome: "Megatron" },
      { nome: "IronHide" },
      { nome: "StarScream" },
      { nome: "RatchXet" },
      { nome: "Eternal Prime" },
    ],
  }),
};
</script>

<style></style>
