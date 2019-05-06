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
    changeUpload: ({ commit }, tf) => {
      commit('CHANGE_UPLOAD', tf);
    },
    changeCategories: ({ commit }, tf) => {
      commit('CHANGE_CATEGORIES', tf);

      let cardPanel = document.getElementById('card-panel-container');
      let categoriesSidebar = document.getElementsByClassName(
        'categories-bar'
      )[0];

      if (tf === true) {
        categoriesSidebar.style.transform = 'translateX(300px)';
        cardPanel.style.transform = 'translateX(300px)';
      } else if (tf === false) {
        cardPanel.style.transform = 'translateX(0)';
        categoriesSidebar.style.transform = 'translateX(0)';
      }
    }
  },
  mutations: {
    CHANGE_UPLOAD: (state, tf) => {
      state.rendered.upload = tf;
    },
    CHANGE_CATEGORIES: (state, tf) => {
      state.rendered.categories = tf;
    }
  }
};
