<template>
  <div class="tab-control">
  <div v-for="(item,index) in titles" :key="index"
   class="tab-control-item" :class="{active:index===currentIndex}">
     <span>{{item}}</span>
  </div>
  </div>
</template>
<script>
export default {
  name:"TabController",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0//记录当前哪个选项卡被选中

    }
  }
}
</script>
<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item{
  flex: 1;
}
.active{
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint)
}
</style>