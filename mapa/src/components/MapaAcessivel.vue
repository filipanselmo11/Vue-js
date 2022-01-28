<template>
  <v-row>
    <v-col>
      <v-card>
        <div id="map"></div>
      </v-card>
      <div class="text-center">
        <v-btn class="mx-2" fab dark small color="primary">
          <v-icon dark>mdi-minus</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark color="primary">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";

/*eslint-disable*/
export default {
  async mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        target: "map",
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });

      const zoomOut = (document.getElementById("zoom-out").onclick =
        function () {
          const view = map.getView();
          const zoom = view.getZoom();
          view.setZoom(zoom - 1);
        });

      const zoomIn = (document.getElementById("zoom-in").onclick = function () {
        const view = map.getView();
        const zoom = view.getZoom();
        view.setZoom(zoom + 1);
      });
    },
  },
};
</script>
<style>
#map {
  position: absolute;
  padding: 0;
  z-index: 0;
  margin-top: 0px;
  height: 1000px;
  width: 100%;
}
</style>