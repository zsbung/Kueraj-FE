import Cookies from "js-cookie";

const Auth = {
  isAuthorization() {
    if (Cookies.get("token") || Cookies.get("role")) return true;
    return null;
  },
  getAccesToken() {
    return Cookies.get("token");
  },
  getRoleAs() {
    return Cookies.get("role");
  },

  storeInfoCookie(data) {
    if (!data) return null;
    Cookies.set("token", data.token);
    Cookies.set("role", data.data.role);
    return data;
  },
};

export default Auth;
