<template>
	<v-avatar color="grey lighten-4">
		<img
			src="../../assets/crAvatar.jpg"
			alt="avatar"
			v-on:click="isHidden = !isHidden"
		>
		<general-settings v-bind:class="{ hidden: isHidden }"></general-settings>
	</v-avatar>
</template>

<script>
import axios from 'axios'
import VueCookie from 'vue-cookies'
import GeneralSettings from './user_settings/General.vue'

export default {
	data() {
		return {
			isHidden: true
		}
	},

	components: {
		'general-settings': GeneralSettings
	},

	created() {
		axios.defaults.withCredentials = true

		axios.get('http://localhost:8081/auth/getUser')
			.then(res => console.log("get user avatar"))
			.catch(err => console.log(err))
	}
}

</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.hidden { display: none; }
img {
	&:hover{ cursor: pointer; }
	object-fit: cover;
	object-position: center;
}

</style>
