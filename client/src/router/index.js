import Vue from 'vue'
import Router from 'vue-router'
import Samples from '@/components/Samples.vue'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
			component: Home
    },

    {
      path: '/samples',
      name: 'Samples',
			component: Samples
    }
  ]
})