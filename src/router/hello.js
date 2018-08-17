// export default [
//     {
//         path: '/hello',
//         name: 'Hello',
//         component: resolve => require(['../components/Hello'], resolve)
//     }
// ]
export default [
  {
    path: '/',
    name: 'Hello',
    // redirect: '/hello',
    component: resolve => require(['../components/hello'], resolve)
  }
]
