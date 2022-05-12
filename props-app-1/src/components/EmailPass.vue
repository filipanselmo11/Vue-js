<template>
  <div>
    <form>
      <div class="form-group">
        <label for="exampleInputNome1">Nome</label>
        <input
          v-model="localNome"
          type="text"
          class="form-control"
          id="exampleInputNome1"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputIdade1">Idade</label>
        <input
          v-model="localIdade"
          type="number"
          class="form-control"
          id="exampleIdade1"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email Address</label>
        <input
          v-model="localEmail"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
          <input
            v-model="localPassword"
            type="password"
            class="form-control"
            id="exampleInputPassowrd1"
          />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EmailPass",
  props: {
    nome: {
      type: String,
      default: "",
    },
    idade: {
      type: Number,
      default: 0,
    },
    email: {
      type: String,
      default: "",
    },

    password: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    localNome: "",
    localIdade: "",
    localEmail: "",
    localPassword: "",
  }),

  created() {
    this.localNome = this.nome;
    this.localIdade = this.idade;
    this.localEmail = this.email;
    this.localPassword = this.password;
  },

  watch: {
    localNome(value) {
      if (value) {
        this.$emit("updateNome", value);
      }
    },
    localIdade(value) {
      if (value) this.$emit("updateIdade", value);
    },
    localEmail(value) {
      if (value) {
        this.$emit("updateEmail", value);
      }
    },
    localPassword(value) {
      if (value) {
        this.$emit("updatePassword", value);
      }
    },
  },

  methods:{
    //   addToArray(formParams){
    //       const { nome, idade, email } = formParams;
    //       this.$emit()
    //   }
  },
};
</script>

<style></style>
