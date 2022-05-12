<template>
  <div>
    <table class="table">
      <thead>
        <th v-for="header in tableHeader" :key="header">
          {{ header }}
        </th>
      </thead>
      <tbody>
        <tr v-for="(user, index) in listUsers" :key="index">
          <td>{{ index }}</td>
          <td>{{ user.nome }}</td>
          <td>{{ user.idade }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableUsers",
  props: {
    listUsers: {
      type: Array,
      required: True,
    },
  },
};
</script>

<style></style>
