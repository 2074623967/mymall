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
import NavBar from 'components/common/navbar/NavBar';
export default {
  name: 'Detail',
  components: {
    NavBar
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
