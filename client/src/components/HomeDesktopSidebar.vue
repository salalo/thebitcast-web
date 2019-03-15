<template>
	<aside>
		<header>
			<img src="../../public/logos/logo_red_64.png">

			<p class="info">
				Our mission is to promote podcasting, let every single creator<br>
				earn on every podcast, grow their business and<br>
				patronize charity activities.<br><br>
				We encourage you to <router-link to="/about-us">get more info about us</router-link>.
			</p>
		</header>

		<login-form></login-form>

		<footer>
			<span>© 2019 TheBitCast</span>
			<router-link to="/about-us">About us</router-link>
			<router-link to="/contact">Contact</router-link>
			<router-link to="/copyright">Copyright</router-link>
			<router-link to="/privacy-policy">Privacy & policy</router-link>
		</footer>
	</aside>
</template>

<script>

import LoginForm from './HomeDesktopSidebarLoginForm.vue';

export default {
	components: {
		'login-form': LoginForm
	}
}

</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

aside {
	background-color: $grey;
	clear: both;
	float: left;
	position: relative;
	color: $white;
	width: 640px;
	height: 100vh;
}
img {
	display: block;
	margin: auto;
	margin-top: 3vh;
}
.info {
	margin-top: 3vh;
	text-align: center;
	font-size: 17px;
	font-weight: 300;
	line-height: 23px;
}
a {
	color: $main;
	text-decoration: none;
}
footer {
	position: absolute;
	bottom: 20px;
	font-size: 12px;
	color: #A4A4A4;
	margin-left: 120px;

	a {
		font-size: 11px;
		color: $lighter-grey;
		margin-left: 20px;
	}
}

@media (max-width: 600px) {
	.footer { margin-left: 12vw; }
}
@media (max-width: 460px) {
	.footer {
		margin-left: 5vw;
		a { margin-left: 10px; }
	}

	.info {
		margin-top: 5vh;
		font-size: 14px;
	}
}
@media (max-height: 800px) {
	.logo { margin: 10px 0 0 20px; }
	.info { margin-top: 4vh; }
	.login-form { margin-top: 4vh; }
	.footer { bottom: 10px; }
}
</style>
