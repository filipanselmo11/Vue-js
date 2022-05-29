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
      :items="issues"
      item-key="name"
      class="elevation-1"
    >
      <template slot="items">
        <tr v-for="(issue,index) in issues" :key="index">
          <td>{{issue.number}}</td>
          <td>{{issue.title}}</td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "GithubIssues",
  data: () => ({
    name: undefined,
    repo: undefined,
    issues:[],
    headers: [{ text: "Número" }, { text: "Título" }],
  }),
  methods: {
    reset() {
      this.name = "";
      this.repo = "";
      console.log("Resetados com Sucesso");
    },
    getIssues() {
      if (this.name && this.repo) {
        const url = `https://api.github.com/repos/${this.name}/${this.repo}/issues`;
        axios
          .get(url)
          .then((response) => {
            console.log("RES ", response.data);
            this.issues = response.data;
          })
          .catch((e) => { console.log("ERROR ", e)});
      } else {
        console.log('É necessário preencher os dois campos');
      }
    },
  },
};
</script>

<style></style>
