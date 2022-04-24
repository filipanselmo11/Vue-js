<template>
  <div>
    <p>
      Responda Sim/Não
      <input v-model="questao"/>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questao: '',
      resposta: 'Questões geralmente contem a questão marcada. ;-)'
    }
  },
  watch: {
    questao(novaQuestao){
      if(novaQuestao.indexOf('?') > -1){
        this.getResposta();
      }
    }
  },

  methods: {
    async getResposta() {
      this.resposta = 'Pensando...';
      try{
        const res = await fetch("https://yesno.wtf/api");
        this.resposta = (await res.json()).answer;
      } catch(e){
        this.respota = 'Erro! Não pode pesquisar na API. ' + e;
      }
    }
  },
}
</script>

<style>
</style>