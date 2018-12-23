<template>
	<div
		class="card--expanded"
		v-if="isActive"
		v-on:click="expandCard()"
		v-bind:class="{ expanded: isActive }"
	>
		<div class="card--expanded__header">
			<span>Joe Rogan</span>
		</div>
		<div class="card--expanded__info">

			<div class="card--expanded__info-title">
				Killing few ppl with my super abilities, just look...
			</div>

			<div class="card--expanded__info-description">
				Joseph James Rogan is an American stand-up comedian, mixed martial arts color commentator, podcast host, businessman and former television host and actor. Rogan began a career in comedy in August 1988 in the Boston area. Wikipedia
				Joseph James Rogan is an American stand-up comedian, mixed martial arts color commentator, podcast host, businessman and former television host and actor. Rogan began a career in comedy in August 1988 in the Boston area. Wikipedia
			</div>

			<div class="card--expanded__info-details">
				<span>999K play</span>
				<span>99:59:59</span>
				<span>31.12.19</span>
			</div>

			<div class="card--expanded__info-buttons">

			</div>
		</div>
	</div>

	<div class="card" v-else>
		<div class="card__img"></div>
		<div class="card__info" v-on:click="expandCard()">

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

export default {

	data() {
		return {
			isActive: false
		}
	},

	methods: {
		expandCard() {

			// let expandedCard = document.getElementsByClassName('expanded')[0];

			// console.log(event.target);
			this.isActive = !this.isActive;

			// if (this.isActive)
			// 	this.$store.state.cardExpanded = true;

			// else
			// 	this.$store.state.cardExpanded = false;

			// console.log(this.$store.state.cardExpanded);

			// window.onclick = e => {
			// 	if(e.target == expandedCard)
			// 		expandedCard.style.display = "none";
			// }
		}
	}
}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

// .undisplayed { display: none; }

.card--expanded {
	opacity: .5;
	position: relative;
	background-color: $main;
	height: 500px;
	width: 350px;
	border-radius: 2px;
	box-shadow: 1px 10px 20px rgba(0, 0, 0, .3);
}

.card {
	width: 200px;
	height: 250px;
	border-radius: 2px;
	box-shadow: 1px 10px 20px rgba(0, 0, 0, .3);

	&:hover { cursor: pointer; }

	&__img {
		background-image: url('../assets/creatorsAvatar.jpg');
		width: 100%;
		height: 150px;
		background-size: cover;
		border-radius: 2px 2px 0 0;
	}

	&__info {
		// 94% because of Panel Swiper
		width: 94%;
		height: 100px;
		background-color: #fff;
		font-size: 14px;
		padding: 6px;
		border-radius: 0 0 2px 2px;

		&-title { font-weight: 500; }
		&-creator { margin: 10px 0 25px 0; }
		&-details {
			font-size: 12px;
			font-weight: 500;

			:first-child { float: left; }
			:nth-child(2) { margin-left: 20px; }
			:last-child { float: right; }
		}
	}
}

</style>