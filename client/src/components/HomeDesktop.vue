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
import Sidebar from './unlogged/HomeDesktopSidebar.vue'
import SidebarLogged from './logged/HomeDesktopSidebar.vue'
import Panel from './unlogged/HomeDesktopPanel.vue'
import PanelLogged from './logged/HomeDesktopPanel.vue'
import TopbarLogged from './logged/HomeDesktopPanelTopbar.vue'
import Topbar from './unlogged/HomeDesktopPanelTopbar.vue'
import axios from 'axios'
import VueCookies from 'vue-cookies'

export default {

	data () {
		return {
			isLogged: null
		}
	},

	beforeCreate() {
		//Check user is logged and get its parameters
		axios.defaults.withCredentials = true

		axios.get('http://localhost:8081/auth/getUser')
			.then(res => {
				if (res.data != 'NotLogged')
				{
					this.isLogged = true
				}
				else {
					this.isLogged = false
					VueCookies.remove('SESS')
				}

				console.log(this.isLogged)
			})
			.catch(err => console.log( err))
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
