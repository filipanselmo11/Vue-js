<template>
  <v-app>
      <navigation/>
      <v-main class="pt-0">
          <home-section/>
          <about-section/>
          <download-section/>
          <pricing-section/>
          <contact-section/>
      </v-main>
      <v-scale-transition>
          <v-btn fab dark fixed bottom right color="secondary">
              <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
      </v-scale-transition>
      <footer-component/>
  </v-app>
</template>

<script>
import ContactSection from './components/ContactSection.vue'
import DownloadSection from './components/DownloadSection.vue'
import FooterComponent from './components/FooterComponent.vue'
import HomeSection from './components/HomeSection.vue'
import Navigation from './components/Navigation.vue'
import PricingSection from './components/PricingSection.vue'
export default {
  components: { Navigation, HomeSection, DownloadSection, PricingSection, ContactSection, FooterComponent },

}
</script>

<style scoped>

.v-main {
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

</style>