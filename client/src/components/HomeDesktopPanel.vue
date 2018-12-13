<template>
	<div class="container">
		<topbar/>
	</div>
</template>

<script>

import Topbar from './HomeDesktopPanelTopbar.vue';

export default {
	components: {
		'topbar': Topbar
	}
}
</script>

<style lang="scss" scoped>
// minus width of Sidebar
.container { width: calc(100vw - 640px);}

</style>
