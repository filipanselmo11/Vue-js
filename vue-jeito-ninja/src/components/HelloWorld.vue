<template>
  <div>
    <h1>{{ titulo }}</h1>
    {{ nome }}
    <nav-bar>
      <menubar></menubar>
    </nav-bar>
    
    <!-- {{ fullName }} -->
    <!-- <ul>
      <li v-for="(index, usuario) in usuarios" :key="index">
        {{ usuario.nome | toUpperCase() }}
      </li>
    </ul> -->
    <!-- <form action="https://google.com">
      <button @click.prevent.stop="enviar">Enviar</button>
    </form> -->
    <!-- <button :class="btnLimpar" :style="btnStyleLimpar">LIMPar</button>
    <button :class="btnEnviar">ENVIAR</button> -->
    <!-- <img :src="imagem" :alt="alt" />
    <p :class="classHtml">texto</p> -->
    <!-- <label for="nome">Nome</label>
    <input type="text" v-model="nome" />
    <br />
    <label for="">Telefone</label>
    <input type="text" v-model="telefone" />
    <br />
    <label for="">Deseja receber nossas novidades</label>
    <input type="radio" value="Sim" v-model="novidades" /> Sim
    <input type="radio" value="Não" v-model="novidades" /> Não
    <br />
    <label for="">Interesses</label>
    <input type="checkbox" value="Futebol" v-model="interesses" /> Futebol <br />
    <input type="checkbox" value="Formula 1" v-model="interesses" /> Formula 1 <br />
    <br />

    <label for="">Como nos conheceu ?</label>
    <select v-model="conheceu">
      <option value="">Escolha</option>
      <option value="Google">Google</option>
      <option value="TV">TV</option>
      <option value="Revista">Revista</option>
    </select>
    <br />

    <button>ENVIAR</button>

    <hr />

    Nome: {{ nome }} <br />
    Telefone: {{ telefone }} <br />
    Novidades: {{ novidades }} <br />
    Interesses: {{ interesses }} <br />
    Como nos conheceu ? {{ conheceu }} <br /> -->
    <!-- <div v-if="usuario.id == 1">
      Id: {{ usuario.id }} Nome: {{ usuario.nome }}<br />
      Profissao: {{ usuario.profissao }} <br />
    </div>
    <div v-else>
      Nenhum usuario com o id = 1
    </div> -->
    <!-- <ul>
      <li v-for="(index, item) in linguagens" :key="index">
        {{ index }} -
        {{ item.nome }}
      </li>
    </ul> -->
  </div>
</template>

<script>
import MenuBar from "./MenuBar.vue";
import NavBar from './NavBar.vue';
export default {
  name: "HelloWorld",
  components: { MenuBar, NavBar },
  // beforeCreate() {
  //   console.log("beforeCreate");
  //   console.log("Título ", this.titulo);
  //   console.log("EL ", this.$el);
  // },
  // created() {
  //   console.log("created");
  //   console.log("Título ", this.titulo);
  //   console.log("EL ", this.$el);
  // },
  // beforeMount() {
  //   console.log("beforeMount");
  //   console.log("Título ", this.titulo);
  //   console.log("EL ", this.$el);
  // },
  // mounted() {
  //   console.log("mounted");
  //   console.log("Título ", this.titulo);
  //   console.log("EL ", this.$el);
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  // updated() {
  //   console.log("updated");
  // },
  data: () => ({
    titulo: "Vue Js do Jeito Ninja",
    //texto: false, //texto: true
    usuario: {
      id: 1,
      nome: "Yoshimitsu",
      profissao: "Dev",
    },
    linguagens: [
      { nome: "Javascript" },
      { nome: "PHP" },
      { nome: "C#" },
      { nome: "JavaZao" },
      { nome: "Python" },
    ],
    firstName: "",
    lastName: "",
    // fullName: "",
    telefone: "",
    novidades: "",
    interesses: [],
    conheceu: "",
    imagem:
      "https://c4.wallpaperflare.com/wallpaper/371/29/254/superhero-dc-comics-red-hood-yellow-background-wallpaper-preview.jpg",
    alt: "Red Hood",
    classHtml: "green",
    btnLimpar: {
      "btn-danger": true,
      "btn-sm": false,
    },
    btnEnviar: ["btn-primary", { "btn-lg": true }],
    btnStyleLimpar: [
      { "font-size": "50px" },
      { "font-weight": "bold" },
      { "text-transform": "lowercase" },
    ],
    usuarios: [
      { nome: "Jon Snow" },
      { nome: "Fílip Anselmo" },
      { nome: "Ronin Yoshimitsu" },
    ],
  }),
  filters: {
    toUpperCase(str) {
      return str.toUpperCase();
    },
    truncate(str) {
      return str.substring(0, 10);
    },
  },
  methods: {
    enviar() {
      alert("Enviado");
    },
    updateUser() {
      console.log("Usuário Atualizado");
    },
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
  watch: {
    firstName(value) {
      if (value) {
        this.updateUser();
      }
    },
    // firstName(newValue){
    //   this.fullName = newValue + ' ' +  this.lastName;
    // },
    // lasrtName(newValue){
    //   this.fullName = this.firstName + ' ' + newValue;
    // }
  },
};
</script>

<style scoped>
.red {
  color: red;
}

.green {
  color: green;
}
</style>
