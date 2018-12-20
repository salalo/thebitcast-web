<template>
	<div class="container">
		<topbar/>
		<div class="recommended">
			<span>Recommended</span>

			<div class="rocommended__horizontal">
				<card></card>
			</div>

		</div>
	</div>
</template>

<script>

import Topbar from './HomeDesktopPanelTopbar.vue';
import Card from './Card.vue';

export default {
	components: {
		'topbar': Topbar,
		'card': Card
	}
}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

// minus width of Sidebar
.container { width: calc(100vw - 640px); }

.recommended {
	width: 100%;
	height: 50%;
	padding: 30px;
	display: flex;
  justify-content: center;
	flex-direction: column;

	span{
		font-size: 20px;
		margin: -50px 0 30px 0;
	}

	&__horizontal {
 		overflow-x: scroll;
  	overflow-y: hidden;
  	white-space: nowrap;

		width: 100%;
		height: 100%;
	}
}

</style>