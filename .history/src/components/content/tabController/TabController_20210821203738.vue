<template>
  <div class="tab-control">
  <div v-for="(item,index) in titles" :key="index" class="tab-control-item">
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
  }
}
</script>
<style scoped>
.tab-control-item{
  display: flex;
}
</style>