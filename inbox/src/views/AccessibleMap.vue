<template>
  <div>
    <a class="skiplink" href="#map">Go to map</a>
    <div id="map" class="map" tabindex="0"></div>
    <button id="zoom-out">Zoom Out</button>
    <button id="zoom-in">Zoom In</button>
  </div>
</template>

<script>
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
export default {
  async mounted() {
    await this.init();
  },

  methods: {
    init() {
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
      document.getElementById("zoom-out").onclick = function () {
        const view = map.getView();
        const zoom = view.getZoom();
        view.getZoom(zoom, 1);
      };

      document.getElementById("zoom-in").onclick = function () {
        const view = map.getView();
        const zoom = view.getZoom();
        view.setZoom(zoom + 1);
      };
    },
  },
};
</script>

<style>
.map {
  width: 100%;
  height: 100%;
}

a.skiplink {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}

a.skiplink:focus {
  clip: auto;
  height: auto;
  width: auto;
  background-color: #fff;
  padding: 0.3em;
}

#map:focus {
  outline: #4a74a8 solid 0.15em;
}
</style>