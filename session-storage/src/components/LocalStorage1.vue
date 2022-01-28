<template>
  <div>
    <p>
      Meu nome é: <input v-model="name" /> e tenho <input v-model="age" />anos
      de idade
    </p>
    <p>
      <button @click="persist">Salvar</button>
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    age: 0,
  }),

  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }

    if (localStorage.age) {
      this.age = localStorage.age;
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
  },

  methods: {
    persist() {
      localStorage.name = this.name;
      localStorage.age = this.age;
      console.log("Agora finja que fiz mais coisas...");
    },
  },
};
</script>

<style>
</style>