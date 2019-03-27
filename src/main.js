import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'

import router from './router.js'

import App from './App'

Vue.use(VueFullPage)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
