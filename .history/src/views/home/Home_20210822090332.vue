<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-controller :titles="titles" class="tab-control" />
    <good-list :goods="goods['pop'].list" />
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
//导入网络请求
import { getHomeMultidata, getHomeGoods } from 'network/home';

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
    GoodList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '精选', '新款'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    //2/请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
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
      });
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
