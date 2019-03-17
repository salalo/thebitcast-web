<template>
	<section class="login-form" v-bind:style="{height: formHeight + 'px'}">
		<header class="row">
			<a href="http://localhost:8081/auth/google">

				<v-btn
					outline
					lowercase
					round
					class="button button__google"
					color="#f5f5f5"
				>
					{{ googleBtnState }}
					<v-icon small class="google-icon">fab fa-google</v-icon>
				</v-btn>
			</a>

			<a href="http://localhost:8081/auth/facebook">
				<v-btn
					outline
					icon
					class="button button__fb"
					color="#f5f5f5"
				>
					<v-icon small>fab fa-facebook-f</v-icon>
				</v-btn>
			</a>

			<a href="http://localhost:8081/auth/twitter">
				<v-btn
					outline
					icon
					class="button button__twitter"
					color="#f5f5f5"
				>
					<v-icon small>fab fa-twitter</v-icon>
				</v-btn>
			</a>
		</header>

		<!-- var for action and @submit method -->
		<form action="fontStateAction" method="post" @submit.prevent="startCaptcha">

			<v-text-field
				dark
				:required=!isActive
				minlength=4
				maxlength=20
				pattern="(?=.*[a-z]).{4,20}"
				title="Must contain at least 4 characters limited to 20."
				value=""
				type="text"
				v-model="User.nick"
				label="Name"
				color="#F44336"
				class="input"
				v-bind:class="{ hidden: isActive }"
      ></v-text-field>

			<v-text-field
				dark
				required
				minlength=5
				maxlength=30
				value=""
				type="email"
				name="email"
				autocomplete="off"
				v-model.trim="User.email"
				label="Email"
				color="#F44336"
				class="input"
      ></v-text-field>
			
			<v-text-field
				dark
				required
				minlength=6
				maxlength=40
				pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}"
				title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 limited to 40 characters."
				value=""
				name="password"
				autocomplete="off"
				v-model.trim="User.password"
				:append-icon="show1 ? 'visibility' : 'visibility_off'"
				@click:append="show1 = !show1"
        :type="show1 ? 'text' : 'password'"
				label="Password"
				color="#F44336"
				class="input"
      ></v-text-field>

			<a class="forgot-passwd" href="#" v-bind:class="{ hidden: !isActive}">Forgot your password?</a>
				<v-btn
					dark
					color="#F44336"
					class="button button__reg"
					type="submit"
					name="submit"
				>
					{{ registerBtnState }}
				</v-btn>
			

			<p class="policy-reg" v-bind:class="{ hidden: isActive }">
				<input
					:required=!isActive
					class="policy-reg__checkbox"
					type="checkbox"
				>By creating an account you're okay with our <router-link to="/privacy-policy">Privacy & Policy</router-link>.
			</p>

		</form>
		<p class="form-state">{{formStateText}} <a href="#" v-on:click="changeFormState">{{formStateHyperlink}}</a>.</p>
	</section>
</template>

<script>

import axios from 'axios';
import Joi from 'joi';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import Vue from "vue"
import VueCookies from "vue-cookies"

Vue.use(VueReCaptcha, { siteKey: '6Lcvt4wUAAAAACOvd54WTCBGMeegcNdFj1JdokMr' })

const schemaRegister = Joi.object().keys({
	nick: Joi.string().alphanum().min(4).max(20).required(),
	email: Joi.string().email().lowercase().trim().min(5).required(),
	password: Joi.string().trim().min(8).max(40).required(),
	captchaToken: Joi.string()
})

const schemaLogin = Joi.object().keys({
	email: Joi.string().email().lowercase().trim().min(5).required(),
	password: Joi.string().trim().min(8).max(40).required(),
})

