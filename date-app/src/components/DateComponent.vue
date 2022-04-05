<template>
  <div>
    <!--<h1> Array antes da função de sort</h1>
    {{ this.activities }}
    <h1>Array depois da função de Sort</h1>
    {{this.sort(this.activities)}}-->
  </div>
</template>

<script>
const activities = [
  { title: "Hiking", date: new Date("2019-06-28") },
  { title: "Shopping", date: new Date("2019-06-10") },
  { title: "Trekking", date: new Date("2019-06-22") },
];
console.log("Array Activities ", activities);
//const sortedActivities = activities.sort((a, b) => b.date - a.date);
const sortedActivities = activities.slice().sort((a, b) => b.date - a.date);
console.log("Array Activities Sorted ", sortedActivities);
export default {
  data: () => ({
    activities: [
      { title: "Hiking", date: new Date("2019-06-28") },
      { title: "Shopping", date: new Date("2019-06-10") },
      { title: "Trekking", date: new Date("2019-06-22") },
    ],
    sortedActivities: [],
  }),

  methods: {
    sort(activities) {
      let sort = activities.sort((a, b) => b.date - a.date);
      this.sortedActivities = sort;
      return this.sortedActivities;
    },
  },
};
</script>

<style>
</style>