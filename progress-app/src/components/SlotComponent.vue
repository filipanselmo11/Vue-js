<template>
  <div>
    <v-progress-linear v-model="progress" color="blue-grey" height="25">
        <template v-slot="{value}">
            <strong>
                {{ Math.ceil(value)}}%
            </strong>
        </template>
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "SlotComponent",
  data: () => ({
    progress: 20,
  }),
};
</script>

<style></style>