export default {
	data() {
		return {
			isActive: false,
			googleBtnState: "Sign up with Google",
			registerBtnState: "SIGN UP",
			formStateText: "Already registered?",
			formStateHyperlink: "Sign in",
			fontStateAction: "/auth/create",
			formHeight: 465,
			status: "",
			sucessfulServerResponse: "",
			newCaptchaToken: "",
			serverError: "",
			show1: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      },

			User: {
				nick: '',
				email: '',
				password: '',
				captchaToken: '6Lf-EYwUAAAAAMX3WFNl82HQMQF3r2D7_qMUd2VQ'
			}
		}
	},

	methods: {
		startCaptcha() {
			this.$recaptcha('login').then((token) => {
				this.newCaptchaToken = token
				this.sendUser()
			}
		)},

		sendUser() {
			let newUser = {
				nick: this.User.nick,
				email: this.User.email,
				password: this.User.password,
				captchaToken: this.newCaptchaToken,
			}

			let logingUser = {
				email: this.User.email,
				password: this.User.password
			}

			const resultRegister = Joi.validate(newUser, schemaRegister)
			const resultLogin = Joi.validate(logingUser, schemaLogin)

			if (this.fontStateAction === "/auth/create") {
				if (resultRegister.error === null) {
					/* eslint-disable */
					axios.post('http://localhost:8081/auth/create', newUser)
						.then(res => {
							// location.reload()

							// this.$q.notify({
							// 	message: res.data.message,
							// 	type: res.data.type
							// })
						})
						.catch(err => console.log(err))
				} else { console.log(resultRegister.error) }
			}

			else if (this.fontStateAction === "/auth/login") {
				if (resultLogin.error === null) {
					/* eslint-disable */
					axios.post('http://localhost:8081/auth/login', logingUser)
						.then(res => { 
							location.reload()
						})
						.catch(err => {
							console.log(err)
							// this.$q.notify({
							// 	message: `Wrong login or password.`,
							// 	type: 'negative'
							// })
						})
				} else { console.log(resultLogin.error) }
			}
		},

		changeFormState() {
			// clean form on change
			this.User.nick = ''
			this.User.email = ''
			this.User.password = ''

			if (this.registerBtnState === "SIGN UP") {
				this.isActive = true
				this.formHeight = 360
				this.googleBtnState = "Sign in with Google"
				this.registerBtnState = "SIGN IN"
				this.formStateText = "Not registered yet?"
				this.formStateHyperlink = "Create one"
				this.fontStateAction = "/auth/login"
				this.$store.commit('CHANGE_FORMTYPE', 'login')
			}
			else {
				this.isActive = false;
				this.formHeight = 465;
				this.googleBtnState = "Sign up with Google"
				this.registerBtnState = "SIGN UP"
				this.formStateText = "Already registered?"
				this.formStateHyperlink = "Sign in"
				this.fontStateAction = "/auth/create"
				this.$store.commit('CHANGE_FORMTYPE', 'register')
			}
		}
	}
}

</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.hidden { display: none; }
.google-icon { margin-left: 20px; }
a { text-decoration: none; color: inherit; }

.forgot-passwd {
	text-decoration: none;
	color: $main;
	font-size: 12px;
	font-weight: 200;
	float: right;
	margin: -10px 0 20px 0;

	&:hover { color: $lighter-main; }
}
.login-form {
	width: 360px;
	padding: 0 30px;
	box-shadow: 0 10px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
	margin: 0 auto;
	margin-top: 9vh;
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
	border-color: $light-grey !important;
	padding: 0 !important;

	&__reg {
		width: 100%;

		margin: 0 0 15px 0;
	}
	&__google {
		width: 200px;
		font-weight: 400;

		&:hover { color: #1A6FC3 !important; border-color: #1A6FC3 !important; }
	}
	&__fb {
		&:hover { color: #3B5998 !important; border-color: #3B5998 !important; }
	}
	&__twitter {
		&:hover { color: #38A1F3 !important; border-color: #38A1F3 !important; }

		margin-right: 0;
	}
}
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
