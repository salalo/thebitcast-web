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
      bookmarksPrefab: 'far',
			thumbsUpPrefab: 'far',
			thumbsDownPrefab: 'far',
      isActive: false
		}
	},

	methods: {
		expandCard() {

			// let expandedCard = document.getElementsByClassName('expanded')[0];

			// console.log(event.target);
			this.isActive = true;

			// if (this.isActive)
			// 	this.$store.state.cardExpanded = true;

			// else
			// 	this.$store.state.cardExpanded = false;

			// console.log(this.$store.state.cardExpanded);

			// window.onclick = e => {
			// 	if(e.target == expandedCard)
			// 		expandedCard.style.display = "none";
			// }
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

      else
        this.thumbsUpPrefab = 'fas';
    },

    dislikePodcast() {
      if (this.thumbsDownPrefab === 'fas')
        this.thumbsDownPrefab = 'far';

      else
        this.thumbsDownPrefab = 'fas';
    }
	}
}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

// .undisplayed { display: none; }

.card--expanded {
	position: relative;
	height: 500px;
  background-color: #fff;
	width: 350px;
	border-radius: 2px;
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
    &-description {
      margin: 20px 0;
    }
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
      font-size: 26px;
      text-align: center;
      &:hover { cursor: pointer; }
      .icon { margin: 20px 20px 0 20px; }
    }
  }
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
