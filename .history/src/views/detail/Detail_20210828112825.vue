<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="content" ref="scroll">
      <detail-swaper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
    </scroll>
  </div>
</template>

<script>
//引用子组件
import DetailNavBar from './childComps/DetailNavBar';
import DetailSwaper from './childComps/DetailSwaper';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailBaseInfo from './childComps/DetailBaseInfo';
//引入公共组件
import Scroll from 'components/common/scroll/Scroll';
//引入网络请求模块
import { getDetail, Goods, Shop, GoodsParam } from 'network/detail';
export default {
  name: 'Detail',
  components: {
    //注册子组件
    DetailNavBar,
    DetailSwaper,
    DetailShopInfo,
    DetailBaseInfo,
    //注册公共组件
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    };
  },
  created() {
    //拿到商品id
    this.iid = this.$route.params.iid;
    //调用加载数据的方法
    getDetail(this.iid).then(res => {
      // 1.获取顶部的图片轮播数据
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
  
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
}
</style>
