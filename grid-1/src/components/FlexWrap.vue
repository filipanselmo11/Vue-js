<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-card class="d-flex flex-nowrap py-3" color="grey" flat tile>
                    <v-card v-for="n in 5" :key="n" class="pa-2" outlined tile>
                        Flex Item
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
