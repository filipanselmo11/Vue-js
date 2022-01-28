<template>
  <div>
    <v-alert border="top" color="red lighten-2" dark>
      Eu sou um alert da cor vermelha
    </v-alert>

    <v-alert border="right" color="blue-grey" dark>
      Eu sou um alert da cor cinza
    </v-alert>

    <v-alert border="left" color="pink darken-1" dark>
      Eu sou um alert da cor rosa
    </v-alert>

    <v-alert dense type="info"> Eu sou um alerta denso de informação</v-alert>

    <v-alert dense text type="success"> Eu sou um alerta de sucesso</v-alert>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>