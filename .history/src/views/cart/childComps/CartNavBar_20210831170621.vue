<template>
  <div class="cart-nav-bar">
         <nav-bar class="nav-bar">
      <div slot="center">
        购物车
        </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
   name:'CartNavBar',
    components: {
    NavBar
  },
  methods: {
    backClick(){
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.back img{
   margin-top: 10px;
}
.nav-bar{
  background-color: var(--color-tint);
}
</style>