<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <!-- 全局组件 -->
    <my-component></my-component>

    <!-- <child my-message="my-message"></child> -->

    <!-- 二级路由？ -->
    <home-child msg-father="父组件Home.vue传来的数据To HomeChild.vue" @valueUp="recieveFromChild"></home-child>
    
    <h1>子组件HomeChild.vue传过来的数据：</h1>
    <h1>{{dataFromChild}}</h1>
    <!-- 测试 computed -->
    <h1>子组件HomeChild.vue数据反转：</h1>
    <h1>{{reverseData}}</h1>
    
    <h1 @mousedown.middle="consoleWords">滑鼠Middle事件</h1>
    <hr>
    <!-- 基本用法 -->
    <ul>
      <!-- <li v-for="item in items" :key="item"> -->
      <li v-for="item in items">
        {{item.message}}
      </li>
    </ul>
    <hr>
    <!-- template v-for用法 -->
    <ul>
      <template v-for="(item, index) in items">
        <!-- <l :key="item.id">{{index}}-{{item.message}}-{{item.id}}-{{parentMsg}}</li>
        <li :key="item.id">{{item.message}}</li> -->
        <li>{{index}}-{{item.message}}-{{item.id}}-{{parentMsg}}</li>
        <li>{{item.message}}</li>
      </template>
    </ul>
    <hr>
    <!-- 对象迭代 v-for -->
    <ul>
      <!-- <li v-for="(value,key,index) in object" :key="key">{{index}}:{{key}}:{{value}}</li> -->
      <li v-for="(value,key,index) in object">{{index}}:{{key}}:{{value}}</li>
    </ul>
    <!-- 整数迭代 -->
    <ul>
      <!-- <li v-for="n in 10" :key="n">{{n}}</li> -->
      <li v-for="n in 10">{{n}}</li>
    </ul>
    <hr>
    <!-- 过滤 显示被2整除 -->
    <ul>
      <li v-for="n in evenNumbers">{{n}}</li>
    </ul>
    <hr>
    <!-- 在计算属性不适用的情况下 (例如，在嵌套 v-for 循环中) 你可以使用一个 method 方法： -->
    <!-- 过滤 显示不被2整除 -->
    <ul>
      <li v-for="n in even(numbers)">{{n}}</li>
    </ul>
    <hr>
    <!-- To Do List Demo -->
    <div id="todo-list-example">
      <input
        v-model="newTodoText"
        v-on:keyup.enter="addNewTodo"
        placeholder="Add a todo"
      >
      <ul>
        <li
          is="todo-item"
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todos.splice(index, 1)"
        ></li>
      </ul>
    </div>

    <hr>
    <br>
  </div>
</template>

<script>

import HomeChild from './homeChild'
import Vue from 'vue'

Vue.component('todo-item', {
  // template的值已经被我修改
  template: '<li>{{ title }}<button v-on:click="$emit(\'remove\')">X</button></li>',
  props: ['title']
})

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Home.vue',
      dataFromChild: '',
      parentMsg: 'Parent',
      items: [
        {
          message: 'Foo',
          id: 'A'
        },
        {
          message: 'Bar',
          id: 'B'
        },
        {
          message: 'Msg',
          id: 'C'
        }
      ],
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      // to do list demo
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  components: {
    HomeChild
  },
  methods: {
    recieveFromChild (msg) {
      this.dataFromChild = msg
    },
    addNewTodo: function () {
      if (this.newTodoText.trim() !== '') {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    },
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 !== 0
      })
    },
    consoleWords: function () {
      console.log('按到鼠标键了')
    }
  },
  watch: {
    // 监听dataFromChild变化
    dataFromChild (newValue, oldValue) {
      console.log(newValue)
      console.log(oldValue)
    }
  },
  computed: {
    reverseData: {
      get: function () {
        return this.dataFromChild.split('').reverse().join('')
      },
      set: function (value) {
        // 报错
        // return this.dataFromChild = value
        // 不报错，dataFromChild值改变
        this.dataFromChild = value
        return this.dataFromChild
        // 如果此函数只return value;则dataFromChild值不改变。
      }
    },
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        // 显示被2整除
        return number % 2 === 0
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>

