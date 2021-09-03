export default {
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