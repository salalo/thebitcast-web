import userService from "@/services/userDataService";

export const checkAuthStatus = async ({ commit }) => {
  const { data } = await userService.fetchUserData();
  console.log("Auth status", data);
  commit("authStatusUpdated", data);
};

export const register = async ({ dispatch }, newUser) => {
  try {
    const response = await userService.register(newUser);
    console.log("Register", response);
    dispatch("login", {
      email: newUser.email,
      password: newUser.password
    });
  } catch (error) {
    console.log("E", error);
  }
};

export const login = async ({ commit }, credentials) => {
  const response = userService.login(credentials);
  console.log("Login", response);
};
