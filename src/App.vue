<template>
  <div>
    <Head/>
    <full-page ref="fullpage" :options="options" id = "fullpage">
      <Index class="section"/>
      <Start class="section"/>
    </full-page>
    <ul id="page_menu">
      <li data-menuanchor="page1" class="active"><a href="#page1">欢迎</a></li>
      <li data-menuanchor="page2"><a href="#page2">开始</a></li>
    </ul>
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
        menu:"#page_menu",
        anchors:['page1','page2'],
        lazyLoad:true
      }
    }
  }
}
</script>

<style scoped>
#page_menu{
  position: fixed;
  top: 300px;
  left: 50px;
  z-index: 70;
  background: rgba(255,255,255,0.7);
  border-radius: 10px;
}
#page_menu li{
  padding: 5px;
  margin: 5px;
  list-style: none;
}
#page_menu li:hover{
  border: green 1px solid;
  border-radius: 5px;
  padding: 4px;
}
#page_menu li a{
  font-size: 45px;
  color: #555;
  text-decoration: none;
}
</style>
