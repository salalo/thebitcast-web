<template>
	<div class="container">

		<topbar></topbar>

		<div class="recommended">
			<span>Recommended</span>

			<div class="rocommended__horizontal">

				<swiper :options="swiperOption" class="rocommended__horizontal-swiper">
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


		<div class="popular">
			<span>Most popular</span>

			<div class="popular__horizontal">

				<swiper :options="swiperOption" class="rocommended__horizontal-swiper">
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

import Topbar from './HomeDesktopPanelTopbar.vue';
import Card from './Card.vue';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
	data() {
		return {
			swiperOption: {
				slidesPerView: 5.5,
				spaceBetween: 30,
				freeMode: true
			}
		}
	},
	components: {
		'topbar': Topbar,
		'card': Card,
		swiper,
		swiperSlide
	}
}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

// minus width of Sidebar
.container { width: calc(100vw - 640px); }

.recommended, .popular {
	width: 100%;
	height: 50%;
	padding: 30px 0 30px 30px;
	display: flex;
  justify-content: center;
	flex-direction: column;

	span{
		position: relative;
		font-size: 20px;
		// 10px left to center swiper and enable left shadow
		margin: -50px 0 20px 0;
	}
}
.popular { span { margin-top: -200px; } }

.swiper-slide {
  justify-content: center;
	align-self: center;
	min-width: 200px;
	min-height: 280px;

	&:nth-child(2n) {
		min-width: 350px; 
	}
}

// !!! TOTAL MARGIN LEFT = 40PX (recommended padding + span margin)

</style>