<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar v-show="show"/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar';

export default {
  name: 'app',
  components: {
    MainTabBar
  },
  data(){
    return{
      show:true
    }
  },
  watch: {
    $route(to, from) {
      if(to.path === "/detail/:iid"){
        this.show = false;
      }else{
        this.show = true;
      }
    }
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
