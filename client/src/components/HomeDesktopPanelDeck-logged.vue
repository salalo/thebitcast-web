<template>
	<div class="deck-container--outter">
		<div class="deck-container--inner">
			<div class="deck" v-for="item in selectedDecks">
				{{ item }}
			</div>

			<font-awesome-icon
				:icon="['fas', 'plus']"
				class="icon deck-container--inner__icon"
				v-on:click="selectDeck()"
			/>
		</div>
		<div class="deck-selector__container">
			<div class="deck-selector">
				<div v-for="deck in decks" v-on:click="addDeck(deck, $event)">
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
			isActive: false,
			deckInUse: '',
			selectedDecks: [ 'Recommended' ],
			selectedDecks2: [ 'Most popular' ],
			decks: [
				{ deck: 'Art' },
				{ deck: 'Business' },
				{ deck: 'Cars & motorization' },
				{ deck: 'Comedy' },
				{ deck: 'Education' },
				{ deck: 'Film' },
				{ deck: 'Games & hobbies' },
				{ deck: 'Health' },
				{ deck: 'Kids & family' },
				{ deck: 'Music' },
				{ deck: 'News & politics' },
				{ deck: 'Psychology' },
				{ deck: 'Religion & spirituality' },
				{ deck: 'Science' },
				{ deck: 'Society & culture' },
				{ deck: 'Sport' },
				{ deck: 'Technology' },
				{ deck: 'Tourism' }
			]
		}
	},

	methods: {
		selectDeck() {

			let deckSelectorContainer = document.getElementsByClassName('deck-selector__container')[0];
			deckSelectorContainer.style.display = "block";

			window.onclick = e => {

				if(e.target === document.getElementsByClassName('deck-container--inner__icon')[0] || e.target === document.getElementsByTagName('path')[0]){
					this.deckInUse = 'top'
					console.log(this.deckInUse)
				}
																																				// hard way -> console.log(document.getElementsByTagName('path')) -> will change
				else if(e.target === document.getElementsByClassName('deck-container--inner__icon')[1] || e.target === document.getElementsByTagName('path')[11]){
					this.deckInUse = 'bottom'
					console.log(this.deckInUse)
				}

				else if(e.target == deckSelectorContainer)
					deckSelectorContainer.style.display = "none";
			}
		},

		addDeck() {
			console.log("deck top: " + this.selectedDecks)
			console.log("deck bottom: " + this.selectedDecks2)

			if(this.deckInUse === 'top') {

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

			else if(this.deckInUse === 'bottom') {

				if(!this.selectedDecks2.includes(event.target.innerHTML)) {

					if(this.selectedDecks2.length < 3)
						this.selectedDecks2.push(event.target.innerHTML)

					else {
						this.$q.notify({
							message: "Buy premium to add more decks.2",
							type: 'info', // 'positive', 'negative', 'warning', 'info'
							timeout: 3000
						})
					}
				}
				else {
					this.$q.notify({
						message: "This deck is already is use.2",
						type: 'info', // 'positive', 'negative', 'warning', 'info'
						timeout: 3000
					})
				}
			}
		}
	},

	mounted() {
		let deckBottom = document.getElementsByClassName('deck')[1];
		deckBottom.innerHTML = "Most popular";


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
	font-size: 20px;
	margin: 0 5px -5px 5px;

	&:hover {
		cursor: pointer;
		color: $main;
		@include transition(0s, color .4s);
	}
}

.deck-selector__container {
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