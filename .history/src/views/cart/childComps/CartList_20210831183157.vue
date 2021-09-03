<template>
  <div class="cart-list">
    列表
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
      cartLength:'cartLength',
      cartList:'cartList'
    })
  },
}
</script>

<style>

</style>