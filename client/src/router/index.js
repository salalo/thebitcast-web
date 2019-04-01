import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import AboutUs from '@/views/AboutUs.vue'
import Contact from '@/views/Contact.vue'
import Copyright from '@/views/Copyright.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import Feedback from '@/views/Feedback.vue'
import Support from '@/views/Support.vue'
import Report from '@/views/Report.vue'
import Premium from '@/views/Premium.vue'
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
			component: AboutUs
    },

    {
      path: '/contact',
      component: Contact
    },

    {
      path: '/copyright',
      component: Copyright
    },

    {
      path: '/privacy-policy',
      component: PrivacyPolicy
    },

    {
      path: '/feedback',
      component: Feedback
    },

    {
      path: '/support',
      component: Support
    },

    {
      path: '/report',
      component: Report
    },

    {
      path: '/premium',
      component: Premium
    }
  ]
})