<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <TabBar />
  </div>
</template>

<script>
  import  TabBar from './components/TabBar/TabBar';
  export default {
    components: {
      TabBar
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>

<!--
1.stylus使用
2.安装依赖:
3.
-->
