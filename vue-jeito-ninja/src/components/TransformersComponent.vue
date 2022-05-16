<template>
  <div>
    <div class="row">
    <div v-if="sidebar" class="col">
      Sidebar
    </div>
      <div class="col">
        <h4>Transformes</h4>
        <ul class="list-groups">
          <li v-for="(item, index) in lista" :key="index">
            <router-link
              :to="{ name: 'transformers-content', params: { name: item.slug } }"
              >{{ item.nome }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransformersComponent",
  props: {
    sidebar: Boolean,
  },
  created() {
    console.log(this.sidebar);
  },
  data: () => ({
    lista: [
      { nome: 'Optimus Prime', slug: "optimus-prime" },
      { nome: "Megatron", slug: "megatron" },
      { nome: "IronHide", slug: "ironhide" },
      { nome: "StarScream", slug: "star-scream" },
      { nome: "RatchXet", slug: "ratchxet" },
      { nome: "Eternal Prime", slug: "eternal-prime" },
    ],
  }),
};
</script>

<style></style>
