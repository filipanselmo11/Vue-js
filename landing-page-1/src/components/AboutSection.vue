<template>
  <section id="about">
      <v-container fluid>
          <v-row align="center" justify="center">
              <v-col cols="10">
                  <v-row align="center" justify="center">
                      <v-col cols="10">
                          <v-row align="center" justify="center">
                              <v-col cols="12" md="7">
                                  <h1 class="font-weight-light display-2">Sobre</h1>
                                  <h1 class="font-weight-light display-1 mb-3">Lorem ipsum seculorum</h1>
                              </v-col>
                          </v-row>
                          <v-col cols="12" class="d-flex align-center">
                              <p class="text-justify">Lorem ipsum dolor sit amet consectetur.</p>
                          </v-col>
                          <v-col cols="12" class="d-flex align-center">
                              <p class="text-justify">Lorem ipsum dolor sit amet</p>
                          </v-col>
                          <v-col cols="12" class="d-flex align-center">
                              <p class="text-justify">Lorem ipsum dolor sit amet</p>
                          </v-col>
                      </v-col>
                  </v-row>
              </v-col>
              <v-col cols="12" md="5" class="d-none d-md-flex">
                  <v-img 
                  src="https://amazonasatual.com.br/wp-content/uploads/2019/05/FOTO.19-1-749x437.jpg"
                  class="d-block ml-auto mr-auto"
                  max-width="400px">
              </v-col>
          </v-row>
      </v-container>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
 #about {
        background-color: #f4f7f5;
    }
</style>