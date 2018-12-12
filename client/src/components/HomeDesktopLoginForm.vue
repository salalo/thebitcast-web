<template>
	<form class="form" action="" method="post">
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
			label="LOG IN"
			color="red-6"
			class="button"
		/>
		<q-btn
			outline
			text-color="red-6"
			label="REGISTER"
			class="button button__reg"
		/>
		<q-btn
			outline
			text-color="indigo-6"
			label="LOG IN USING FACEBOOK ACCOUNT"
			class="button__fb"
		/>
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
	width: 70%;
	padding: 0 30px;
	height: 350px;
	box-shadow: 2px 2px 15px #000;
}
.input {
	margin-top: 20px;
	color: $main !important;
	font-size: 13px;
	font-weight: 300;
}
.button {
	width: 47%;
	margin-top: 20px;

	&__reg { float: right; }
	&__fb {
		width: 100%;
		margin-top: 20px;
	}

}
</style>