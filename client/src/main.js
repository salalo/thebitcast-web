import Vue from 'vue'
import App from './App'
import router from './router'
import Quasar from "quasar-framework/dist/quasar.mat.esm"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBars,
  faPause,
  faPlay,
  faChevronLeft,
  faChevronRight,
  faBookmark
} from "@fortawesome/free-solid-svg-icons";

import {
  faBookmark as faBookmarkO
} from "@fortawesome/free-regular-svg-icons";

import {
  faTwitter,
  faFacebookF,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBars,
  faTwitter,
  faFacebookF,
  faGoogle,
  faPause,
  faPlay,
  faChevronLeft,
  faChevronRight,
  faBookmark,
  faBookmarkO
);

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
