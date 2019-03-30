import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'

import router from './router.js'
import store from './store'

import App from './App'

Vue.use(VueFullPage)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
