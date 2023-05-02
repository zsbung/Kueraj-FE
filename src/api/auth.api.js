import axios from "axios";
import axiosInstance from "../configs/AxiosInstance";
import Auth from "../utils/Auth";

const ApiAuth = {
  async Login(email, password) {
    try {
      const response = await axiosInstance.post(`login`, {
        email,
        password,
      });

      Auth.storeInfoCookie(response.data);
      return response;
    } catch (error) {
      const { message } = error.response.data;
      throw message;
    }
  },
};

export default ApiAuth;
