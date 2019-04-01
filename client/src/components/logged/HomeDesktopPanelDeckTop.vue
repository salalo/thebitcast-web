<template>
	<div class="deck-container--outter">
		<div class="deck-container--inner">
			<div
				class="deck"
				v-for="item in selectedDecks"
				v-bind:key="item"
			>
				{{ item }}
			</div>

			<i class="material-icons icon deck-container--inner__icon" v-on:click="selectDeck()">add_circle_outline</i>

		</div>
		<div class="deck-selector__container-top">
			<div class="deck-selector">
				<div
					v-for="deck in decks"
					v-on:click="addDeck(deck, $event)"
					v-bind:key="deck"
				>
					{{ deck.deck }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			selectedDecks: [ 'Recommended' ],
			decks: [
				{ deck: 'Art' },
				{ deck: 'Business' },
				{ deck: 'Cars & motorization' },
				{ deck: 'Comedy' },
				{ deck: 'Education' },
				{ deck: 'Film' },
				{ deck: 'Games & hobbies' },
				{ deck: 'Nature' },
				{ deck: 'Live' },
				{ deck: 'Health' },
				{ deck: 'History' },
				{ deck: 'Kids & family' },
				{ deck: 'Music' },
				{ deck: 'News & politics' },
				{ deck: 'Psychology' },
				{ deck: 'Religion & spirituality' },
				{ deck: 'Science' },
				{ deck: 'Small talk' },
				{ deck: 'Society & culture' },
				{ deck: 'Sport' },
				{ deck: 'Stories' },
				{ deck: 'Technology' },
				{ deck: 'Tourism' }
			]
		}
	},

	methods: {
		selectDeck() {
			document.getElementsByClassName('deck-selector__container-top')[0].style.display = "block";

			window.onclick = e => {
				if(e.target === document.getElementsByClassName('deck-selector__container-top')[0])
					document.getElementsByClassName('deck-selector__container-top')[0].style.display = "none";
			}
		},

		addDeck() {
			if(!this.selectedDecks.includes(event.target.innerHTML)) {

				if(this.selectedDecks.length < 3)
					this.selectedDecks.push(event.target.innerHTML)

				else {
					this.$q.notify({
						message: "Buy premium to add more decks.",
						type: 'info', // 'positive', 'negative', 'warning', 'info'
						timeout: 3000
					})
				}
			}
			else {
				this.$q.notify({
					message: "This deck is already is use.",
					type: 'info', // 'positive', 'negative', 'warning', 'info'
					timeout: 3000
				})
			}
		}
	}
}
	
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';
	
.deck-container--outter {
	display: inline-block;
	padding-bottom: 20px;
}
.deck-container--inner {
	background-color: #fff;
	padding: 0 5px;
	height: 50px;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, .15);
}

.deck {
	@include transition(0s, background-color .4s);
	display: inline-block;
	height: 30px;
	color: #fff;
	background-color: $lighter-main;
	margin: 10px 5px;
	padding: 7px 10px;
	font-weight: 300;
	font-size: 13px;

	&:hover {
		cursor: pointer;
		background-color: $main;
		@include transition(0s, background-color .4s);
	}
}

.icon {
	@include transition(0s, color .4s);
	color: $lighter-main;

	&:hover {
		cursor: pointer;
		color: $main;
		@include transition(0s, color .4s);
	}
}

.deck-selector__container-top {
	overflow-y: scroll;
	display: none;
	z-index: 99999;
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: -100px;
	left: -100px;
	background-color: rgba(0,0,0,0.7);
	color: black;
}

.deck-selector {
	position: fixed;
	left: calc(50% - 200px);
	top: 0px;
	text-align: center;
	background-color: #fff;
	padding: 50px 100px;
	box-shadow: 5px 5px 20px rgba(0, 0, 0, .3);

	div {
		margin-bottom: 10px;
		@include transition(0s, color .5s);		
		&:hover {
			cursor: pointer;
			color: $main;
			@include transition(0s, color .5s);
		}
	}
}

</style>