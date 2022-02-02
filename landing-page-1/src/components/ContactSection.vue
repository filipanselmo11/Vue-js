<template>
  <section class="pb-8" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h1 class="font-weight-light display-1">Contate-nos</h1>
              <h3 class="font-weight-light mt-3">
                Lorem ipsum color sit amet consectetur adipsing elit.
              </h3>
              <h3 class="font-weight-light mt-3">Lorem ipsum dolor sit amet</h3>
              <h3 class="font-weight-light mt-3">
                Telefone: +xx (xx) xxxxx-xxxx
              </h3>
              <h3 class="font-weight-light">Email: email@email.com</h3>
            </v-col>
            <v-col cols="12" sm="7">
              <v-form ref="form">
                <v-text-field label="Nome" required></v-text-field>
                <v-text-field label="E-mail" required></v-text-field>
                <v-textarea label="Mensagem" required></v-textarea>
                <v-btn color="primary" roudend block class="mt-3">Enviar</v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img
        src="https://tm.ibxk.com.br/2021/04/30/30142553923242.jpg?ims=1120x420"
      ></v-img>
    </div>
    <v-snackbar
      v-model="snackbar.enabled"
      timeout="3000"
      right
      top
      :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.enabled = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<script>
export default {
  data: () => ({
    snackbar: {
      enabled: false,
      text: "",
      color: "",
    },
  }),
};
</script>

<style scoped>
#contact {
  background-color: #f4f7f5;
}
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
</style>
