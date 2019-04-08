import Vue from "vue";
import Vuex from "vuex";
import { user } from "./modules/user";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { user }
  // state: {
  //   formType: "register",
  //   categoriesBarShown: false
  // },

  // getters: {
  //   FORMTYPE: state => {
  //     return state.formType;
  //   },
  //   CATBARSHOWN: state => {
  //     return state.categoriesBarShown;
  //   }
  // },

  // mutations: {
  //   CHANGE_FORMTYPE: (state, payload) => {
  //     state.formType = payload;
  //   },
  //   CHANGE_CATBAR: (state, payload) => {
  //     state.categoriesBarShown = payload;
  //   }
  // }
});
