<template>
	<div class="user-logged row">
		<div class="avatar" v-on:click="Logout()"></div>
		<span>James Smith</span>

		<i class="material-icons">keyboard_arrow_down</i>
	</div>
</template>

<script>
import VueCookies from 'vue-cookies';
import axios from 'axios';

export default {
	methods: {
		Logout() {
			VueCookies.remove("token")
			location.reload()
		}
	},

	mounted() {
		
		var actualId;

		axios.get('localhost:8081/auth/getId')
			.then(res => actualId = res.body)
			.catch(err => console.log(err));

		console.log(actualId);

		// axios.get('http://localhost:8081/users/5c86ae0ff465230c78370541')
		// 	.then(res => console.log(res))
		// 	.catch(err => console.log(err))
	},
}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.user-logged {
	max-height: 80px;

	span {
		line-height: 60px;
		vertical-align: middle;
		margin: 0 30px;
	}
}

.avatar {
	height: 60px;
	width: 60px;
	border-radius: 100%;
	background-image: url('../assets/creatorsAvatar.jpg');
	background-size: cover;
	border: 2px solid $main;
	@include transition(0s, border .15s ease);

	&:hover {
		cursor: pointer;
		border: 4px solid $main;
	}
}

.drop-down-icon {
	color: $main;
	margin-top: 20px;

	&:hover {
		color: $lighter-main;
		cursor: pointer;
	}
}

</style>
