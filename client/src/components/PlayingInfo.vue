<template>
	<div class="playing-info row">
		<div class="creator-logo"></div>
		<div class="podcast-info">
			<div class="podcast-info__author">Author's name</div><br>
			<div class="podcast-info__title">Title of the currently playing podcast</div><br>
			<div class="podcast-info__description">It is a long established fact that a reader will be distracted by the readable content of a page distracted by the readable content...</div>

			<font-awesome-icon
				:icon="['fas', 'chevron-down']"
				class="icon alt drop-down"
			/>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.playing-info { max-height: 100px; }
.creator-logo {
	width: 80px;
	height: 80px;
	background-image: url('../assets/creatorsAvatar.jpg');
	background-size: cover;
	border-radius: 2px;
	border: 2px solid $main;
	margin: 10px 10px 0 0;

	&:hover {
		cursor: pointer;
		// blur, zoom or smth
	}
}

.podcast-info {
	max-width: 400px;
	height: 90px;
	margin-top: 10px;
	font-size: 14px;
	font-weight: 300;

	&__title {
		margin: -10px 0;
		font-weight: 500;
	}
}

.drop-down {
	font-size: 20px;
	color: $main;
	float: right;
	margin-top: -80px;

	&:hover {
		color: $lighter-main;
		cursor: pointer;
	}
}

</style>
