<template>
  <div class="home-child">
      <h1>
        Home Child Component
      </h1>
      <h2>{{msgFather}}</h2>
      <!-- 传给父组件Home.vue数据 -->
      传给父组件Home.vue数据：
      <input type="text" v-model="inputValue" @keypress.enter="enter" @input="enter">
  </div>
</template>
<script type="javascript">
export default {
  name: 'HomeChild',
  data() {
    return {
        // componentName: 'HomeChild'
        inputValue: ''
    }
  },
  props: ['msgFather'],
  methods: {
      enter (msg) {
        this.$emit('valueUp', this.inputValue)
        // console.log(this.inputValue);
      }
  }
}
</script>
