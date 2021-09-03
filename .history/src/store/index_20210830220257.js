import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
//1.使用vuex
Vue.use(Vuex);
//2.创建store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations,
  actions: {
    addCart(context, payload) {
      let oldCartItem = null;
      for (let item of context.store.cartList) {
        if (payload.iid === item.iid) {
          oldCartItem = item;
        }
      }
      if (oldCartItem) {
        context.commit('addCounter',oldCartItem);
      } else {
        context.commit('addToCart',payload);
      }
    }
  }
});
//3.挂在到vue里面
export default store;
