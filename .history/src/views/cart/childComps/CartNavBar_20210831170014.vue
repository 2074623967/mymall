<template>
  <div>
         <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
          <span>{{title}}</span>
        </div>
    </nav-bar>
  </div>
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
      title:'购物车'
    };
  },
  methods: {
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