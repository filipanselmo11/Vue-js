<template>
  <div>
    <nav>
      <button>
        <span></span>
      </button>
      <a href="#">Navbar</a>

      <div>
        <menu-bar :items="topNav" @emit-click="getLink"></menu-bar>
      </div>
    </nav>
  </div>
</template>

<script>
import MenuBar from "./MenuBar.vue";
export default {
  components: { MenuBar },
  data: () => ({
    topNav: [{ label: "Home" }, { label: "Link" }, { label: "Disabled" }],
  }),

  methods: {
    getLink(index) {
      alert(this.topNav[index].label);
    },
  },
};
</script>

<style></style>
