<template>
	<form class="form" action="" method="post">

		<div class="row">
			<q-btn
				outline
				lowercase
				label="Sign up with Google"
				class="button button__google"
			>
				<font-awesome-icon :icon="['fab', 'google']" class="icon alt"/>
			</q-btn>

			<q-btn
				outline
				class="button button__fb"
			>
				<font-awesome-icon :icon="['fab', 'facebook-f']" class="icon alt"/>		
			</q-btn>

			<q-btn
				outline
				class="button button__twitter"
			>
				<font-awesome-icon :icon="['fab', 'twitter']" class="icon alt"/>
			</q-btn>
		</div>

		<q-input
			dark
			value=""
			type="text"
			float-label="Name"
			color="red-6"
			class="input"
		/>
		<q-input
			dark
			value=""
			type="email"
			float-label="Email"
			color="red-6"
			class="input"
		/>
		<q-input
			dark
			value=""
			type="password"
			float-label="Password"
			color="red-6"
			class="input"
		/>

		<q-btn
			color="red-6"
			label="SIGN UP"
			class="button button__reg"
		/>

		<div class="logged-in">Already registered? <a href="#">Log in</a>.</div>
	</form>
</template>

<script>

import { QBtn, QInput } from "quasar-framework/dist/quasar.mat.esm";

export default {
  components: {
		QInput,
		QBtn
  },
};

</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.form {
	width: 360px;
	padding: 0 30px;
	height: 420px;
	box-shadow: 2px 2px 15px #000;
}
.input {
	margin-top: 20px;
	color: $main !important;
	font-size: 13px;
	font-weight: 300;
}
.button {
	margin: 20px 14px 0 0;
	text-transform: none !important;
	border-color: $light-grey;
	width: 36px;

	&__reg {
		width: 100%;
		margin-bottom: 20px;
	}
	&__google {
		width: 200px;
		font-weight: 400;

		&:hover { color: #1A6FC3; }
	}
	&__fb {
		// font-size: 18px;
		&:hover { color: #3B5998; }
	}
	&__twitter {
		&:hover { color: #38A1F3; }

		margin-right: 0;
	}
}

// ICONS
.fa-google { margin-left: 20px; }

.logged-in {
	padding-top: 20px;
	border-top: 1px solid $light-grey;
	text-align: center;
	font-weight: 300;
	font-size: 14px;

	a {
		text-decoration: none;
		color: $main;
	}
}
</style>