<template>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
   name:'CartNavBar',
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
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>

}
</script>

<style>

</style>