<template></template>

<script>
import "ol/ol.css";
import GeoJSON from "ol/format/GeoJSON";
import Map from "ol/Map";
import View from "ol/View";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
/*eslint-disable* */
export default {
  async mounted() {
    this.initMap();
  },

  methods: {
    initMap() {
      const source = new VectorSource({
        url: "data/geojson.sgc.geojson",
        format: new GeoJSON(),
      });

      const style = new Style({
        fill: new Fill({
          color: "rgba(255, 255, 255, 0.6)",
        }),

        stroke: new Stroke({
          color: "#319FD3",
          width: 1,
        }),

        image: new CircleStyle({
          radius: 5,
          fill: new Fill({
            color: "rgba(255, 255, 255, 0.6)",
          }),
        }),

        stroke1: new Stroke({
          color: "#319FD3",
          width: 1,
        }),
      });

      const vectorLayer = new VectorLayer({
        source: source,
        style: style,
      });

      const view = new View({
        center: [0, 0],
        zoom: 1,
      });

      const map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer,
        ],
        target: 'map',
        view: view,
      });
    },
  },
};
</script>

<style>
</style>