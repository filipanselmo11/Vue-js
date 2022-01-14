<template>
  <div id="app">
    <div id="map"></div>
  </div>
</template>

<script>
/*eslint-disable*/
import "ol/ol.css";

import Map from "ol/Map";
import View from "ol/View";
import { defaults as defaultControls, ScaleLine } from "ol/control";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
export default {
  mounted() {
    this.init();
  },

  methods: {
    init() {
      var source = new VectorSource();
      var vector = new VectorLayer({
        source: source,
      });

      var raster = new TileLayer({
        source: new OSM(),
      });

      var map = new Map({
        controls: defaultControls().extend([
          new ScaleLine({
            units: "degress",
          }),
        ]),
        target: "map",
        layers: [raster, vector],
        view: new View({
          projection: "EPSG:4326",
          center: [0, 0],
          zoom: 2,
        }),
      });
    },
  },
};
</script>

<style>
#map {
  position: absolute;
  margin: 0;
  padding: 0;
  height: 500px;
  width: 99%;
}

#app {
  font-family: Avenire, "Helvetica", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
