import axios from "axios";
import { CONSTANT } from "../utils/Constant";

const axiosInstance = axios.create({
  baseURL: CONSTANT.BASEURL,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers[
      "Authorization"
    ] = `Bearer 17|Yp6uj2dG2Na7DWG4Cr3dPuFTLPbjcd0GFVNOAyNO`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
