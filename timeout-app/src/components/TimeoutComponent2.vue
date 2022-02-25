<template>
  <div>
    <input
      type="button"
      name="sayHello"
      value="Wait for my Hello"
      onclick=""
    />
  </div>
</template>

<script>
export default {
  name: "TimeoutComponent2",
  data: () => ({
    message: undefined,
    person: undefined,
  }),

  methods: {
    sayHello() {
      alert(this.message + ', ' + this.person);
    },

    playHello(){
      setTimeout(this.sayHello("Hi", "Monica"), 1000);
    }

  }
};
</script>

<style></style>
