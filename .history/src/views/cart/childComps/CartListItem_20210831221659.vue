<template>
 <div id="shop-item">
    <div class="item-selector">
      <CheckButton @checkBtnClick="checkedChange" v-model="itemInfo.checked"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="itemInfo.imgURL" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述: {{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.newPrice}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
   name:"CartListItem",
   props:{
     product:{
       type:Object,
       default(){
         return {}
       }
     }
   }
}
</script>

<style scoped>

</style>