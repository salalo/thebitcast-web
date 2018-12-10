import Vue from 'vue'
import Router from 'vue-router'
import Quasar from "quasar-framework/dist/quasar.mat.esm";

import "quasar-framework/dist/umd/quasar.mat.css";
import "quasar-extras/material-icons/material-icons.css";
import "quasar-extras/roboto-font";
import "quasar-extras/animate";

Vue.use(Quasar);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
			// component: Asd
    }
  ]
})