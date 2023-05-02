import axios from "axios";
import axiosInstance from "../configs/AxiosInstance";

const Get = {
  async produk() {
    try {
      const response = await axiosInstance.get("produk");
      return response;
    } catch (error) {
      const { message } = error;
      throw message;
    }
  },
  async kategori() {
    try {
      const response = await axiosInstance.get("kategori");
      return response;
    } catch (error) {
      const { message } = error;
      throw message;
    }
  },
};
export default Get;
