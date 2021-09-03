import Toast from './Toast'
const obj = {}

obj.install=function(Vue) {
  Vue.extend(Toast)
  // document.body.appendChild(Toast.$el)
  Vue.prototype.$toast=Toast
}
export default obj