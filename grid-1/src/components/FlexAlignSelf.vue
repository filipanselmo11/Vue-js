<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card v-for="j in justify" :key="j" class="d-flex mb-6" height="100">
            {{ j }}
          <v-card
            v-for="n in 3"
            :key="n"
            class="pa-2"
            :class="[n === 1 && `align-self-${j}`]"
          >
            {{ n }}
            {{ n === 1 ? "Aligned flex item" : "Flex item" }}
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    justify: ["start", "end", "center", "baseline", "auto", "stretch"],
  }),
};
</script>

<style></style>
