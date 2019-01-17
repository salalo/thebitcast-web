import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loggedIn: sessionStorage.getItem('token'),
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
   login({ commit }, creds) {
     commit(LOGIN)
     return new Promise(resolve => {
       setTimeout(() => {
        	sessionStorage.setItem('token', 'JWT')
        	commit(LOGIN_SUCCESS)
        	resolve()
       }, 1000)
     });
   },
   logout({ commit }) {
    	sessionStorage.removeItem('token')
    	commit(LOGOUT)
   }
 }
})