<template>
	<div v-if="isLogged">
		<panel-logged />
		<sidebar-logged />
		<topbar-logged />
	</div>

	<div v-else-if="isLogged == false">
		<sidebar />
		<panel />
		<topbar />
	</div>

	<div v-else>
		<!-- loading screen -->
	</div>
</template>

<script>
import axios from 'axios'
import Sidebar from './HomeDesktopSidebar.vue'
import SidebarLogged from './HomeDesktopSidebar-logged.vue'
import Panel from './HomeDesktopPanel.vue'
import PanelLogged from './HomeDesktopPanel-logged.vue'
import TopbarLogged from './HomeDesktopPanelTopbar-logged.vue'
import Topbar from './HomeDesktopPanelTopbar.vue'
import VueCookies from 'vue-cookies'

export default {

	data () {
		return{
			isLogged: null
		}
	},

	beforeCreate() {
		//Check user is logged and get his id
		// KURWWA
		axios.defaults.withCredentials = true

		axios.get('http://localhost:8081/auth/getId')
			.then(res => {
				console.log(res.data)
				if(res.data != 'NotLogged')
					this.isLogged = true
				else
				{
					this.isLogged = false
					VueCookies.remove('session')
				}
			})
			.catch(err => console.log(err))
	},
	components: {
		'sidebar': Sidebar,
		'sidebar-logged': SidebarLogged,
		'panel': Panel,
		'panel-logged': PanelLogged,
		'topbar-logged': TopbarLogged,
		'topbar': Topbar,
	}
}

</script>
