<template>
  <div class="cart-list">
   
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   name:'CartList',
    computed: {
    // ...mapGetters(['cartLength','cartList'])
    //key可以进行改变
    ...mapGetters({
      cartList:'cartList'
    })
  },
}
</script>

<style>

</style>