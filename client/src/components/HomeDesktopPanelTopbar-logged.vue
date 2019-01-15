<template>
	<div class="topbar-logged container row">
		<user-logged></user-logged>
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
import UserLogged from './User-logged.vue';
import Player from './Player.vue';
import PlayingInfo from './PlayingInfo.vue';

export default {
	components: {
		'user-logged': UserLogged,
		'player': Player,
		'playing-info': PlayingInfo
	}
}
</script>

<style lang="scss" scoped>
	
@import '@/stylesheets/master.scss';

.container {
	background-color: #fff;
	height: 80px;
	width: 100%;
	box-shadow: 0 0 10px rgba(0, 0, 0, .3);
	// to enable shadows
	position: relative;
	z-index: 99999;
}

// HAS TO BE CHANGED
.search-input {
	font-size: 15px;
	color: $grey;
	float: right;
	height: 50px;
	margin: 5px auto 0 auto;
}

// child components
.user-logged { margin: 10px 0 0 30px; }
.player { margin-left: 150px; }
.playing-info { margin-left: 160px; }


@media (max-width: 1710px) {
	.search-input { margin-left: 50px; }
	.playing-info { margin-left: 50px; }
	// .player { margin-left: 150px; }
}

@media (max-width: 1400px) {
	.player { margin-left: 50px; }
}

@media (max-width: 1100px) {
	.playing-info { display: none; }
}

@media (max-width: 768px) {
	.user-logged { display: none; }
	.search-input { display: none; }
	.player { margin: 0 auto; }
}

</style>
