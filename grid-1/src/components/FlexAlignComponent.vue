<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card
          v-for="a in align"
          :key="a"
          :class="`d-flex align-${a} mb-6`"
          flat
          height="100"
          tile
        >
            {{ a }}
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined> item </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    align: ["start", "end", "center", "baseline", "stretch"],
  }),
};
</script>

<style></style>
