<template>
	<mobile v-if="isMobile()" />
	<desktop v-else />
</template>

<script>

import Mobile from '../components/Home-mobile.vue';
import Desktop from '../components/Home-desktop.vue';

export default {
	components: {
		'mobile': Mobile,
		'desktop': Desktop
	},

	methods: {

		isMobile() {

			if( navigator.userAgent.match(/Android/i)
				|| navigator.userAgent.match(/webOS/i)
				|| navigator.userAgent.match(/iPhone/i)
				|| navigator.userAgent.match(/iPod/i)
				|| navigator.userAgent.match(/BlackBerry/i)
				|| navigator.userAgent.match(/Windows Phone/i)
			)
			return true;

			else
				return false;
		}
	}
}
</script>