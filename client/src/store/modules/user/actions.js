import userService from '@/services/userDataService';

export const checkAuthStatus = async ({ commit }) => {
  const { data } = await userService.fetchUserData();
  if (data.user !== undefined) commit('authStatusUpdated', data.user);
};

export const register = async ({ dispatch }, newUser) => {
  try {
    const response = await userService.register(newUser);
    console.log('Register', response);
    dispatch('login', {
      email: newUser.email,
      password: newUser.password
    });
  } catch (error) {
    console.log('E', error);
  }
};

export const login = async ({ commit }, credentials) => {
  return await userService.login(credentials);
};
