<template>
	<v-avatar
		color="grey lighten-4"
		v-on:click="logout()"
	>
		<span>{{actualUser.nick}}</span>
		<img src="../assets/crAvatar.jpg" alt="avatar" v-on:click="logout()">
	</v-avatar>
</template>

<script>
import axios from 'axios'
import VueCookie from 'vue-cookies' 

export default {

	data() {
		return {
			actualUser: {
				nick: ""
			}
		}
	},

	created() {
		axios.defaults.withCredentials = true

		axios.get('http://localhost:8081/auth/getUser')
			.then(res => {
				this.actualUser = res.data
			})
			.catch(err => console.log( err))
	},

	methods: {
		logout() {
			axios.get('http://localhost:8081/auth/logout')
				.then(res => resolve(res))
				.catch(err => console.log(err))

			VueCookie.remove("SESS")
			location.reload()
		}
	}
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
