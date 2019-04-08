import userService from "@/services/userDataService";

export const checkAuthStatus = async ({ commit }) => {
  const { data } = await userService.fetchUserData();
  // commit("authStatusUpdated", data);
  if (data === "NotLogged") commit("login");
};

export const login = async ({ commit }, credentials) => {
  const response = await userService.login(credentials);
  // commit("login");
};
