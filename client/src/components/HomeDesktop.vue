<template>
	<div v-if="true">
		<panel-logged />
		<sidebar-logged />
		<topbar-logged />
	</div>

	<div class="row" v-else>
		<sidebar />
		<panel />
		<topbar />
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
