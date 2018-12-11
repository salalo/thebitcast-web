import Vue from 'vue'
import App from './App'
import router from './router'
import Quasar from "quasar-framework/dist/quasar.mat.esm"

import "quasar-framework/dist/umd/quasar.mat.css"
import "quasar-extras/material-icons/material-icons.css"
import "quasar-extras/roboto-font"
import "quasar-extras/animate"

Vue.use(Quasar);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
