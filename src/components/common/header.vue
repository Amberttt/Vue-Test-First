<template>
  <el-row class="header" type="flex">
    <!-- <el-col :span="6">
      <div class="logo"></div>
    </el-col>
    <el-col :span="6">
      <div class="null"></div> -->
      <hr>
      <h1>Header</h1>
      <p>{{msgFather}}</p>

      <!-- 添加input标签，添加keypress事件 -->
      给子组件传递的参数：<input v-model="inputValue" @keypress.enter="enter" @input="enter">
      
      <hr>
    <!-- </el-col>
    <el-col :span="6">
      <div class="search-box">
        <el-input placeholder="请输入关键字" v-model="keyword">
          <el-button slot="append" icon="search" >搜索</el-button>
        </el-input>
      </div>
    </el-col>
    <el-col :span="6">
      <el-row class="option">
        <el-col :span="8">
          <router-link to="/home" class="home">首页</router-link>
        </el-col>
        <el-col :span="8">
          <router-link to="/self" class="self" :style="{color: color}">我的</router-link>
        </el-col>
        <el-col :span="8">
          <el-dropdown>
          <span class="el-dropdown-link">
            {{username}}
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a" v-if="drugName !== 'null'">{{drugName}}</el-dropdown-item>
              <el-dropdown-item command="b">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col> -->
  </el-row>
</template>

<script type="text/ecmascript-6">

export default{
  // 添加data,用户输入绑定到inputValue变量，从而获取用户输入
  data () {
    return {
      color: '#fff',
      username: '王',
      keyword: 'keyword',
      drugName: '子',
      inputValue: ''
    }
  },
  props: ['msgFather'],
  methods: {
    enter () {
      this.$emit('valueUp', this.inputValue)
      // 子组件发射自定义事件valueUp, 并携带要传递给父组件的值，
      // 如果要传递给父组件很多值，这些值要作为参数依次列出
      // 如 this.$emit('valueUp', this.inputValue, this.mesFather)
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  // .header
  //   width: 100%
  //   height: 137px
  //   background: #252732
  //   padding: 49px 56px 0 49px
  //   .logo
  //     width: 189px
  //     height: 24px
  //     background: url(logo_whith.png) no-repeat center center / 189px 24px
  //   .search-box
  //     .el-input__inner, .el-input-group__append, .el-input-group__prepend
  //       border: none
  //   .home, .self, .el-dropdown-link
  //     line-height: 33px
  //     font-size: 16px
  //     color: #FFFFFF
  //   .el-dropdown-link, .self, .home
  //     display: block
  //     width: 100%
  //     text-align: center
  //     cursor: pointer
  //   .el-dropdown
  //     width: 100%
</style>
