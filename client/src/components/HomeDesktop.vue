<template>
	<div v-if="GetToken() != null">
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
import VueCookies from 'vue-cookies';
// import { Notify } from "quasar-framework/dist/quasar.mat.esm";

export default {
	components: {
		'sidebar': Sidebar,
		'sidebar-logged': SidebarLogged,
		'panel': Panel,
		'panel-logged': PanelLogged,
		'topbar-logged': TopbarLogged
	},
	methods:{
		GetToken:function()
		{
			return VueCookies.get("token");
		}
	},

	data() {
		return {
			logged: false
		}
	},

	mounted(){
		// Notify.create({
		//   message: 'Danger, Will Robinson! Danger!'
		// })

		// góra, lub dokładniej -> dół
/*
		this.$q.notify({
			// required param
			message: `A text with your nofification's awesome message`,

			// optional params
			position: 'bottom',
			type: 'negative', // 'positive', 'negative', 'warning', 'info'
			timeout: 3000,
			icon: 'wifi',
			// textColor: 'black', // if default 'white' doesn't fit
		})
		*/
	}
}

</script>
