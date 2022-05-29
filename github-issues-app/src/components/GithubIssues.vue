<template>
  <v-container>
    <h1>Vue JS + Vuetify + Github</h1>
    <p>Página que lista issues de um repositório do Github, utilizando Vue js.</p>
    <v-row>
      <v-col>
        <v-form ref="form" lazy-validation>
          <v-text-field v-model="name" label="Github UserName" required></v-text-field>
          <v-text-field v-model="repo" label="Github Repo" required></v-text-field>
          <v-btn @click.prevent.stop="getIssues" color="success" class="mr-4">Go</v-btn>
          <v-btn @click.prevent.stop="reset" color="error" class="mr-4">Limpar</v-btn>
        </v-form>
      </v-col>
    </v-row>

    <br />
    <hr />
    <br />

    <v-data-table
      dense
      :headers="headers"
      item-key="name"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "GithubIssues",
  data: () => ({
    name: undefined,
    repo: undefined,
    headers: [{ text: "Número" }, { text: "Título" }],
  }),
  methods: {
    reset() {
      this.name = "";
      this.repo = "";
      console.log("Resetados com Sucesso");
    },
    getIssues() {
      console.log("FUNFANDO");
    },
  },
};
</script>

<style></style>
