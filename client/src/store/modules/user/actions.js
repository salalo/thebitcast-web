import userService from "@/services/userDataService";

export const checkAuthStatus = async ({ commit }) => {
  const { data } = await userService.fetchUserData();
  console.log("Auth status", data);
  commit("authStatusUpdated", data);
};

export const register = async ({dispatch}, newUser) => {
  try {
    await userService.register(newUser);
    dispatch("login", {
      email: newUser.email,
      password: newUser.password
    });
  } catch (error) {
    dispatch("registerError", error);
  }
};

export const login = async ({ commit }, credentials) => {
  try {
    const response = await userService.login(credentials);
    console.log(response);
    location.reload()
  } catch (error) {

  }
};
