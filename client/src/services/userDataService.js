import Api from '@/services/api.js';

export default {
  fetchUserData() {
    return new Promise(async (resolve, reject) => {
      resolve(await Api().get('/auth/getUser'));
    });
  },
  login(credentials) {
    return new Promise(async (resolve, reject) => {
      resolve(await Api().post('/auth/login', credentials));
    });
  },
  register(credentials) {
    return Api().post('/auth/register', credentials);
  }
};
