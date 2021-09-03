import {ADD_COUNTER,ADD_TO_CART} from './mutation-type'
export default {
addCart(context, payload) {
  let oldCartItem = null;
  for (let item of context.store.cartList) {
    if (payload.iid === item.iid) {
      oldCartItem = item;
    }
  }
  if (oldCartItem) {
    context.commit(ADD_COUNTER,oldCartItem);
  } else {
    context.commit(ADD_TO_CART,payload);
  }
}
}