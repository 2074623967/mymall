<template>
  <div class="cart">
    <scroll class="content">
      <li v-for="(item, index) in cartList" :key="index">
        {{ item }}
      </li>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Scroll from 'components/common/scroll/Scroll';
export default {
  name: 'CartList',
  components: {
    Scroll
  },
  computed: {
    // ...mapGetters(['cartLength','cartList'])
    //key可以进行改变
    ...mapGetters({
      cartList: 'cartList'
    })
  }
};
</script>

<style scoped>
.cart{
  height: 100vh;
}
.content {
  height: calc(100%-44px);
}
</style>
