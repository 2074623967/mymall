<template>
  <div class="cart">
    <!--导航栏-->
    <cart-nav-bar/>
      <!--商品列表-->
    <cart-list/>
  </div>
</template>

<script>
import CartNavBar from './childComps/CartNavBar'
import CartList from './childComps/CartList'
  export default {
    name: "Cart",
    components:{
      CartNavBar,
      CartList
    }
  }
</script>

<style scoped>

</style>
