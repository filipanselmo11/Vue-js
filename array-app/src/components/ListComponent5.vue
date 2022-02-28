<template>
  <div>
    <div v-for="listing in listings" :key="listing.id">
      <div v-for="tag in listing.tags" :key="tag.id">
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    meuArray: [
      {
        id: 1,
        name: "Lenira",
        user_id: 1,
        created_at: null,
        updated_at: "2017-03-02 19:53:36",
        permissions: "",
        about: "É baixinha, mas tem um rabão",
        tags: [
          {
            id: 31,
            name: "Gostosa-1",
            created_at: "2017-03-02 22:40:03",
            updated_at: "2017-03-02 22:40:03",
            pivot: {
              listings_id: "1",
              tags_id: "31",
            },
          },
          {
            id: 32,
            name: "Gostosa-2",
            created_at: "2017-03-02 22:40:03",
            updated_at: "2017-03-02 22:40:03",
            pivot: {
              listings_id: "1",
              tags_id: "32",
            },
          },
          {
            id: 33,
            name: "Gostosa-3",
            created_at: "2017-03-02 22:40:03",
            updated_at: "2017-03-02 22:40:03",
            pivot: {
              listings_id: "1",
              tags_id: "33",
            },
          },
        ],
      },
    ],
  }),
};
</script>

<style></style>
