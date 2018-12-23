<template>
	<div v-if="loggedIn">
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

export default {
	data() {
		return {
			loggedIn: true 
		}
	},

	components: {
		'sidebar': Sidebar,
		'sidebar-logged': SidebarLogged,
		'panel': Panel,
		'panel-logged': PanelLogged,
		'topbar-logged': TopbarLogged
	}
}

</script>
