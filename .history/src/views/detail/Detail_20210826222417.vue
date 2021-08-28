<template>
  <div id="detail">
   <detail-nav-bar/>
    <detail-swiper :topImages="topImages" />
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
      this.topImages = res.result.detailInfo.detailImage.list
      console.log(this.topImages)
    });
  }
};
</script>

<style scoped></style>>
