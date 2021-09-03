import Toast from './Toast'
const obj = {}

obj.install=function(Vue) {
  Vue.prototype.$toast=Toast
}
export default obj