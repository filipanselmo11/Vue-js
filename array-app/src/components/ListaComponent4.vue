<template>
    <div>
        <h1>Button Content</h1>
        <p>
            {{ buttonContent }}
        </p>
        <p>{{ buttonContent[0] }}</p>
        <p>{{ buttonContent[0].text }}</p>
        <p>{{ buttonContent[0].image1 }}</p>
        <p>{{ buttonContent[0].image1[0].image }}</p>
    </div>
</template>

<script>
export default {
  data: () => ({
    buttonSelected: 0,
    buttonContent: [
      {
        text: "Botao-1",
        image1: [
          {
            text: "Imagem-1",
            image:
              "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg",
          },
          {
            text: "Imagem-2",
            image:
              "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg",
          },
          {
            text: "Imagem-3",
            image:
              "https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg",
          },
          {
            text: "Imagem-4",
            image:
              "https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg",
          },
        ],
      },
      {
        text: "Botao-2",
        image2: [
          {
            image:
              "https://c4.wallpaperflare.com/wallpaper/133/969/139/artwork-nature-landscape-fantasy-art-wallpaper-thumb.jpg",
          },
          {
            image:
              "https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-thumb.jpg",
          },
          {
            image:
              "https://c4.wallpaperflare.com/wallpaper/767/612/930/nature-landscape-trees-digital-art-wallpaper-thumb.jpg",
          },
          {
            image:
              "https://c4.wallpaperflare.com/wallpaper/214/442/543/digital-art-son-goku-dragon-ball-dragon-ball-z-island-hd-wallpaper-thumb.jpg",
          },
        ],
      },
      {
        text: "Botao-3",
        image3: [
          {
            image:
              "https://c4.wallpaperflare.com/wallpaper/914/746/419/abstract-digital-art-minimalism-simple-background-wallpaper-thumb.jpg",
          },
          {
            image:
              "https://c4.wallpaperflare.com/wallpaper/642/695/642/anime-demon-slayer-kimetsu-no-yaiba-giyuu-tomioka-hd-wallpaper-thumb.jpg",
          },
          {
            image:
              "https://c4.wallpaperflare.com/wallpaper/975/421/110/windows-10-black-4k-8k-wallpaper-thumb.jpg",
          },
          {
            image:
              "https://c4.wallpaperflare.com/wallpaper/116/412/889/naruto-anime-uchiha-itachi-hd-wallpaper-thumb.jpg",
          },
        ],
      },
    ],
  }),
};
</script>
