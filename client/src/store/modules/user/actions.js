import userService from "@/services/userDataService";

export const login = async ({ commit }) => {
  const { data } = await userService.fetchUserData();
  if (data == "NotLogged") commit("login");
};
