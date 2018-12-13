<template>
	<div class="row">
		<sidebar />
		<panel />
	</div>
</template>

<script>
import Sidebar from './HomeDesktopSidebar.vue';
import Panel from './HomeDesktopPanel.vue';

export default {
	components: {
		'sidebar': Sidebar,
		'panel': Panel
	}
}

</script>

<style lang="scss" scoped>

.row {
	height: 100vh;
	width: 100%;
}

</style>
