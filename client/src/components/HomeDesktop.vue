<template>
	<div v-if="false">
		<panel-logged />
		<sidebar-logged />
		<topbar-logged />
	</div>
	
  <div class="row" v-else>
		<sidebar />
		<panel />
	</div>
</template>

<script>
import Sidebar from './HomeDesktopSidebar.vue';
import SidebarLogged from './HomeDesktopSidebar-logged.vue';
import Panel from './HomeDesktopPanel.vue';
import PanelLogged from './HomeDesktopPanel-logged.vue';
import TopbarLogged from './HomeDesktopPanelTopbar-logged.vue';
import axios from 'axios'

export default {
		data () {
			return {
				token: []
			}
	},

	components: {
		'sidebar': Sidebar,
		'sidebar-logged': SidebarLogged,
		'panel': Panel,
		'panel-logged': PanelLogged,
		'topbar-logged': TopbarLogged
	},

	mounted() {
		axios.post('http://localhost:8081/auth/login').then(res => {
			this.token = res.data
		})
	}
}

</script>
