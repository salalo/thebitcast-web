<template>
	<div
		class="card--expanded"
		v-if="isActive"
		v-on:click="expandCard()"
		v-bind:class="{ expanded: isActive }"
	>
		<div class="card--expanded__header">
			Joe Rogan
		</div>
		<div class="card--expanded__info">

			<div class="card--expanded__info-title">
				Killing few ppl with my super abilities, just look at me, cmon.
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
        <font-awesome-icon
					:icon="[bookmarksPrefab, 'bookmark']"
					v-on:click="addToBookmarks()"
					class="icon alt"
				/> 
        <font-awesome-icon :icon="['fas', 'share']" class="icon alt"/>

        <font-awesome-icon
          :icon="[thumbsUpPrefab, 'thumbs-up']"
          v-on:click="likePodcast()"
          class="icon alt"
        />
        <font-awesome-icon
          :icon="[thumbsDownPrefab, 'thumbs-down']"
          v-on:click="dislikePodcast()"
          class="icon alt fa-flip-horizontal"
        />
			</div>
		</div>
	</div>

	<div class="card" v-else>
		<div class="card__avatar">
			<img src="../assets/crAvatar.jpg" alt="avatar">
			<font-awesome-icon
				:icon="['fas', 'play']"
				v-on:click="playThePodcast()"
				class="icon alt card__avatar-play-btn"
			/>
		</div>
		<div class="card__info" v-on:click="expandCard()">

			<div class="card__info-title">
				Killing few ppl with my super abilities, just look...
			</div>
			
			<div class="card__info-creator">Joe Rogan</div>

		</div>
	</div>
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
			this.isActive = true;
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
	height: 500px;
  background-color: #fff;
	width: 350px;
	box-shadow: 1px 10px 20px rgba(0, 0, 0, .3);

	&__header {
    width: 100%;
    height: 150px;
    color: $white;
    font-size: 30px;
    font-weight: 600;
    text-indent: 10px;
    background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('../assets/creatorsAvatar.jpg');
    background-position: center top;
    background-size: cover;
    line-height: 150px;
  }
  &__info {
    color: rgba(0, 0, 0, .95);
    padding: 10px;
    font-size: 14px;

    &-title {
      font-size: 15px;
      font-weight: 500;
      width: 90%;
    }
    &-description { margin: 20px 0; }
    &-details {
      border-top: 1px solid $lighter-grey;
      border-bottom: 1px solid $lighter-grey;
      font-weight: 500;
      padding: 2px;

      :first-child { float: left; }
      :nth-child(2) { margin-left: 70px; }
      :last-child { float: right; }
    }
    &-buttons {
      color: $main;
      font-size: 22px;
      text-align: center;
      &:hover { cursor: pointer; }
      .icon { margin: 25px 20px 0 20px; }
    }
  }
}

.card {
	// margin-left: 150px;
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
			top: calc(150px * .5 - 15px);
			left: calc(50% - 15px);
			font-size: 30px;
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
