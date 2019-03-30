<template>
  <div id="app">
    <Head/>
    <router-view />
  </div>
</template>

<script>
import Head from './index/Head'
export default {
  components:{
    Head
  }
}
</script>


<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>