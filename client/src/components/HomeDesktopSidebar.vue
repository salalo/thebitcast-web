<template>
	<div class="container">

		<div class="logo"><span>The</span> BITCAST</div>

		<div class="info">
			Our mission is to promote podcasting, let every single creator<br>
			earn on every podcast, grow their business and<br>
			patronize charity activities.<br><br>
			We encourage you to <a href="#">get more info about us</a>.
		</div>

		<login-form class="login-form"></login-form>

		<div class="footer">
			<span>© 2019 TheBitCast</span>
			<a href="#">About us</a>
			<a href="#">Contact</a>
			<a href="#">Copyright</a>
			<a href="#">Privacy & policy</a>
		</div>

	</div>
</template>

<script>

import LoginForm from './HomeDesktopLoginForm.vue';

export default {
	components: {
		'login-form': LoginForm
	}
}

</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.container {
	background-color: $grey;
	clear: both;
	position: relative;
	color: $white;
	width: 640px;
	height: 100vh;
}
.logo {
	color: $main;
	font-weight: 500;
	font-size: 30px;
	margin: 20px 0 0 20px;

	span { font-size: 17px; }
}
.login-form {
	margin: 0 auto;
	margin-top: 9vh;
}
.info {
	margin-top: 7vh;
	text-align: center;
	font-size: 17px;
	font-weight: 300;
	line-height: 23px;
}
a {
	color: $main;
	text-decoration: none;
}
.footer {
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
