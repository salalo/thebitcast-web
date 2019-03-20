<template>
	<v-avatar
		color="grey lighten-4"
		v-on:click="logout()"
	>
		<img src="../assets/crAvatar.jpg" alt="avatar" v-on:click="logout()">
	</v-avatar>
</template>

<script>
import axios from 'axios'
import VueCookie from 'vue-cookies' 

export default {

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
