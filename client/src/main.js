import Vue from "vue"
import VeeValidate from "vee-validate"
import App from "./App"
import router from "./router"
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from "./store/store.js"

Vue.use(Vuetify)
Vue.use(VeeValidate)
Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
