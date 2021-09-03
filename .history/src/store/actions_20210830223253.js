import {ADD_COUNTER,ADD_TO_CART} from './mutation-type'
export default {
addCart(context, payload) {
  let oldCartItem =context.state.cartList.find(item => item.iid===payload.iid)
  if (oldCartItem) {
    context.commit(ADD_COUNTER,oldCartItem);
  } else {
    payload.count=1
    context.commit(ADD_TO_CART,payload);
  }
}
}