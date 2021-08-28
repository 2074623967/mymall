<template>
  <swiper>
    <swiper-item v-for="(item, index) in topImages" 
    :key="index"
    class="swaper-item">
      <a :href="item.link">
        <img :src="item" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';

export default {
  name: 'DetailSwaper',
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    //   imageLoad() {
    //     if (!this.isLoad) {
    //       this.$emit('swiperImageLoad');
    //       this.isLoad = true;
    //     }
    //  }
  }
};
</script>

<style scoped>
.swaper-item{
  height: 300px;
  overflow: hidden;
}
</style>
