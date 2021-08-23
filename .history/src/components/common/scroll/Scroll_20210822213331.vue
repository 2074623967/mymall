<template>
  <div class="wrapper" ref="wrapper">
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
    //1.创建Bscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3
      // pullUpLoad: true
    });
    //2.监听滚动的位置
    this.scroll.on('scroll', position => {
      console.log(position);
    });
  },

  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style scoped></style>
