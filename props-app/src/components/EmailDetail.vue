<template>
  <div style="padding: 100px; border: 1px solid #eee">
    <ul>
      <li v-for="email in emails" :key="email.id">
        <h4>{{ email.subject }}</h4>
        <hr />
        <p>{{ email.message }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    emails: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
