import Vue from "vue"
import App from "./App"
import router from "./router"
import Vuetify from 'vuetify'
import 'babel-polyfill'
import 'vuetify/dist/vuetify.min.css'
import { store } from "./store/store.js"

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.config.transpileDependencies = [/node_modules[/\\\\]vuetify[/\\\\]/]

new Vue({
  router,
  store: store,
  
  render: h => h(App)
  
}).$mount('#app')
