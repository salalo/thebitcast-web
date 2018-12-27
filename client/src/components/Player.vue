<template>
	<div class="player">
		<div class="row player__btns">
			<font-awesome-icon :icon="['fas', 'chevron-left']" class="icon alt"/>

			<font-awesome-icon
				:icon="['fas', 'pause']"
				class="icon alt"
				v-on:click="isActive = true"
				v-bind:class="{ undisplayed: isActive}"
			/>
			<font-awesome-icon
				:icon="['fas', 'play']"
				class="icon alt"
				v-on:click="isActive = false"
				v-bind:class="{ undisplayed: !isActive}"
			/>

			<font-awesome-icon :icon="['fas', 'chevron-right']" class="icon alt"/>

			<font-awesome-icon
				:icon="[prefab, 'bookmark']"
				v-on:click="addToBookmarks()"
				class="icon alt bookmark"
			/>
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

.player { max-height: 100px; }
.time-sets {
	width: 350px;
	margin-left: 30px;

	&__timeline { color: $main; }

	&__counter {
		float: right;
		font-size: 12px;
		font-weight: 400;
		margin: -8px 8px 0 0;
	}
}

.icon {
	font-size: 22px;
	margin: 30px 0 0 40px;
	color: $main;

	&:hover {
		cursor: pointer;
		color: $lighter-main;
	}
}

.player__btns { margin-left: 100px; }
.bookmark { margin: 11px 0 0 90px; }
.undisplayed { display: none; }

</style>
