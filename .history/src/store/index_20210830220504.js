import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import actions from './actions'
//1.使用vuex
Vue.use(Vuex);
//2.创建store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations,
  actions
  });
//3.挂在到vue里面
export default store;
