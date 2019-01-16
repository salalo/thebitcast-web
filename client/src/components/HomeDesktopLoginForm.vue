<template>
	<div class="form" v-bind:style="{height: formHeight + 'px'}">
		<div class="row">
			<a href="http://localhost:8081/auth/google">
				<q-btn
					outline
					lowercase
					:label="googleBtnState"
					class="button button__google"
				>
					<font-awesome-icon :icon="['fab', 'google']" class="icon alt"/>
				</q-btn>
			</a>

			<a href="http://localhost:8081/auth/facebook">
				<q-btn
					outline
					class="button button__fb"
				>
					<font-awesome-icon :icon="['fab', 'facebook-f']" class="icon alt"/>
				</q-btn>
			</a>

			<a href="http://localhost:8081/auth/twitter">
				<q-btn
					outline
					class="button button__twitter"
				>
					<font-awesome-icon :icon="['fab', 'twitter']" class="icon alt"/>
				</q-btn>
			</a>
		</div>
		<!-- var for action and @submit method -->
		<form action="/auth/create" method="post" @submit.prevent="sendUser">
			<q-input
				dark
				required
				minlength=4
				value=""
				type="text"
				v-model="User.nick"
				float-label="Name"
				color="red-6"
				class="input"
				v-bind:class="{ hidden: isActive }"
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

			<a class="forgot-passwd" href="#" v-bind:class="{ hidden: !isActive}">Forgot your password?</a>

			<q-btn
				color="red-6"
				:label="registerBtnState"
				class="button button__reg"
				type="submit"
				name="submit"
			/>

			<div class="policy-reg" v-bind:class="{ hidden: isActive }">
				<input
					required
					class="policy-reg__checkbox"
					type="checkbox"
				>By creating an account you're okay with our <router-link to="/privacy-policy">Privacy & Policy</router-link>.
			</div>

		</form>
		<div class="form-state">{{formStateText}} <a href="#" v-on:click="changeFormState">{{formStateHyperlink}}</a>.</div>
	</div>
</template>

<script>

import { QBtn, QInput } from "quasar-framework/dist/quasar.mat.esm";
import axios from 'axios';
import Joi from 'joi';

const schema = Joi.object().keys({
  nick: Joi.string().min(4).required(),
  email: Joi.string().lowercase().trim().required(),
  password: Joi.string().trim().min(6).required()
});

export default {
  data() {
    return {
			isActive: false,
			googleBtnState: "Sign up with Google",
			registerBtnState: "SIGN UP",
			formStateText: "Already registered?",
			formStateHyperlink: "Sign in",
			formHeight: 450,

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

			const result = Joi.validate(newUser, schema);
			
			if (result.error === null) {
				/* eslint-disable */
	      axios.post('http://localhost:8081/auth/create', newUser)
	        .then(res => console.log(res))
				  .catch(err => console.log(err))
			} else { console.log(result.error); }
		},

		changeFormState() {
			if (this.registerBtnState === "SIGN UP") {
				this.isActive = true;
				this.formHeight = 350;
				this.googleBtnState = "Sign in with Google";
				this.registerBtnState = "SIGN IN";
				this.formStateText = "Not registered yet?";
				this.formStateHyperlink = "Create one";
				this.$store.commit('CHANGE_FORMTYPE', 'login');
			}
			else {
				this.isActive = false;
				this.formHeight = 450;
				this.googleBtnState = "Sign up with Google";
				this.registerBtnState = "SIGN UP";
				this.formStateText = "Already registered?";
				this.formStateHyperlink = "Sign in";
				this.$store.commit('CHANGE_FORMTYPE', 'register');
			}
		}
  }
}

</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

a { text-decoration: none; color: inherit; }
.forgot-passwd {
	text-decoration: none;
	color: $main;
	font-size: 12px;
	font-weight: 200;
	float: right;
	margin-top: 5px;

	&:hover { color: $lighter-main; }
}
.form {
	width: 360px;
	padding: 0 30px;
	box-shadow: 0 0 20px rgba(0, 0, 0, .4);
}
.policy-reg {	
	margin-bottom: 15px;
	font-size: 12px;
	font-weight: 400;
	color: $darker-white;

	&__checkbox {
		margin: 6px 7px;
		width: 16px;
		height: 16px;
		float: left;
	}

	a { color: $lighter-main; }
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
		margin-bottom: 15px;
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

.form-state {
	padding-top: 15px;
	border-top: 1px solid $light-grey;
	text-align: center;
	font-weight: 300;
	font-size: 14px;

	a {
		text-decoration: none;
		color: $main;

		&:hover { color: $lighter-main; }
	}
}
</style>
