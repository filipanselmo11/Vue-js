<template>
  <v-container class="grey lighten-5">
    <v-row v-for="j in justify" :key="j" :justify="j">
        <h1>{{ j }}</h1>
        <v-col v-for="k in 2" :key="k" md="4">
            <v-card class="pa-2" outlined tile>
                <v-img :src="require('../assets/the batman- i am the revenge.jpeg')"/>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    justify: ["start", "center", "end", "space-around", "space-between"],
  }),
};
</script>

<style></style>
