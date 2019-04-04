import * as mutations from "./mutations";
import * as actions from "./actions";

export const user = {
  namespaced: true,
  state: {
    isLogged: false,
    about: {
      name: ""
    }
  },
  mutations,
  actions
};
