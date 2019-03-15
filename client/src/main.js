import Vue from "vue"
import VeeValidate from "vee-validate"
import App from "./App"
import router from "./router"
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueCookies from "vue-cookies"
import { store } from "./store/store.js"

Vue.use(Vuetify)
Vue.use(VeeValidate)
Vue.use(VueCookies)
Vue.config.productionTip = false

VueCookies.config("7d");

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
