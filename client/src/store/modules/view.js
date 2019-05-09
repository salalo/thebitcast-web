// import axios from "axios";

// let Api = axios.create({
//   baseURL: `http://localhost:8081`,
//   withCredentials: true,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   }
// });

export const view = {
  namespaced: true,
  state: {
    rendered: {
      upload: false,
      categories: false
    }
  },
  actions: {
    changeUpload: ({ commit }, boolUpl) => {
      commit('CHANGE_CATEGORIES', boolUpl);
      commit('CHANGE_UPLOAD', boolUpl);
    },
    changeCategories: ({ commit }, boolCat) => {
      commit('CHANGE_CATEGORIES', boolCat);
    }
  },
  mutations: {
    CHANGE_UPLOAD: (state, boolUpl) => {
      state.rendered.upload = boolUpl;
    },
    CHANGE_CATEGORIES: (state, boolCat) => {
      state.rendered.categories = boolCat;

      let panel = document.getElementById('card-panel-container');
      let categoriesSidebar = document.getElementsByClassName(
        'categories-bar'
      )[0];

      if (panel === null) {
        panel = document.getElementById('upload-panel-container');

        if (boolCat === true) {
          categoriesSidebar.style.transform = 'translateX(300px)';
          panel.style.transform = 'translateX(300px)';
        } else if (boolCat === false) {
          panel.style.transform = 'translateX(0px)';
          categoriesSidebar.style.transform = 'translateX(0)';
        }
      } else {
        if (boolCat === true) {
          categoriesSidebar.style.transform = 'translateX(300px)';
          panel.style.transform = 'translateX(300px)';
        } else if (boolCat === false) {
          panel.style.transform = 'translateX(0px)';
          categoriesSidebar.style.transform = 'translateX(0)';
        }
      }
    }
  }
};
