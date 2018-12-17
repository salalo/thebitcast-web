<template>
	<div class="form" v-bind:style="{height: formHeight + 'px'}">
		<div class="row">
			<q-btn
				outline
				lowercase
				:label="googleBtnState"
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

		<form action="/create" method="post" @submit.prevent="sendUser">
			<q-input
				dark
				required
				minlength=5
				value=""
				type="text"
				v-model="User.nick"
				float-label="Name"
				color="red-6"
				class="input"
				v-bind:class="{ undisplayed: isActive }"
			/>
			<q-input
				dark
				required
				value=""
				type="email"
				name="email"
				autocomplete="off"
				v-model="User.email"
				float-label="Email"
				color="red-6"
				class="input"
			/>
			<q-input
				dark
				required
				minlength=6
				value=""
				type="password"
				name="password"
				autocomplete="off"
				v-model="User.password"
				float-label="Password"
				color="red-6"
				class="input"
			/>

			<a class="forgot-passwd" href="#" v-bind:class="{ undisplayed: !isActive}">Forgot your password?</a>

			<q-btn
				color="red-6"
				:label="registerBtnState"
				class="button button__reg"
				type="submit"
				name="submit"
			/>
		</form>
		<div class="formStateHyper">{{formStateText}} <a href="#" v-on:click="changeFormState">{{formStateHyperlink}}</a>.</div>
	</div>
</template>

<script>

import { QBtn, QInput } from "quasar-framework/dist/quasar.mat.esm";
import axios from 'axios';

export default {
  data() {
    return {
			isActive: false,
			googleBtnState: "Sign up with Google",
			registerBtnState: "SIGN UP",
			formStateText: "Already registered?",
			formStateHyperlink: "Sign in",
			formHeight: 420,

      User: {
        nick: '',
        email: '',
        password: ''
      }
    };
	},

	components: {
		QInput,
		QBtn
	},

  methods: {
    sendUser() {
      let newUser = {
        nick: this.User.nick,
        email: this.User.email,
				password: this.User.password
			}

			/* eslint-disable */
      axios.post('http://localhost:8081/create', newUser)
        .then(res => console.log(res))
			  .catch(err => console.log(err))
		},
		
		changeFormState() {
			if (this.registerBtnState === "SIGN UP") {
				this.isActive = true;
				this.formHeight = 360;
				this.googleBtnState = "Sign in with Google";
				this.registerBtnState = "SIGN IN";
				this.formStateText = "Not registered yet?";
				this.formStateHyperlink = "Create one";
			}
			else {
				this.isActive = false;
				this.formHeight = 420;
				this.googleBtnState = "Sign up with Google";
				this.registerBtnState = "SIGN UP";
				this.formStateText = "Already registered?";
				this.formStateHyperlink = "Sign in";
			}
		}
  }
}

</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.undisplayed { display: none; }
.forgot-passwd {
	text-decoration: none;
	color: $main;
	font-size: 12px;
	font-weight: 200;
	float: right;
	margin-top: 5px;
}
.form {
	width: 360px;
	padding: 0 30px;
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

.formStateHyper {
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