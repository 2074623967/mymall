<template>
  <div id="detail">
    <detail-nav-bar>
      详情页面
    </detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
export default {
  name: 'Detail',
  components: {
    DetailNavBar
  },
  data() {
    return {
      iid: null,
      titles:[]

    };
  },
  created() {
    this.iid = this.$route.params.iid;
  }
};
</script>

<style></style>
