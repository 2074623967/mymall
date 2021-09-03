<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @tabClick="tabClick" />
    <scroll class="content" ref="scroll">
      <detail-swaper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <good-list :goods="recommmends" ref="recommmends" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import DetailSwaper from './childComps/DetailSwaper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import DetailParamInfo from './childComps/DetailParamInfo';
import DetailCommentInfo from './childComps/DetailCommentInfo';

import Scroll from 'components/common/scroll/Scroll';
import GoodList from 'components/content/goods/GoodsList';

import { itemListenerMixin } from 'common/mixin';
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from 'network/detail';
export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwaper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
    GoodList
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommmends: [],
      themeTopYs: []
    };
  },
  destroyed() {
    this.$bus.$off('itemImageLoad', this.itemImgListener);
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
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
      //6.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 7.请求推荐数据
    getRecommend().then(res => {
      this.recommmends = res.data.list;
    });
    //
    this.$nextTick(() => {
      //根据最新的数据,对应的dom元素已经渲染完毕，但是图片没有加载完毕
      //获取参数、评论、详情、推荐的offsettop
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommmends.$el.offsetTop);
    });
  },
  mounted() {},
  methods: {
    imageLoad() {
      this.refresh();
    },
    tabClick(index) {
      this.$refs.scroll.scrollTop(0, this.themeTopYs[index], 0);
    }
  },
  mounted() {}
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
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
