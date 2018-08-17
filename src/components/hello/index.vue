<template>
  <div class="hello">
    <header>
      <!-- msg-father,给子组件传递参数msgFather -->
      <!-- 添加自定义事件valueUp -->
      <v-header msg-father="Argument from father,to child" @valueUp="recieveFromChild"></v-header>
      <!-- p元素，用于展示子组件传递过来的数据 -->
      <p>子组件传递过来的参数：{{msgFromChild}}</p>
    </header>

    <my-component></my-component>

    <!-- 全局组件？ -->
    <child my-message="Hello My Message"></child>

    <h1>Message is {{message}}</h1>
    <input v-model="message" type="text" placeholder="Input">

    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/Home">To Home</router-link></li>
      <li><button  @click="toHome">To Home</button></li>
      <li><router-link to="/Mine">To Mine</router-link></li>
      <li><button  @click="toMine">To Mine</button></li>
    </ul>
    <footer>
      <v-footer>

      </v-footer>
    </footer>
  </div>
</template>

<script type="text/emacscript-6">

import Vue from 'vue'
import vHeader from '../common/header'
import vFooter from '../common/footer'

// 注册全局组件？
Vue.component('child',{
  props: ['myMessage'],
  template: '<span>{{myMessage}}</span>'
})

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'Hello',
      msgFromChild: ''
    }
  },
  components: {
    vHeader,
    vFooter
  },
  // components: {
  //   // <my-component> 将只在父模板可用
  //   'v-header': Child
  // },
  methods: {
    toHome() {
      // console.log(this);
      // console.log(this.$router);
      this.$router.push({path: '/Home'});
    },
    toMine() {
      this.$router.push({path: '/Mine'});
    },
    recieveFromChild(msg) {
      // 添加methods，自定义事件valueUp的事件处理函数recieveFromChild
      // recieveFromChild 事件需要设置参数，这些参数就是子组件传递过来的数据，
      // 因此，参数的个数，也要和子元素传递过来的一致。
      this.msgFromChild = msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
