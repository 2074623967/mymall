import {ADD_COUNTER,ADD_TO_CART} from './mutation-type'
export default {
  ADD_COUNTER(state,payload){
    payload.count++
  },
  ADD_TO_CART(state, payload){
    payload.count=1
    state.cartList.push(payload)
  }
}