<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
   <tab-controller :titles="titles" class="tab-control"/>
   <ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
   </ul>
  </div>
</template>

<script>
  //导入子组件
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
   //导入公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import TabController from 'components/content/tabController/TabController'
  //导入网络请求
  import {getHomeMultidata} from "network/home"

  export default {
    name: "Home",
    components: {
      //子组件注册
      HomeSwiper,
      RecommendView,
      FeatureView,
      //公共组件注册
      NavBar,
      TabController
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles:['流行','精选','新款']
      }
    },
    created() {
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
#home{
  padding-top: 44px;
}
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9,
  }
  .tab-control{
    position: sticky;
    top: 100px;
  }
</style>
