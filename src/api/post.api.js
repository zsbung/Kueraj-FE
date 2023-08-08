import axiosInstance from "../configs/AxiosInstance";

const POST = {
  async addKategori(data) {
    try {
      const { name, image } = data;
      const response = await axiosInstance.post("kategori", {
        name,
        image,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async addProduk(data) {
    try {
      const {
        kategori_id,
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
        kategori_id,
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
        kategori_id,
        nama,
        deskripsi,
        harga,
        foto,
        foto2,
        foto3,
        status,
        stok,
        ukuran_S,
        ukuran_M,
        ukuran_L,
        ukuran_XL,
      } = data;
      const response = await axiosInstance.put(`produk/${id}`, {
        kategori_id,
        nama,
        harga,
        deskripsi,
        foto,
        foto2,
        foto3,
        status,
        stok,
        ukuran_S,
        ukuran_M,
        ukuran_L,
        ukuran_XL,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
export default POST;
