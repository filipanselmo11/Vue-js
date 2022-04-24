<template>
    <div id="example">
      <button @click="buttonClicked">a</button>
      <button @click="buttonClicked">b</button>
      <template v-if="a">
          <h1>H1</h1>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
      </template>
      <template v-else-if="b">
        <p>SONHEI COM TU HOJE</p>
        <h1>Bom dia</h1>
      </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    a: undefined,
    b: undefined,
  }),

  methods: {
    buttonClicked() {
      if(this.a || this.b){
        console.log(true);
      } else {
        console.log(false);
      }
    }
  }

};
</script>

<style>
</style>