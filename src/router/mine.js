// export default[
//     {
//         path: '/mine',
//         name: 'Mine',
//         components: resolve => require(['../components/Mine'], resolve)
//     }
// ]
export default[
  {
    path: '/mine',
    name: 'Mine',
    component: resolve => require(['../components/mine'], resolve)
  }
]
