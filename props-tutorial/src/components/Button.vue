<template>
  <div>
      <button>{{fullText}}</button>
  </div>
</template>

<script>
export default {
    props: {
        btnText: {
            type: String,
            default: () => "This is the default text"
        }
    },

    computed: {
        fullText() {
            return this.btnText + ' Full Text';
        }
    }
}
</script>

<style>
button {
    background-color: aquamarine;
    font-size: 60px;
    border-radius: 20px;
    padding: 10px;
    color: black;
}

</style>