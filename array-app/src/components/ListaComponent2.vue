<template>
  <div>
    <h1>Olá</h1>
    <p>{{ arr[0] }}</p>
    <p>{{ arr[0][1] }}</p>
    <p>{{ arr[1] }}</p>
    <p>{{ arr[1][0] }}</p>
    <!--<p>{{ arr[0][2] }}</p>
    <p>{{ arr[2][0] }}</p>-->

    

    <h1>Olá 2</h1>
    <p>{{ Arr }}</p>
    <p>{{ Arr[0] }}</p>
    <p>{{ Arr[1] }}</p>
    <p>{{ Arr[2] }}</p>
    <p>{{ Arr[0].Artista }}</p>
    <p>{{ Arr[0].Album }}</p>
    <p>{{ Arr[0].Músicas }}</p>
    <p>{{ Arr[0].Músicas[0] }}</p>
    <p>{{ Arr[0].Músicas[1] }}</p>
    <p>{{ Arr[0].Músicas[2] }}</p>
    <p>{{ Arr[1].Artista }}</p>
    <p>{{ Arr[1].Album }}</p>
    <p>{{ Arr[1].Músicas }}</p>
    <p>{{ Arr[1].Músicas[0] }}</p>
    <p>{{ Arr[1].Músicas[1] }}</p>
    <p>{{ Arr[1].Músicas[2] }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    arr: [
      [1, 2],
      [3, 4],
    ],

    Arr: [
      {
        Artista: "KoRn",
        Album: "Follow The Leader",
        Músicas: ["Freak On the Leash", "Got The Life", "All In The Family"],
      },
      {
        Artista: "Slipknot",
        Album: "Vol 3: The Subliminal Verses",
        Músicas: ["Before I Forget", "Duality", "Vermilion pt 1"],
      },
    ],
  }),
};
</script>

<style></style>
