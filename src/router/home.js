export default [
  {
    path: '/home',
    name: 'Home',
    component: resolve => require(['../components/home'], resolve),
    children: [
      {
        path: '/child',
        name: 'HomeChild',
        component: resolve => require(['../components/home/homeChild'], resolve)
      }
    ]
  }
]
