<template>
    <v-card>
        <div id="map"></div>
    </v-card>
</template>

<script>
/*eslint-disable* */
import "ol/ol.css";
import Circle from "ol/geom/Circle";
import Feature from "ol/Feature";
import GeoJSON from "ol/format/GeoJSON";
import Map from "ol/Map";
import View from "ol/View";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";

const geojsonObject = {
  type: "FeatureCollection",
  crs: {
    type: "name",
    properties: {
      name: "EPSG:3857",
    },
  },
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [0, 0],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [-0.11204819982460681, -67.081196184549],
          [-0.11492473922213768, -67.07890832123091],
        ],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [-0.11853591402261494, -67.08322070396014],
          [-0.12121799983183723, -67.09063589834939],
        ],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-0.12142835947676339, -67.09085502357306],
            [-0.12041162111081893, -67.09155622399354],
            [-0.12041162111081893, -67.09155622399354],
            [-0.12142835947676339, -67.09085502357306],
          ],
        ],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "MultiLineString",
        coordinates: [
          [
            [-1e6, -7.5e5],
            [-1e6, 7.5e5],
          ],
          [
            [1e6, -7.5e5],
            [1e6, 7.5e5],
          ],
          [
            [-7.5e5, -1e6],
            [7.5e5, -1e6],
          ],
          [
            [-7.5e5, 1e6],
            [7.5e5, 1e6],
          ],
        ],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-5e6, 6e6],
              [-3e6, 6e6],
              [-3e6, 8e6],
              [-5e6, 8e6],
              [-5e6, 6e6],
            ],
          ],
          [
            [
              [-2e6, 6e6],
              [0, 6e6],
              [0, 8e6],
              [-2e6, 8e6],
              [-2e6, 6e6],
            ],
          ],
          [
            [
              [1e6, 6e6],
              [3e6, 6e6],
              [3e6, 8e6],
              [1e6, 8e6],
              [1e6, 6e6],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "GeometryCollection",
        geometries: [
          {
            type: "LineString",
            coordinates: [
              [-5e6, -5e6],
              [0, -5e6],
            ],
          },
          {
            type: "Point",
            coordinates: [4e6, -5e6],
          },
          {
            type: "Polygon",
            coordinates: [
              [
                [1e6, -6e6],
                [3e6, -6e6],
                [2e6, -4e6],
                [1e6, -6e6],
              ],
            ],
          },
        ],
      },
    },
  ],
};
/*eslint-disable*/
export default {
  async mounted() {
    this.initMap();
  },

  methods: {
    initMap() {
      const image = new CircleStyle({
        radius: 5,
        fill: null,
        stroke: new Stroke({ color: "red", width: 1 }),
      });

      const styles = {
        Point: new Style({
          image: image,
        }),
        LineString: new Style({
          stroke: new Stroke({
            color: "green",
            width: 1,
          }),
        }),
        MultiLineString: new Style({
          stroke: new Stroke({
            color: "green",
            width: 1,
          }),
        }),
        MultiPoint: new Style({
          image: image,
        }),
        MultiPolygon: new Style({
          stroke: new Stroke({
            color: "yellow",
            width: 1,
          }),
          fill: new Fill({
            color: "rgba(255,255,0,0.1)",
          }),
        }),
        Polygon: new Style({
          stroke: new Stroke({
            color: "blue",
            lineDash: [4],
            width: 3,
          }),
          fill: new Fill({
            color: "rgba(0,0,255,0.1)",
          }),
        }),
        GeometryCollection: new Style({
          stroke: new Stroke({
            color: "magenta",
            width: 2,
          }),
          fill: new Fill({
            color: "magenta",
          }),
          image: new CircleStyle({
            radius: 10,
            fill: null,
            stroke: new Stroke({
              color: "magenta",
            }),
          }),
        }),
        Circle: new Style({
          stroke: new Stroke({
            color: "red",
            width: 2,
          }),
          fill: new Fill({
            color: "rgba(255,0,0,0.2)",
          }),
        }),
      };
      const styleFunction = function(feature) {
          return styles[feature.getGeometry().getType()];
      };

      const vectorSource = new VectorSource({
          features: new GeoJSON().readFeatures(geojsonObject),
      });

      vectorSource.addFeature(new Feature(new Circle([5e6, 7e6], 1e6)));

      const vectorLayer = new VectorLayer({
          source: vectorSource,
          style: styleFunction
      });

      const view = new View({
          center: [0,0],
          zoom: 2,
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
      })
    },
  },
};
</script>

<style>
#map {
    width: 100%;
    height: 400px;
}
</style>