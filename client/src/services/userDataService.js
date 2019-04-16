import Api from "@/services/api.js";

export default {
  fetchUserData() {
    return Api().get("/auth/getUser");
  },
  login(credentials) {
    return Api().post("auth/login", credentials);
  },
  register(credentials) {
    return Api().post("auth/register", credentials)
  }
};
