import Vue from 'vue';
import Vuex from 'vuex';
//1.使用vuex
Vue.use(Vuex);
//2.创建store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {},
  actions: {
    addCart(context, payload) {
      let oldCartItem = null;
      for (let item of context.cartList) {
        if (payload.iid === item.iid) {
          oldCartItem = item;
        }
      }
      if (oldCartItem) {
        oldCartItem.count += 1;
      } else {
        payload.count = 1;
        context.cartList.push(payload);
      }
    }
  }
});
//3.挂在到vue里面
export default store;
