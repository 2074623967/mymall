<template>
  <div id="detail">
    <detail-nav-bar>
    </detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import {getDetail} from 'network/detail'
export default {
  name: 'Detail',
  components: {
    DetailNavBar
  },
  data() {
    return {
      iid: null
     

    };
  },
  created() {
    //拿到商品id
    this.iid = this.$route.params.iid;
    //调用加载数据的方法
  }
};
</script>

<style scoped>

</style>>
