<template>
    <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <v-card
              v-for="j in justify" 
              :key="j" 
              :class="`d-flex justify-${j} mb-2`"
              color="grey"
              flat
              tile>
                <v-card v-for="n in 3" :key="n" class="pa-2" outlined>
                  item
                </v-card>
              </v-card>
          </v-col>

        </v-row>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    justify: ["start", "end", "center", "space-between", "space-around"],
  }),
};
</script>

<style></style>
