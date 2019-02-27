<template>
	<div class="container" id="card-panel-container">
		<div class="stack">
			<div class="recommended">
				<users-deck-top></users-deck-top>

				<swiper :options="swiperOption">
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
				</swiper>
			</div>

			<div class="popular">
				<users-deck-bottom></users-deck-bottom>

				<swiper :options="swiperOption">
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
					<swiper-slide><card/></swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
import Card from './Card.vue';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import DeckTop from './HomeDesktopPanelDeckTop-logged.vue';
import DeckBottom from './HomeDesktopPanelDeckBottom-logged.vue';


export default {
	data() {
		return {
			swiperOption: {
				direction: 'horizontal',
				mousewheel: true,
				slidesPerView: 7,
				spaceBetween: 30,
				freeMode: true
			},
		}
	},

	components: {
		'card': Card,
		'users-deck-top': DeckTop,
		'users-deck-bottom': DeckBottom,
		swiper,
		swiperSlide
	}
}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

// minus width of Sidebar
.container {
	@include transition(0s, transform .5s);
	width: calc(100vw - 300px);
	height: calc(100vh - 80px);
	position: fixed;
	bottom: 0;
	right: 0;
}

.stack {
	margin-left: 30px;
	width: inherit;
	position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  transform: translateY(-50%);
}

.recommended, .popular, .suggestions {

	span{
		font-size: 20px;
		position: fixed;
		top: -40px;
	}
}
.popular {
	margin-top: 50px;
	// span { top: calc(50% - 180px); } for 3 row
	span { top: calc(50% + 10px); }
}

.swiper-slide {
  justify-content: center;
	align-self: center;
	min-width: 200px;
	min-height: 280px;
}

</style>
