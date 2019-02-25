<template>
	<div class="container">
		<div class="stack">
			<div class="recommended">
				<users-deck></users-deck>

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
				<users-deck></users-deck>

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
import Deck from './HomeDesktopPanelDeck-logged.vue';

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
		'users-deck': Deck,
		swiper,
		swiperSlide
	}
}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

// minus width of Sidebar
.container {
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
