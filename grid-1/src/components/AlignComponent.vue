<template>
  <div>
    <v-container
      v-for="align in alignments"
      :key="align"
      class="blue lighten-5 mb-6"
    >
      <v-row :align="align" no-gutters style="height: 150px">
        {{ align }}
        <v-col v-for="n in 3" :key="n">
          {{ n }}
          <v-card class="pa-2" outlined tile> 1 of 3 Columns </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="red">
      <v-row no-gutters style="height: 150px">
        <v-col v-for="align in alignments" :key="align" :align-self="align">
          {{ align }}
          <v-card class="pa-2" outlined tile> 1 of 3 Columns </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    alignments: ["start", "center", "end"],
  }),
};
</script>

<style></style>
