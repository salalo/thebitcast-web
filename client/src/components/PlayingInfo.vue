<template>
	<div class="playing-info row">
		<div class="creator-logo"></div>
		<div class="podcast-info">
			<div class="podcast-info__author">Author's name</div>
			<div class="podcast-info__title">Title of the currently playing podcast</div>
			<div class="podcast-info__guests"></div>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.playing-info { max-height: 80px; }
.creator-logo {
  height: 60px;
  width: 60px;
  margin: 10px 10px 0 50px;
  border-radius: 100%;
  background-image: url('../assets/crAvatar.jpg');
  background-size: cover;
  border: 2px solid $main;
  @include transition(0s, border .15s ease);

  &:hover {
    cursor: pointer;
    border: 4px solid $main;
  }
}

.podcast-info {
	max-width: 400px;
	height: 80px;
	margin-top: 10px;
	font-size: 14px;
	font-weight: 300;

	&__title {
		font-weight: 500;
	}
}

@media (max-width: 1300px) {
	.podcast-info { display: none; }
}

</style>
