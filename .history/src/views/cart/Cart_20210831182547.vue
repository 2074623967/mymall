<template>
  <div class="cart">
    <cart-nav-bar/>
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
