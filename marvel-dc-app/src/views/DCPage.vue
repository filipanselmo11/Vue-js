<template>
  <div class="dcpage">
    <h1 class="ml-6">DC Comics</h1>
    <br /><br />
    <v-container>
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <v-row>
        <v-col cols="6" md="4">
          <card-batman></card-batman>
        </v-col>
        <v-col cols="6" md="4">
          <card-flash></card-flash>
        </v-col>
        <v-col cols="6" md="4">
          <card-superman></card-superman>
        </v-col>
        <v-col cols="6" md="4">
          <card-mulher-maravilha></card-mulher-maravilha>
        </v-col>
        <v-col cols="6" md="4">
          <card-exterminador></card-exterminador>
        </v-col>
        <v-col cols="6" md="4">
          <card-flash-reverso></card-flash-reverso>
        </v-col>
        <v-col cols="6" md="4">
          <card-lex-luthor></card-lex-luthor>
        </v-col>
        <v-col cols="6" md="4">
          <card-kid-flash></card-kid-flash>
        </v-col>
        <v-col cols="6" md="4">
            <card-bane></card-bane>
        </v-col>
        <v-col cols="6" md="4">
            <card-mulher-leopardo></card-mulher-leopardo>
        </v-col>
        <v-col cols="6" md="4"> Sinestro </v-col>
        <v-col cols="6" md="4"> Lanterna Verde </v-col>
        <v-col cols="6" md="4"> Arqueiro Verde </v-col>
        <v-col cols="6" md="4"> Capuz Vermelho </v-col>
        <v-col cols="6" md="4"> Robin </v-col>
        <v-col cols="6" md="4"> Super Boy </v-col>
        <v-col cols="6" md="4"> Katana </v-col>
        <v-col cols="6" md="4"> Harlequina </v-col>
        <v-col cols="6" md="4"> Mulher Gato </v-col>
        <v-col cols="6" md="4"> Batman que Ri </v-col>
        <v-col cols="6" md="4"> Impulso </v-col>
        <v-col cols="6" md="4"> Super Choque </v-col>
        <v-col cols="6" md="4"> Raio Negro </v-col>
        <v-col cols="6" md="4"> Apocalipse </v-col>
        <v-col cols="6" md="4"> Crocodilo </v-col>
        <v-col cols="6" md="4"> Zody </v-col>
        <v-col cols="6" md="4"> Lobo da Estepe </v-col>
        <v-col cols="6" md="4"> Darkseid </v-col>
        <v-col cols="6" md="4"> Amanda Waller </v-col>
        <v-col cols="6" md="4"> Robin Vermelho </v-col>
        <v-col cols="6" md="4"> Mutano </v-col>
        <v-col cols="6" md="4"> Ravena </v-col>
        <v-col cols="6" md="4"> Ras Al Gul </v-col>
        <v-col cols="6" md="4"> Hugo Strange </v-col>
        <v-col cols="6" md="4"> John Constantine </v-col>
        <v-col cols="6" md="4"> Shazam </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardBatman from "@/components/dc/CardBatman.vue";
import CardFlash from "@/components/dc/CardFlash.vue";
import CardSuperman from "@/components/dc/CardSuperman.vue";
import CardMulherMaravilha from "@/components/dc/CardMulherMaravilha.vue";
import CardExterminador from "@/components/dc/CardExterminador.vue";
import CardFlashReverso from "@/components/dc/CardFlashReverso.vue";
import CardLexLuthor from "@/components/dc/CardLexLuthor.vue";
import CardKidFlash from "@/components/dc/CardKidFlash.vue";
import CardBane from '@/components/dc/CardBane.vue';
import CardMulherLeopardo from '@/components/dc/CardMulherLeopardo.vue';
export default {
  components: {
    CardBatman,
    CardFlash,
    CardSuperman,
    CardMulherMaravilha,
    CardExterminador,
    CardFlashReverso,
    CardLexLuthor,
    CardKidFlash,
    CardBane,
    CardMulherLeopardo
  },
  name: "DCPage",
  data: () => ({}),
};
</script>

<style></style>
