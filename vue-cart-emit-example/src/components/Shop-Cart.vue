<template>
  <div class="Cart">
    <p>Cart: {{this.cart.length}} items</p>
    <!----Button Component-->
    <shop-button-empty @emit-empty-cart="emitEmptyCart">
        <p>Empty Cart</p>
    </shop-button-empty>
    <p>Total: ${{this.total}}</p>
  </div>
</template>

<script>
import ShopButtonEmpty from './Shop-Button-Empty.vue'
export default {
  components: { ShopButtonEmpty },
  name: 'Shop-Cart',
  props: ['cart', 'total'],
  data:() => ({}),
  methods:{
      emitEmptyCart(){
          this.$emit('empty-cart')
      }
  },

}
</script>

<style>

</style>