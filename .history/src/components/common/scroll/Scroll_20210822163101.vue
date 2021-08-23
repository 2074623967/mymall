<template>
  <div class="wrapper" ref="aaaa">
    <div class="content">
      <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'Scroll',
  components: {},
  created() {},
  data() {
    return {
      scroll: null
    };
  },
  // 组件创建完后调用
  mounted() {
    this.scroll = new BScroll(this.$refs.aaaa, {
      // probeType: 3,
      // pullUpLoad: true
    });

    this.scroll.on('scroll', position => {
      console.log(position);
    });

    this.scroll.on('pullingUp', () => {
      console.log('上啦加载更多');
    });
  },

  methods: {
    btnClick() {
      console.log('btnClick');
    },
    divClick() {
      console.log('divClick');
    }
  }
};
</script>

<style scoped>
.wrapper {
  height: 100px;
  background-color: red;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>
