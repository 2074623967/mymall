import Vue from 'vue'
import Vuex from 'vuex'
//1.使用vuex
Vue.use(Vuex)
//2.创建store对象
const store=new Vuex.Store({
  state:{
    cartList: []
  },
  mutations:{

  }
})
//3.挂在到vue里面
export default store