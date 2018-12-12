<template>
	<mobile v-if="isMobile()" />
	<desktop v-else />
</template>

<script>

import Mobile from '../components/HomeMobile.vue';
import Desktop from '../components/HomeDesktop.vue';

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