<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "TimeoutComponent1",
  data: () => ({
    message: "Bem vindo, por favor espere...",
  }),

  methods: {
    call() {
      var v = this;
      setTimeout(() => {
        v.message = "Oi Amigo, o SetTimeout está funcionando";
      }, 3000);
    },
  },

  mounted() {
    this.call();
  },
};
</script>

<style></style>
