<template>
	<div class="player">
		<div class="row player__btns">

			<font-awesome-icon :icon="['fas', 'chevron-left']" class="icon alt"/>

			<font-awesome-icon
				:icon="['fas', 'pause']"
				class="icon alt"
				v-on:click="isActive = true"
				v-bind:class="{ hidden: isActive}"
			/>

			<font-awesome-icon
				:icon="['fas', 'play']"
				class="icon alt"
				v-on:click="isActive = false"
				v-bind:class="{ hidden: !isActive}"
			/>

			<font-awesome-icon :icon="['fas', 'chevron-right']" class="icon alt"/>
		</div>
		
		<div class="time-sets">
			<q-slider
				:min="0"
				:max="100"
				class="time-sets__timeline"
				value=0
			/>
			<div class="time-sets__counter">
				99:59:59
			</div>
		</div>

		<div class="row player__options">

			<font-awesome-icon :icon="['fas', volumeIcon]" class="icon icon__options player__options-volume alt"/>

			<font-awesome-icon :icon="['fas', 'tachometer-alt']" class="icon icon__options player__options-mult alt"/>

			<font-awesome-icon
				:icon="[prefab, 'bookmark']"
				v-on:click="addToBookmarks()"
				class="icon icon__options player__options-bookmarks alt"
			/>

			<q-slider
				:min="0"
				:max="100"
				:value="volume"
				@change="val => { volume = val }"
				class="player__options-sliderVol"
			/>

			<q-slider
				:min="0.5"
				:max="2"
				@change="value => { speedMul = value }"
				step="0.25"
				class="player__options-sliderMul"
				:value="speedMul"
				snap
				label
				markers
				color="red"
			/>
		</div>
	</div>
</template>

<script>

import { QSlider } from "quasar-framework/dist/quasar.mat.esm";

export default {
	data() {
		return {
			prefab: 'far',
			isActive: false,
			volume: 100,
			speedMul: 1,
			volumeIcon: 'volume-up'
		}
	},

  components: {
    QSlider,
	},

	methods: {
		addToBookmarks() {
			// if added
			if (this.prefab === 'fas'){
				this.prefab = 'far';
				// get title, ID or URL of podcast
				// post to users db
			}
			// if removed
			else{
				this.prefab = 'fas';
				// get title, ID or URL of podcast
				// find in db and remove
			}
		}
	},
	mounted() {
		this.volume = localStorage.getItem('player-volume')
		this.speedMul = localStorage.getItem('player-speed-multiplier')
	},
	
	updated() {
		if(this.volume === 0)
			this.volumeIcon = 'volume-mute'

		else
			this.volumeIcon = 'volume-up'

		localStorage.setItem('player-volume', this.volume)
		localStorage.setItem('player-speed-multiplier', this.speedMul)
	}
};
</script>

<style lang="scss" scoped>
	
@import '@/stylesheets/master.scss';

.player {
	max-height: 80px;
	text-align: center;

	&__btns { margin-left: calc(50% - 100px); }
	&__options {
		width: 330px;
		display: inline-block;

		&-volume {
			float: left;
			&:hover {
				~.player__options-sliderVol {
					opacity: 1;
					@include transition(0s, opacity .3s);
				}
			}
		}
		&-sliderVol {
			opacity: 0;
			@include transition(.5s, opacity .5s);
			&:hover { opacity: 1; }

			width: 110px;
			color: $main;
			margin: -25px 0 0 20px;
		}

		&-sliderMul {
			opacity: 0;
			@include transition(.5s, opacity .5s);
			&:hover { opacity: 1; }

			width: 120px;
			color: $main;
			margin: -28px 0 0 185px;
		}

		&-mult {
			&:hover {
				~.player__options-sliderMul {
					opacity: 1;
					@include transition(0s, opacity .3s);
				}
			}
		}

		&-bookmarks { float: right; }
	}
}
.time-sets {
	width: 350px;

	&__timeline { color: $main; }

	&__counter {
		float: right;
		font-size: 12px;
		font-weight: 400;
		margin: -35px 7px 0 0;
	}
}

.icon {
	font-size: 20px;
	margin: 12px 0 0 40px;
	color: $main;

	&:hover {
		cursor: pointer;
		color: $lighter-main;
	}

	&__options {
		font-size: 15px;
		margin: 0;
	}
}
</style>
