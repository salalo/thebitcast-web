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

			<font-awesome-icon :icon="['fas', 'volume-up']" class="icon icon__options alt"/>

			<font-awesome-icon :icon="['fas', 'tachometer-alt']" class="icon icon__options alt"/>

			<font-awesome-icon
				:icon="[prefab, 'bookmark']"
				v-on:click="addToBookmarks()"
				class="icon icon__options alt"
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
			isActive: false
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

		:first-child { float: left; }
		:nth-child(3) { float: middle; }
		:last-child { float: right; }
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
