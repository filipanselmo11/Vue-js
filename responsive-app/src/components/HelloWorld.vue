<template>
  <v-container>
      <v-row justify="space-between">
        <v-col md="3">
          <v-card dark tile flat color="error">
            <v-card-text>#1</v-card-text>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card dark tile flat color="pink darken-4">
            <v-card-text>#2</v-card-text>
          </v-card>
        </v-col>
      </v-row> 
      <v-row justify="space-around">
        <v-col md="3">
          <v-card dark tile flat color="error">
            <v-card-text>#3</v-card-text>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card dark tile flat color="pink darken-4">
            <v-card-text>#4</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>



<script>
export default {
  name: "HelloWorld",
  data: () => ({}),
};
</script>
