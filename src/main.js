import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueFullPage);
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
