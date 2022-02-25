<template>
  <div>
    <p>Meu Array</p>
    <!--<p v-for="(item, index) in myArr" :key="index">
      {{ item.name }} 
    </p>-->
    <img
      v-for="(item, indice) in myArr"
      :key="indice"
      :src="myArr[indice].nestedArr[indice]"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    myArr: [
      {
        name: "Imagem-1",
        nestedArr: [
          "https://images.unsplash.com/photo-1641115948629-6ff88111fbeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        ],
      },
      {
        name: "Imagem-2",
        nestedArr: [
          "https://images.unsplash.com/photo-1645361865347-c8dd4e82eaaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1645334710996-0d59a16768e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        ],
      },
      {
        name: "Imagem-3",
        nestedArr: [
          "https://images.unsplash.com/photo-1585524744161-cb859c6c511c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1645164242219-f76abef97244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        ],
      },
    ],
  }),
};
</script>

<style></style>
