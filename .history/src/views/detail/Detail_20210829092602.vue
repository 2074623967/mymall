<template>
  <div id="detail">
    <detail-nav-bar
     class="detail-nav" 
     @tabClick="tabClick"/>
    <scroll class="content" ref="scroll">
      <detail-swaper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" />
      <detail-comment-info :comment-info="commentInfo"/>
       <good-list :goods="recommmends" />
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
import DetailCommentInfo from './childComps/DetailCommentInfo'

import Scroll from 'components/common/scroll/Scroll';
import GoodList from 'components/content/goods/GoodsList';

import { getDetail,getRecommend, Goods, Shop, GoodsParam } from 'network/detail';
import { debounce } from 'common/utils';
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
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailImgListener:null,
      detailInfo: {},
      paramInfo: {},
      commentInfo:{},
      recommmends:[]
    };
  },
   activated() {
    this.$refs.scroll.scrollTop(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //1.保存y值
    this.saveY = this.$refs.scroll.getScrollY();
    //2.取消全局事件监听
    this.$bus.$off('itemImageLoad',this.detailImgListener)
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
      if(data.rate.cRate!==0){
        this.commentInfo=data.rate.list[0]
      }
    });
     // 3.请求推荐数据
     getRecommend().then(res=>{
       this.recommmends=res.data.list
     })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    tabClick(index){
       switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
           case 3:
          this.currentType = 'sell';
          break;
      }
    }
  },
  mounted() {
    // 1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    //对监听的事件进行保存
    this.detailImgListener=() => {
      refresh();
    }
    this.$bus.$on('itemImageLoad',this.detailImgListener);
  },
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
