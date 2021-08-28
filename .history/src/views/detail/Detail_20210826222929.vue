<template>
  <div id="detail">
   <detail-nav-bar/>
    <detail-swaper :top-images="topImages" />
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import DetailSwaper from './childComps/DetailSwaper';

import { getDetail } from 'network/detail';
export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwaper
  },
  data() {
    return {
      iid: null,
      topImages: []
    };
  },
  created() {
    //拿到商品id
    this.iid = this.$route.params.iid;
    //调用加载数据的方法
    getDetail(this.iid).then(res => {
      //获取顶部的轮播图数据
      this.topImages = res.result.itemInfo.topImages
      console.log(res.result.itemInfo.topImages)
    });
  }
};
</script>

<style scoped></style>>
