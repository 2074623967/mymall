<template>
  <swiper>
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
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

<style scoped></style>
