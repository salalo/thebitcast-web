<template>
	<article
		class="card--expanded row"
		v-if="isActive"
		v-on:click="expandCard()"
		v-bind:class="{ expanded: !isActive }"
	>
		<aside class="card--expanded__left">

			<p class="card--expanded__left-title">
				Placeholder for title of currently expanded card.
			</p>

			<span class="card--expanded__left-creator">James Smith</span>

			<footer class="card--expanded__left-details">
				<span>99:59:59</span>
				<span>31.12.19</span>
				<span>999K play</span>
			</footer>

			<i class="material-icons">play_circle_filled</i>
		</aside>

		<aside class="card--expanded__right">
			
			<p class="card--expanded__right-description">
				Joseph James Rogan is an American stand-up comedian, mixed martial arts color commentator, podcast host, businessman and former television host and actor. Rogan began a career in comedy in August 1988 in the Boston area.
			</p>

			<section class="card--expanded__right-buttons">
				<i class="material-icons icon">bookmark_outline</i>
				<i class="material-icons icon">share</i>
				<i class="material-icons icon">thumb_up</i>
				<i class="material-icons icon">thumb_down</i>
			</section>
		</aside>
	</article>

	<article class="card" v-else>
		<header class="card__avatar">
			<img src="../assets/crAvatar.jpg" alt="avatar">
			<i
				class="material-icons card__avatar-play-btn"
				v-on:click="playThePodcast()"
			>play_circle_filled</i>
		</header>
		<footer class="card__info" v-on:click="expandCard()">

			<div class="card__info-title">
				Placeholder for title of currently expanded card.
			</div>
			
			<span class="card__info-creator">James Smith</span>

		</footer>
	</article>
</template>

<script>

export default {

	data() {
		return {
			bookmarksPrefab: 'far',
			thumbsUpPrefab: 'far',
			thumbsDownPrefab: 'far',
			isActive: false
		}
	},

	methods: {
		expandCard() {
			if (!this.isActive)
				this.isActive = true;
			else
				this.isActive = false;
		},

		addToBookmarks() {
			if (this.bookmarksPrefab === 'fas')
				this.bookmarksPrefab = 'far';

			else
				this.bookmarksPrefab = 'fas';
		},

		likePodcast() {
			if (this.thumbsUpPrefab === 'fas')
				this.thumbsUpPrefab = 'far';

			else {
				this.thumbsUpPrefab = 'fas';
				// undislike on like
				this.thumbsDownPrefab = 'far';
			}
		},

		dislikePodcast() {
			if (this.thumbsDownPrefab === 'fas')
				this.thumbsDownPrefab = 'far';

			else {
				this.thumbsDownPrefab = 'fas';
				// unlike on dislike click
				this.thumbsUpPrefab = 'far';
			}
		}
	}
}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.card--expanded {
	height: 240px;
	width: 436px;
	z-index: 100;
	position: relative;
	background-color: #fff;
	box-shadow: 1px 10px 20px rgba(0, 0, 0, .3);

	&__left {
		width: 200px;
		height: 100%;
		font-size: 13px;
		float: left;
		color: $white;
		background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url('../assets/crAvatar.jpg') center no-repeat;
		background-size: cover;
		box-shadow: 0 0 10px rgba(0, 0, 0, .3);


		&-title {
			font-size: 15px;
			font-weight: 400;
			padding: 15px;
		}

		&-creator {
			color: $main;
			padding:  0 15px;
			font-size: 15px;
		}

		&-details {
			float: right;
			position: relative;
			bottom: -75px;
			right: 15px;
			font-weight: 300;

			span {
				float: right;
				clear: right;
				margin-bottom: 3px;
			}
		}
	}

	&__right {
		width: 236px;
		height: 100%;
		float: right;
		color: $grey;

		&-description {
			padding: 15px;
			font-size: 13px;
		}

		&-buttons {
			color: $main;
			font-size: 20px;
			text-align: center;
			padding: 15px;
			&:hover { cursor: pointer; }
			.icon { margin: 20px 13px 0 13px; }
		}
	}
}

.card {
	width: 200px;
	height: 240px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, .3);

	&__avatar {
		width: 100%;
		height: 150px;
		background-color: #000;

		&:hover {
			img { -webkit-filter: blur(2px); filter: blur(2px) opacity(.7); }
			.card__avatar-play-btn { opacity: 1; }
		}

		img {
			@include transition(0s, filter .4s ease);
			object-fit: cover;
			object-position: center;
			height: 150px;
			width: 100%;
		}
		&-play-btn {
			&:hover {
				cursor: pointer;
				color: $lighter-main;
			}

			opacity: 0;
			@include transition(0s, opacity .3s ease-in);

			color: $main;
			position: absolute;
			top: calc(150px * .5 - 27px);
			left: calc(50% - 27px);
			font-size: 55px;
		}
		&-details {
			opacity: 0;
			@include transition(.2s, opacity .3s ease-in);

			position: absolute;
			top: 135px;
			left: 5px;
			font-size: 12px;
			font-weight: 500;

			color: white;
			mix-blend-mode: difference;

			:first-child { float: left; }
			:nth-child(2) { margin: 0 20px; }
			:last-child { float: right; }
		}
	}
	&__info {
		width: 100%;
		height: 90px;
		background-color: #fff;
		font-size: 14px;

		&:hover { cursor: pointer; }
		&-title { font-weight: 500; padding: 10px; }
		&-creator { padding: 10px; }
	}
}

</style>
