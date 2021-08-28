<template>
  <div>
    <nav-bar>
      <div slot="left">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="titie-item"
          @click="itemClick(index)"
          :class="{ active: index === currentIndex }"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0 //记录当前哪个选项卡被选中
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
}
.titie-item {
  flex: 1;
  font-size: 14px;
}</style
>>
