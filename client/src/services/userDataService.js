import Api from "@/services/api.js";

export default {
  fetchUserData() {
    return Api().get("/auth/getUser");
  }
};
