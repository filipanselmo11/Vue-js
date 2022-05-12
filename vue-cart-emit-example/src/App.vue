<template>
  <div id="app">
    <section class="Header">
      <h1>Fruiticious</h1>

      <!---Cart Component-->
      <shop-cart
        :cart="this.cart"
        :total="this.total"
        @empty-cart="emptyCart"
      ></shop-cart>
    </section>

    <!----Item component-->
    <shop-item
      v-for="item in this.items"
      :item="item"
      :key="item.id"
      @update-cart="updateCart"
    ></shop-item>
  </div>
</template>

<script>
import ShopCart from "./components/Shop-Cart.vue";
import ShopItem from "./components/Shop-Item.vue";
export default {
  components: { ShopCart, ShopItem },
  name: "App",
  data: () => ({
    items: [
      {
        id: 205,
        name: "Banana",
        price: 1,
      },
      {
        id: 148,
        name: "Orange",
        price: 2,
      },
      {
        id: 248,
        name: "Apple",
        price: 1,
      },
    ],
    cart: [],
    total: 0,
  }),
  computed: {
    shoppingCartTotal() {
      return this.cart
        .map((item) => item.price)
        .reduce((total, amount) => total + amount);
    },
  },
  methods: {
    updateCart(e) {
      this.cart.push(e);
      this.total = this.shoppingCartTotal;
    },
    emptyCart() {
      this.cart = [];
      this.total = 0;
    },
  },
};
</script>

<style scoped>
</style>
