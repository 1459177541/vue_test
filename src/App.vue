<template>
  <div>
    <Head/>
    <full-page ref="fullpage" :options="options" id = "fullpage">
      <Index class="section"/>
      <Start class="section"/>
    </full-page>
  </div>
</template>

<script>
import Head from './components/Head'
import Index from './components/Index'
import Start from './components/Start'

export default {
  name: 'app',
  components: {
    Head, Index, Start
  },
  data(){
    return {
      options:{
        autoScrolling:true,
        scrollHorizontally:true,
	      sectionsColor:['#41b883', '#ff5f45'],
        // menu:"#page_menu",
        // anchors:['firstPage','secondPage'],
        lazyLoad:true
      }
    }
  }
}
</script>

<style>
</style>
