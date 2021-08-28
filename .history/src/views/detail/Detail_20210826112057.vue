<template>
  <h1>详情页面</h1>
</template>

<script>
export default {
   name:"Detail",
   data(){
     return{
       iid:null
     }
   },
   created(){
     this.iid=this.$router.params.iid
   }
}
</script>

<style>

</style>