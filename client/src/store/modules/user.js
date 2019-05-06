import axios from "axios";

let Api = axios.create({
  baseURL: `http://localhost:8081`,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export const user = {
  namespaced: true,
  state: {
    isLogged: false,
    data: {}
  },
  getters: {
    checkIsLogged: (state) => {
      return state.isLogged
    },
    getUserData: (state) => {
      return state.data
    }
  },
  actions: {
    register: (creditionals, payload) => {
      return new Promise(async resolve => {
        resolve(await Api.post("/auth/create", payload));
      });
    },
    login: (creditionals, payload) => {
      return new Promise(async resolve => {
        resolve(await Api.post("/auth/login", payload));
      });
    },
    getUser: creditionals => {
      return new Promise(async resolve => {
        resolve(await Api.get("/auth/getUser"));
      });
    }
  },
  mutations: {
    login: state => {
      state.isLogged = true;
    },
    setUserData: async state => {
      let res = await Api.get("/auth/getUser");
      if (res.data.status == 200) {
        state.data = res.data.user;
      } else console.log("user not logged :/");
    },
    logout: state => {
      state.isLogged = false;
      state.nickname = "";
      state.email = "";
    }
  }
};
