<template>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
  name: "MapComponent",
  data: () => ({
    map: undefined,
  }),
  mounted() {
    this.setupMap();
  },
  methods: {
    setupMap() {
      this.map = L.map("map").setView([-0.11533291437044707, -67.09336742717267], 13);
      this.map.on("click", this.onMapClick);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
      }).addTo(this.map);
      //   L.marker([-0.12378721860667816, -67.08924755427577]).addTo(map);
      const circle_1 = L.circle([-0.13466541445730734, -67.08562491057117], {
        color: "blue",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 500,
      }).addTo(this.map);
      const circle_2 = L.circle([-0.12387304909303351, -67.07349762351372], {
        color: "red",
        fillColor: "blue",
        fillOpacity: 0.5,
        radius: 500,
      }).addTo(this.map);
      const polygon_1 = L.polygon([
        [-0.1330897059795093, -67.08649888889953], //Centro Juvenil Salesiano
        [-0.13567335749927611, -67.07951344157546], //Praia,
        [-0.12623728462342182, -67.08210366037697], //Morro da Boa Esperança
      ]).addTo(this.map);
      const polygon_2 = L.polygon([
        [-0.10905748699994758, -67.09059960593775], //Galpão do Forró
        [-0.11186843677431559, -67.07982785488157], //Escola Estadual Sagrada Família,
        [-0.1211017312426321, -67.09073828637412],
        [-0.1260441574585611, -67.07351035341756],
      ]).addTo(this.map);
      circle_1.bindPopup("Olá eu sou o circulo1");
      circle_2.bindPopup("Olá eu sou o circulo1");
      polygon_1.bindPopup("Olá eu sou o polígono 1");
      polygon_2.bindPopup("Olá eu sou o polígono 2");
    },
    onMapClick(e) {
      const popup = L.popup();
      popup
        .setLatLng(e.latlng)
        .setContent("Você clicou o mapa no " + e.latlng.toString())
        .openOn(this.map);
    },
  },
};
</script>

<style scoped>
#map {
  width: 80vw;
  height: 100vh;
}
</style>
