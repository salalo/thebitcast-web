<template>
	<div class="container">
		<player></player>
	</div>
</template>

<script>

import Player from './Player.vue'

export default {
	components: {
		'player': Player
	}
}
</script>

<style lang="scss" scoped>
	
@import '@/stylesheets/master.scss';

.container {
	background-color: #fff;
	height: 120px;
	box-shadow: 0 0 10px #000;
}
</style>
