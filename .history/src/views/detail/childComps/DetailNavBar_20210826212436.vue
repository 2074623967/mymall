<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
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
    },
    backClick(){
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 14px;
}
.titie-item {
  flex: 1;
  
}
.back img{
   margin-top: 10px;
}
</style

