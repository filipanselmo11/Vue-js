<template>
  <div id="app">
    <div class="cell cell-map">
      <MapaContainer :geojson="geojson" />
    </div>
    <div class="cell cell-edit">
      <Edit :geojson="geojson" v-on:change="geojson = $event" />
    </div>
    <div class="cell cell-inspect">Inspect</div>
      <Inspect :feature="selected"/>
  </div>
</template>

<script>
import Edit from "./components/Edit.vue";
import MapaContainer from "./components/MapaContainer.vue";
import Inspect from './components/Inspect.vue';

export default {
  name: "App",
  components: {
    Inspect,
    Edit,
    MapaContainer,
  },

  data: () => ({
    selected: undefined,
    geojson: {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-27.0703125, 43.58039085560784],
            [-28.125, 23.563987128451217],
            [-10.8984375, 32.84267363195431],
            [-27.0703125, 43.58039085560784],
          ]
        ]
      }
    }
  }),
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  display: grid;
  grid-template-columns: 100vh;
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
}

.cell {
  border-radius: 4px;
  background-color: lightgrey;
}

.cell-map {
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 3;
}

.cell-edit {
  grid-column: 2;
  grid-row: 1;
}

.cell-inspect {
  grid-column: 2;
  grid-row: 2;
}
</style>