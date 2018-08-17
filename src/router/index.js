import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import component/xxx.vue
// import Hello from '@/components/hello/index'
// import Home from '@/components/home/index'
// import Mine from '@/components/mine/index'

// import router/xxx.js
import Hello from './hello'
import Home from './home'
import Mine from './mine'

export default new Router({
  routes: [
    ...Hello,
    ...Home,
    ...Mine
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/mine',
    //   name: 'Mine',
    //   component: Mine
    // }
  ]
})
