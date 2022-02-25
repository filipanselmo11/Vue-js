<template>
  <div>
    <h1>Arrays</h1>
    <p>{{ itemList }}</p>
    <p>{{ itemList[0] }}</p>
    <p>{{ itemList[0].text }}</p>
    <p>{{ itemList[0].text === 'Arroz e Feijão' }}</p>

    <p v-for="(item, index) in itemList" :key="index">
      {{ item.text }}
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    itemList: [
      {
        text: "Arroz e Feijão",
        image1: [
          {
            images: [
              "https://c4.wallpaperflare.com/wallpaper/345/388/36/map-typography-colorful-world-wallpaper-preview.jpg",
              "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
              "https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
            ],
          },
        ],
      },

      {
        text: "Bife a cavalo",
        image2: [
          {
            images: [
              "https://c4.wallpaperflare.com/wallpaper/163/392/912/map-wold-map-technology-world-wallpaper-preview.jpg",
              "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
              "https://images.unsplash.com/photo-1638291792853-5ab967de3611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            ],
          },
        ],
      },

      {
        text: "Feijoada",
        image3: [
          {
            images: [
              "https://c4.wallpaperflare.com/wallpaper/551/801/266/map-world-map-wallpaper-preview.jpg",
              "https://images.unsplash.com/photo-1594492691731-3d7974140624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
              "https://images.unsplash.com/photo-1584974292709-5c2f0619971b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            ],
          },
        ],
      },

      {
        text: "Lasanha",
        image4: [
          {
            images: [
              "https://c4.wallpaperflare.com/wallpaper/729/301/106/free-world-map-wallpaper-preview.jpg",
              "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
              "https://images.unsplash.com/photo-1614107151491-6876eecbff89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            ],
          },
        ],
      },
    ],
  }),
};
</script>

<style></style>
