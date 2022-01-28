<template>
  <v-container>
    <div id="map" class="map" style="width: 100%; height: 500px"></div>
  </v-container>
</template>

<script>
/* eslint-disable */
import "ol/ol.css";
import GeoJSON from "ol/format/GeoJSON";
import Map from "ol/Map";
import View from "ol/View";
import { defaults as defaultControls, ScaleLine } from "ol/control";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { Style, Icon } from "ol/style";
import Overlay from "ol/Overlay";

export default {
  data: () => ({
    vectorGeoJSON: new VectorLayer(),
    source: new VectorSource({
      format: new GeoJSON(),
    }),
  }),
  async mounted() {
    await this.initMap();
  },

  methods: {
    initMap() {
      let self = this;
      const imageStyle = new Icon({
        scale: 1.0,
        src: require("../assets/location_on-white-48dp.svg"),
      });

      const source = new VectorSource();
      const vector = new VectorLayer({
        source: source,
      });

      const raster = new TileLayer({
        source: new OSM(),
      });

      const map = new Map({
        controls: defaultControls().extend([
          new ScaleLine({
            units: "degrees",
          }),
        ]),
        target: "map",
        layers: [raster, vector /*, this.vectorGeoJSON*/],
        view: new View({
          projection: "EPSG:4326",
          center: [-3.0916183686719063, -60.01096655355094],
          zoom: 7,
        }),
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
  height: 100px;
  width: 100%;
}
</style>