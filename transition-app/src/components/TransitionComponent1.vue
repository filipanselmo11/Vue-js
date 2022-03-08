<template>
  <div>
    <button @click="show = !show">Alternar</button>
    <transition name="fade">
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

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

</style>
