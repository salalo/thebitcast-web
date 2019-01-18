import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		// loggedIn: this.$session.exists(),
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
		LOGIN: state => {
			state.pending = true
		},
		LOGIN_SUCCESS: state => {
			state.loggedIn = true
			state.pending = false
		},
		LOGOUT: state => {
      state.loggedIn = false
    },
		CHANGE_FORMTYPE: (state, payload) => {
			state.formType = payload
		}
	},

	actions: {
		login({ commit }) {
			commit('LOGIN')
				return new Promise(resolve => {
					setTimeout(() => {
						sessionStorage.setItem('token', 'JWT')
						commit('LOGIN_SUCCESS')
						resolve()
					}, 1000)
				});
		},
		logout({ commit }) {
			sessionStorage.removeItem('token')
			commit('LOGOUT')
		}
	}
})