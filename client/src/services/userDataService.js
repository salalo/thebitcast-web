import Api from "@/services/api.js";

export default {
  fetchUserData() {
    return Api().get("/auth/getUser");
  },
  async login(credentials) {
    return await Api().post("/auth/login", credentials);
  },
  register(credentials) {
    return Api().post("/auth/register", credentials);
  }
};
