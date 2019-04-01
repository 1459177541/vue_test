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
</style>