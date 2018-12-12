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

		<div class="buy-premium">
			<a href="#">Buy premium</a> to listen all<br>
			available podcasts with no ads.
		</div>

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
	margin-top: 90px;
}
.info {
	margin-top: 70px;
	text-align: center;
	font-size: 17px;
	font-weight: 300;
	line-height: 23px;
}
a {
	color: $main;
	text-decoration: none;
}
.buy-premium {
	text-align: center;
	margin-top: 90px;
	font-size: 24px;
}
.footer {
	position: absolute;
	bottom: 20px;
	font-size: 12px;
	color: #A4A4A4;
  left: 30px;

	a {
		font-size: 11px;
		color: $lighter-grey;
		margin-left: 20px;
	}
}
</style>
