<template>
  <div>
    <hr>
    <split></split>
    <div class="footer">
      Copyright&copy;Naxions  {{year}}
      <div class="logo">

      </div>
    </div>
    <hr>
  </div>
</template>
<script type="text/ecmascript-6">

import split from './split'

export default{
  data () {
    return {
      year: new Date().getFullYear()
    }
  },
  components: {
    split
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
//   .footer
//     width: 100%
//     height: 100px
//     background: #fff
//     text-align: center
//     line-height: 100px
//     font-size: 24px
//     color: #252732
//     position:relative
//     .logo
//       width: 354px
//       height: 100px
//       position: absolute
//       right: 10px
//       bottom: 0
//       background: url(logo_colour.png) no-repeat center center / 354px 100px
</style>
