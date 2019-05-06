import Vue from 'vue';
import Vuex from 'vuex';
import { user } from './modules/user.js';
import { view } from './modules/view.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { user, view },

  getters: {},

  mutations: {}
});
