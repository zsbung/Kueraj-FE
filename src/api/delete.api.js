import axiosInstance from "../configs/AxiosInstance";

export const DELETE = {
  async deleteProduk(id) {
    try {
      const response = await axiosInstance.delete(`produk/${id}`);
      return response;
    } catch (error) {
      const { message } = error;
      throw message;
    }
  },
};
