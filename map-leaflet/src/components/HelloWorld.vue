<template>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
//import data from "./Historic-Landmarks.json";
export default {
  name: "HelloWorld",
  data: () => ({
    center: [37, 7749, -122, 4194],
  }),

  mounted() {
    this.setupMap();
  },

  methods: {
    setupMap() {
      const map = L.map("map").setView(this.center, 13);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiZmlsaXBhbnNlbG1vMTEiLCJhIjoiY2wzeGV5Y2l2MDA2MDNjbWxwc21vaG53ZyJ9.H4ulAjPj92SsI-wLvjZw5w}",
        {
          attribution:
            'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          accessToken:
            "pk.eyJ1IjoiZmlsaXBhbnNlbG1vMTEiLCJhIjoiY2wzeGV5Y2l2MDA2MDNjbWxwc21vaG53ZyJ9.H4ulAjPj92SsI-wLvjZw5w",
        }
      ).addTo(map);
      L.geoJSON(data, { onEachFeature: this.onEachFeature, style: this.styleMap }).addTo(
        map
      );
    },
    styleMap(feature) {
      const year = feature.properties.datelisted
        ? parseInt(feature.properties.datelisted.slice(0, 4))
        : 0;
      const color = year > 2000 ? "red" : "blue";
      return { color: color };
    },
    onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
        layer.on("mouseover", () => {
          layer.openPopup();
        });
        layer.on("mouseout", () => {
          layer.closePopup();
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 80vw;
  height: 100vh;
}
</style>
