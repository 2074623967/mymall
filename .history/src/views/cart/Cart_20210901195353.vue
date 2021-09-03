<template>
  <div class="cart">
    <!--导航栏-->
    <cart-nav-bar/>
      <!--商品列表-->
    <cart-list/>
    <!--底部汇总价格-->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import CartNavBar from './childComps/CartNavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CarBottomBar'
  export default {
    name: "Cart",
    components:{
      CartNavBar,
      CartList,
      CarBottomBar
    }
  }
</script>

<style scoped>
.cart{
  height: 100vh;
}
</style>
