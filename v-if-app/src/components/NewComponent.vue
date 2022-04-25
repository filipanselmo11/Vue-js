<template>
  <div>
      <form>
          <label for="palavra">Informe a palavra :</label>
          <input @input="verificarPalavra" type="text" v-model="palavra" required>
      </form>

      <span>{{this.arrayPalavras }}</span>
  </div>
</template>

<script>
export default {
    data:() => ({
        palavra: " ",
        arrayPalavras:["arroz","feijao","bife","frango","lasanha","macarrao","omelete"],
    }),

    methods:{
        verificarPalavra(){
            let contem;
            for(let index in this.arrayNumeros){
                if(this.palavra == this.arrayPalavras[index]){
                    contem = true;
                } else {
                    contem = false;
                }
            }
            return contem;
        }
    }
}
</script>

<style>

</style>