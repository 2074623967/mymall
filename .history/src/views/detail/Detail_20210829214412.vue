<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @tabClick="tabClick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
    >
      <detail-swaper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <good-list :goods="recommmends" ref="recommmends" />
    </scroll>
    <detail-bottom-bar />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
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
import DetailBottomBar from './childComps/DetailBottomBar';

import Scroll from 'components/common/scroll/Scroll';
import GoodList from 'components/content/goods/GoodsList';
import { itemListenerMixin, backTopMixin } from 'common/mixin';
import { debounce } from 'common/utils';
import { BACKTOP_DISTANCE } from 'common/const';
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
    DetailBottomBar,
    Scroll,
    GoodList
  },
  mixins: [itemListenerMixin, backTopMixin],
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
      themeTops: [],
      getThemeTopY: null,
      currentIndex: 0
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
    // 3.请求推荐数据
    getRecommend().then(res => {
      this.recommmends = res.data.list;
    });
    //4.给getThemeTopY进行赋值操作(themeTopYs进行防抖处理)
    this.getThemeTopY = debounce(() => {
      this.themeTops = [];
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.params.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommmends.$el.offsetTop);
    }, 100);
    //
    // this.$nextTick(() => {
    //   //根据最新的数据,对应的dom元素已经渲染完毕，但是图片没有加载完毕,目前获取的offsettop不包含图片内容
    //   //获取参数、评论、详情、推荐的offsettop

    // });
  },
  mounted() {},
  methods: {
    imageLoad() {
      this.refresh();
      this.getThemeTopY();
    },
    tabClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 100);
    },

    contentScroll(position) {
      console.log('66666666');
      let length = this.themeTops.length;
      for (let i = 0; i < length; i++) {
        let iPos = this.themeTops[i];
        /**
         * 判断的方案:
         *  方案一:
         *    条件: (i < (length-1) && currentPos >= iPos && currentPos < this.themeTops[i+1]) || (i === (length-1) && currentPos >= iPos),
         *    优点: 不需要引入其他的内容, 通过逻辑解决
         *    缺点: 判断条件过长, 并且不容易理解
         *  方案二:
         *    条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.
         *    优点: 简洁明了, 便于理解
         *    缺点: 需要引入一个较大的int数字
         * 疑惑: 在第一个判断中, 为什么不能直接判断(currentPos >= iPos)即可?
         * 解答: 比如在某一个currentPos大于第0个时, 就会break, 不会判断后面的i了.
         */
        if (position >= iPos && position < this.themeTops[i + 1]) {
          if (this.currentIndex !== i) {
            this.currentIndex = i;
            this.$$refs.nav.currentIndex = this.currentIndex;
          }
          break;
        }
      }
      this.listenShowBackTop(position);
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
