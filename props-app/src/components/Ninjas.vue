<template>
  <div id="ninjas">
    <ul>
      <li
        v-for="(index, ninja) in ninjas"
        :click="(ninja.show = !ninja.show)"
        :key="index"
      >
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
    <button @click="deleteNinja">Delete Ninja</button>
  </div>
</template>

<script>
export default {
  props: {
    ninjas: {
      type: Array,
      required: true,
    },
  },
  data: () => ({}),

  methods: {
    deleteNinja() {
      this.ninjas.pop();
    },
  },
};
</script>

<style></style>
