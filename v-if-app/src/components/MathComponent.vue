<template>
  <div>
      <form>
          <label for="x">Informe o valor de x: </label>
          <input type="number" placeholder="valor de x" v-model="x" required/>
          <br/>
          <label for="y">Informe o valor de y: </label>
          <input type="number" placeholder="valor de y" v-model="y" required/>

      </form>

       <button @click="calcularSoma" type="button">Calcular</button>

   
      <!-- <div v-if="this.cacularSoma == 2">
          <h1> O resultado é 2</h1>
      </div>
      <div v-else-if="this.calcularSoma == 4">
          <h1>O resultado é 4</h1>
      </div>
      <div v-else>
          <h1> O resultado é outro valor.</h1>
      </div> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    x: Number,
    y: Number,
  }),

  methods: {
    calcularSoma() {
      let res;
      res = this.x + this.y;
      console.log(res);
    },
  },
};
</script>

<style>
</style>