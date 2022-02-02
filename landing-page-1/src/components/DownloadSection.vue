<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justiyf="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img
                src="https://www.seriesdatv.pt/wp-content/uploads/2021/11/the-flash-8.jpg"
                class="d-block mr-auto"
                max-width="350px"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">
                Baixar Demonstração
              </h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <v-btn rounded outlined large color="white" class="mt-4">
                <v-icon class="mr-2"> mdi-airplane-location </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#download {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>
