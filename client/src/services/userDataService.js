import Api from "@/services/api.js";

export default {
  fetchUserData() {
    return Api().get("/auth/getUser");
  },
  login(credentials) {
    return Api().post("http://localhost:8081/auth/login", credentials);
  }
};
