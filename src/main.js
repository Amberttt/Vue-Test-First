// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI)
// 路由跳转
// Vue.prototype.$goRoute = function (index) {
//   this.$router.push(index)
// }

// var Child = {
//   template: '<div>A custom component!</div>'
// }

// 注册全局
Vue.component('my-component', {
  template: '<div>Vue.component注册全局组件</div>'
})

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  // components: {
    // <my-component> 将只在父模板可用
    // 'my-element': Child
  // },
  // template: '<App/>',
  // components: { App },
  render: (createElement) => createElement(App)
}).$mount('#app')
