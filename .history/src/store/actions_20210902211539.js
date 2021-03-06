import { ADD_COUNTER, ADD_TO_CART } from './mutation-type';
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldCartItem = context.state.cartList.find(
        item => item.iid === payload.iid
      );
      if (oldCartItem) {
        context.commit(ADD_COUNTER, oldCartItem);
        resolve('当前的商品数量+1')
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload);
      }
    });
  }
};
