<template>
  <div class="container">
    <div class="card">
      <div class="card-block">
        <div class="form-group">
          <label for="">Título</label>
          <input  v-model="titulo" type="text" class="form-control" />
        </div>
        <button @click.stop.prevent="submit" class="btn btn-primary">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardForm",
  data: () => ({
    titulo: "",
  }),
  methods: {
    submit() {
      this.$root.$emit("submit", this.titulo);
    },
  },
};
</script>

<style></style>
