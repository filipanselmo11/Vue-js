<template>
  <div>
    <h1>EMAIL</h1>
    <search></search>
    <email-detail :emails="emails"></email-detail>
  </div>
</template>

<script>
import EmailDetail from "./EmailDetail.vue";
import Search from "./Search.vue";
export default {
  components: { Search, EmailDetail },
  data: () => ({
    emails: [
      {
        id: 1,
        subject: "Email 1",
        message: "Precisa estudar novas coisas sobre o Vue, para evoluir",
      },
      {
        id: 2,
        subject: "Email 2",
        message: "Precisa ter paciência",
      },
      {
        id: 3,
        subject: "Email 3",
        message: "Divirta-se de vez em quando",
      },
    ],
  }),
};
</script>

<style></style>
