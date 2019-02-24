import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		formType: "register"
	},

	getters: {
		FORMTYPE: state => {
			return state.formType;
		}
  },

	mutations: {
		CHANGE_FORMTYPE: (state, payload) => {
			state.formType = payload
		}
	}
})