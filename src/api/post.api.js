import axiosInstance from "../configs/AxiosInstance";

const POST = {
  async addProduk(data) {
    try {
      const {
        cate_id,
        nama,
        deskripsi,
        harga,
        foto,
        foto2,
        foto3,
        status,
        stok,
      } = data;
      const response = await axiosInstance.post("produk", {
        cate_id,
        nama,
        harga,
        deskripsi,
        foto,
        foto2,
        foto3,
        status,
        stok,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async updateProduk(data, id) {
    try {
      const {
        cate_id,
        nama,
        deskripsi,
        harga,
        foto,
        foto2,
        foto3,
        status,
        stok,
      } = data;
      const response = await axiosInstance.put(`produk/${id}`, {
        cate_id,
        nama,
        harga,
        deskripsi,
        foto,
        foto2,
        foto3,
        status,
        stok,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
export default POST;
