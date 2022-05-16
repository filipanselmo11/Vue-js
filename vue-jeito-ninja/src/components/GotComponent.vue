<template>
  <ul class="list-groups">
    <li v-for="(item, index) in lista" :key="index">
      {{ item.nome }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "GotComponent",
  data: () => ({
    lista: [
      { nome: "Aria Stark" },
      { nome: "João das Neves" },
      { nome: "Tyrion Lanister" },
      { nome: "Sansa Stark" },
      { nome: "Dracaris" },
    ],
  }),
};
</script>

<style></style>
