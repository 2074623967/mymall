<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-controller
      :titles="titles"
      ref="tabControl1"
      @tabClick="tabClick"
      class="tab-control"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-controller :titles="titles" ref="tabControl" @tabClick="tabClick" />
      <good-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
//导入子组件
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';
//导入公共组件
import NavBar from 'components/common/navbar/NavBar';
import TabController from 'components/content/tabController/TabController';
import GoodList from 'components/content/goods/GoodsList';
import Scroll from 'components/common/scroll/Scroll';
import BackTop from 'components/content/backTop/BackTop';
//导入网络请求
import { getHomeMultidata, getHomeGoods } from 'network/home';
//导入js文件
import { debounce } from 'common/utils';
export default {
  name: 'Home',
  components: {
    //子组件注册
    HomeSwiper,
    RecommendView,
    FeatureView,
    //公共组件注册
    NavBar,
    TabController,
    GoodList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      currentType: 'pop',
      isShowBackTop: false,
      isTabFixed: false,
      taboffsetTop: 0,
      titles: ['流行', '精选', '新款'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    /**
     * 网络请求相关方法
     */
    // 1.请求多个数据
    this.getHomeMultidata();
    //2/请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    //1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    //3.监听图片加载完成
    this.$bus.$on('itemImageLoad', () => {
      refresh();
    });
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
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
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    //监听轮播图加载事件
    swiperImageLoad() {
      //2.获取tabcontroller的offsetTop
      this.taboffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    //3.回到顶部按钮事件
    backClick() {
      console.log('点击触发!');
      //1.判断backTop是否显示
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;
      //2.判断tabController是否显示
      this.isTabFixed = -position.y > this.taboffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    /**
     * 网络请求相关方法
     */
    // 1.请求多个数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //2/请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page + 1;

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* 浏览器原生滚动,为了不然导航跟着滚动
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.tab-control {
  position: relative;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .content {
  height: calc(100%-93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
