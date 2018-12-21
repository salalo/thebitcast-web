<template>
	<div class="card">
		<div class="card__img"></div>
		<div class="card__info">

			<div class="card__info-title">
				Killing few ppl with my super abilities, just look...
			</div>
			
			<div class="card__info-creator">Joe Rogan</div>

			<div class="card__info-details">
				<span>999K play</span>
				<span>99:59:59</span>
				<span>31.12.19</span>
			</div>

		</div>
	</div>
</template>

<script>

export default {}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.card {
	width: 200px;
	height: 250px;
	border-radius: 5px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, .3);
	// enables top shadow
	align-self: center;

	&:hover { cursor: pointer; }

	&__img {
		background-image: url('../assets/creatorsAvatar.jpg');
		width: 100%;
		height: 150px;
		background-size: cover;
		border-radius: 5px 5px 0 0;
	}

	&__info {
		// 94% because of Panel Swiper
		width: 94%;
		height: 100px;
		background-color: #fff;
		font-size: 14px;
		padding: 6px;
		border-radius: 0 0 5px 5px;

		&-title { font-weight: 500; }
		&-creator { margin: 5px 0 15px 0; }
		&-details {
			font-size: 12px;
			font-weight: 500;

			:first-child { float: left; }
			:nth-child(2){ margin-left: 15px; }
			:last-child { float: right; }
		}
	}
}

</style>