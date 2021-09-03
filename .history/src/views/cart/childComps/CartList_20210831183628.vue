<template>
  <div class="cart-list">
   <li v-for="(item,index) in cartList" :key="index">
     {{item}}
   </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Scroll from 'components/common/scroll/Scroll';
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