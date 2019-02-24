<template>
	<div class="container">

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
import Card from './Card.vue';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import VueCookies from 'vue-cookies';
import axios from 'axios';

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

	mounted()
	{
		if(VueCookies.get("logging") == "true")
		{
			this.$q.notify({
				message: `Pomyślnie zalogowano`,
				type: 'positive'
				//DO DODANIA JAKAŚ PASUJĄCA IKONKA
			})
			VueCookies.set("logging", "false");
		}

	},

	components: {
		'card': Card,
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

.recommended, .popular {
	width: 100%;
	height: 50%;
	padding: 30px 0 0 30px;
	display: flex;
  justify-content: center;
	flex-direction: column;

	span{
		position: absolute;
		font-size: 20px;
		top: 60px;
	}
}
.popular {
	margin-top: -60px;
	span { top: 460px; }
}

.swiper-slide {
  justify-content: center;
	align-self: center;
	min-width: 200px;
	min-height: 280px;
}

</style>
