<template>
    <v-row>
        <v-col>
            <v-card>
                <div id="map"></div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import "ol/ol.css";
import MVT from "ol/format/MVT";
import Map from "ol/Map";
import TileGrid from "ol/tilegrid/TileGrid";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import View from "ol/View";
import { Fill, Icon, Stroke, Text } from "ol/style";
import { get as getProjection } from "ol/proj";

/*eslint-disable*/
const resolutions = [];
for (let i = 0; i <= 8; i++) {
  resolutions.push(156543.03392804097 / Math.pow(2, i * 2));
}

const key =
  "pk.eyJ1IjoiZmlsaXBhbnNlbG1vMTEiLCJhIjoiY2t5eDlmcDNtMDBjczJubHVyeTVvdmx3YyJ9.0liwWn6IWkfjPVWNNyhTyw";
export default {
  async mounted() {
    this.initMap();
  },

  methods: {
    tileUrlFunction(tileCoord) {
      return (
        "https://{a-d}.tiles.mapbox.com/v4/mapbox-streets-v6/" +
        "{z}/{x}/{y}.vector.pbf?access_token=" +
        key
      )
        .replace("{z}", String(tileCoord[0] * 2 - 1))
        .replace("{x}", String(tileCoord[1]))
        .replace("{y}", String(tileCoord[2]))
        .replace(
          "{a-d}",
          "abcd".substr(((tileCoord[1] << tileCoord[0]) + tileCoord[2]) % 4, 1)
        );
    },
    initMap() {
      const map = new Map({
        layers: [
          new VectorTileLayer({
            source: new VectorTileSource({
              attributions:
                '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
                '© <a href="https://www.openstreetmap.org/copyright">' +
                "OpenStreetMap contributors</a>",
              format: new MVT(),
              tileGrid: new TileGrid({
                extent: getProjection("EPSG:3857").getExtent(),
                resolutions: resolutions,
                tileSize: 512,
              }),
              tileUrlFunction: this.tileUrlFunction,
            }),
            style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text),
          }),
        ],
        target: "map",
        view: new View({
          center: [0, 0],
          minZoom: 1,
          zoom: 2,
        }),
      });
    },
  },
};
</script>

<style>
#map {
    width: 100%;
    height: 400px;
    background: #f8f4f0;
}

</style>