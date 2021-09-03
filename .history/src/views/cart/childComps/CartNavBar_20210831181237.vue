<template>
  <div class="cart-nav-bar">
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车({{cartLength}})
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import {mapGettters} from 'vuex'
export default {
  name: 'CartNavBar',
  components: {
    NavBar
  },
  computed:{
   ...mapGettters
  },
  methods: {
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.back img {
  margin-top: 10px;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
  font-weight: 700;
}
</style>
