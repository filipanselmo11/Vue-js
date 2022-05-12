<template>
  <div class="Item">
    <div class="ItemDetails">
        <p><strong>{{item.name}}</strong></p>
        <p>Price: <strong>{{item.price}}</strong></p>
    </div>

    <!----Button Component-->
    <shop-button-add @button-clicked="addToCart(item)" :item="item">
        <p>Add To Cart</p>
    </shop-button-add>
  </div>
</template>

<script>
import ShopButtonAdd from './Shop-Button-Add.vue'
export default {
  components: { ShopButtonAdd },
  name: 'Shop-Item',
  props: ['item'],
  data:() => ({}),
  methods:{
      addToCart(item){
          this.$emit('update-cart', item);
      }
  },

}
</script>

<style>

</style>