<template>
	<v-avatar
		color="grey lighten-4"
		v-on:click="Logout()"
	>
		<img src="../assets/crAvatar.jpg" alt="avatar">
	</v-avatar>
</template>

<script>
import VueCookies from 'vue-cookies'
import axios from 'axios'

export default {
	methods: {
		Logout() {
			VueCookies.remove("token")
			location.reload()
		}
	},


		// Get user data by id
		// axios.get('http://localhost:8081/users/5c86ae0ff465230c78370541')
		// 	.then(res => console.log(res))
		// 	.catch(err => console.log(err))
}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

img {
	&:hover{ cursor: pointer; }
	object-fit: cover;
	object-position: center;
}

</style>
