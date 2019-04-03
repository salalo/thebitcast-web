import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import ProfileSettings from '@/components/logged/user_settings/Profile.vue'
import AccountSettings from '@/components/logged/user_settings/Account.vue'
import NotificationSettings from '@/components/logged/user_settings/Notifications.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
			component: Home,
      children: [
        { path: '/profile', component: ProfileSettings },
        { path: '/account', component: AccountSettings },
        { path: '/notifs', component: NotificationSettings }
      ]
    },

    {
      path: '/about-us',
			component: () => import('@/views/AboutUs.vue')
    },

    {
      path: '/contact',
      component: () => import('@/views/Contact.vue')
    },

    {
      path: '/copyright',
      component: () => import('@/views/Copyright.vue')
    },

    {
      path: '/privacy-policy',
      component: () => import('@/views/PrivacyPolicy.vue')
    },

    {
      path: '/feedback',
      component: () => import('@/views/Feedback.vue')
    },

    {
      path: '/support',
      component: () => import('@/views/Support.vue')
    },

    {
      path: '/report',
      component: () => import('@/views/Report.vue')
    },

    {
      path: '/premium',
      component: () => import('@/views/Premium.vue')
    }
  ]
})