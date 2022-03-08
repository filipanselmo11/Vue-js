<template>
  <div>
    <button @click="show = !show">Alterna Renderização</button>
    <transition name="slide-fade">
      <p v-if="show">Olá</p>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true,
  }),
};
</script>

<style scoped>
/* Animações de entrada e saída podem utilizar diferentes  */
/* funções de duração e de tempo.                          */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
