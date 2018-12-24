<template>
	<div class="topbar container row">
		<player></player>
		<playing-info></playing-info>

		<q-input
			value=""
			type="text"
			float-label="Search"
			color="red-6"
			class="search-input"
		/>

	</div>
</template>

<script>

import Player from './Player.vue';
import PlayingInfo from './PlayingInfo.vue';

export default {
	components: {
		'player': Player,
		'playing-info': PlayingInfo
	}
}
</script>

<style lang="scss" scoped>
	
@import '@/stylesheets/master.scss';

.container {
	background-color: #fff;
	height: 100px;
	box-shadow: 0 0 10px rgba(0, 0, 0, .3);
}

// HAS TO BE CHANGED
.search-input {
	font-size: 15px;
	color: $grey;
	float: right;
	height: 50px;
	margin: 15px 0 0 150px;
}

// child component
.playing-info { margin-left: 50px; }
</style>
