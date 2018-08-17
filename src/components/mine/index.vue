<template>
  <div class="mine">
    <!-- 全局组件 -->
    <!-- <my-component></my-component> -->
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
      msg: 'Welcome to Mine.vue'
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