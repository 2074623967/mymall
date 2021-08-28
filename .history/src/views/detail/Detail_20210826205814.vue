<template>
  <div id="detail">
    <nav-bar>
      <div slot="center">
        详情页
      </div>
    </nav-bar>
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
