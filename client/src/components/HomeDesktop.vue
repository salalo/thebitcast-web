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
import axios from 'axios';
import VueCookies from 'vue-cookies';

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

	mounted() {
		// { localStorage.setItem('token', res.data) }
		axios.post('http://localhost:8081/auth')
			.then(res => console.log(res.data))
			.catch(err => console.log(err))
		// let token = document.getElementById('info_arc').innerHTML.value;
		// localStorage.setItem('token', token);
	}
}

</script>
