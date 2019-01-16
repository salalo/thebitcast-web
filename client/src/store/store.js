import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loggedIn: false,
		formType: "register"
	},
	getters: {
		LOGGED: state => {
			return state.loggedIn;
		},
		FORMTYPE: state => {
			return state.formType;
		}
  },
	mutations: {
		CHANGE_LOGGED: (state, payload) => {
			state.loggedIn = payload
		},
		CHANGE_FORMTYPE: (state, payload) => {
			state.formType = payload
		}
	},
	actions: {
		GET_LOGGED: (context) => {
			axios.get('/reg-status').then(response => {
				context.commit('CHANGE_LOGGED', response.data)
			})
		}
	}  
})