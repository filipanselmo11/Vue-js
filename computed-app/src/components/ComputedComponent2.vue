<template>
  <div>
    <h1 style="background-color: gray">
      Random No from computed property: {{ getrandomno }}
    </h1>
    <h1>Random No from method: {{ getrandomno1() }}</h1>
    <h1>Random No from method: {{ getrandomno1() }}</h1>
    <h1 style="background-color: gray">
      Random No from computed property {{ getrandomno }}
    </h1>
    <h1 style="background-color: gray">
      Random No from computed property {{ getrandomno }}
    </h1>
    <h1 style="background-color: gray">
      Random No from computed property {{ getrandomno }}
    </h1>
    <h1>Random No from method: {{ getrandomno1() }}</h1>
    <h1>Random No from method: {{ getrandomno1() }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({}),

  methods: {
    getrandomno1() {
      return Math.random();
    },
  },

  computed: {
    getrandomno() {
      return Math.random();
    },
  },
};
</script>

<style>
h1 {
  font-family: 'Courier New', Courier, monospace;
}
</style>
