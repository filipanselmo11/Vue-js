<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    meuArray: ["Naruto", "Sasuke", "Tobi"],
    meuArray1: [1, 2, 3],
    meuArray2: ["02:30", "10:30", "11:43"],
    meuArray3: [0.1, 2.5, 3.4],
    novoArray: new Map([
      ["foo", "bar"],
      ["baz", 12],
    ]),
  }),

  mounted() {
    //this.arrays();
    this.arrays2();
  },

  methods: {
    arrays() {
      const array = JSON.stringify(Object.assign({}, this.meuArray));
      console.log(array);
      const array1 = JSON.stringify(Object.assign({}, this.meuArray1));
      console.log(array1);
      const array2 = JSON.stringify(Object.assign({}, this.meuArray2));
      console.log(array2);
      const array3 = JSON.stringify(Object.assign({}, this.meuArray3));
      console.log(array3);

    },
    arrays2() {
      //const obj = Object.fromEntries(this.novoArray);
      //console.log(obj);
      const array3 = JSON.stringify(this.meuArray3);
      console.log("Valores do Array3: ",array3.valueOf());
      //console.log(array3);
      //const arr3 = Object.entries(array3).map((arr) => {
        //console.log(arr);
      //})
      //console.log(arr3);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
