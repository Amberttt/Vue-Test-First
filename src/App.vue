<template>
  <div id="app">
    <!-- <header> --><!-- </header> -->
    
    <!-- 全局组件 -->
    <my-component></my-component>

    <!-- <img src="./assets/logo.png"> -->
    <router-view>
      
    </router-view>
    <!-- <keep-alive> -->
      <!-- <router-view v-if="$route.mate.keepAlive"></router-view> -->
    <!-- </keep-alive> -->
    <!-- <router-view v-if="$route.mate.keepAlive"></router-view> -->
    <!-- <ul id="example-1">
      <li v-for="item in items">
        {{item.message}}
      </li>
    </ul> -->
  </div>
</template>

<script>
// var example1 = new Vue({
//   el: '#example-1',
//   data: {
//     items: [
//       {message: 'Foo'},
//       {message: 'Bar'},
//       {message: 'Msg'}
//     ]
//   }
// })
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
