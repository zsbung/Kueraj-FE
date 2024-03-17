import { FormatRupiah } from "@arismun/format-rupiah";
import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { BiSearch } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "../../configs/AxiosInstance";
import GoToTop from "../../helpers/GoToTop";
import Auth from "../../utils/Auth";
import { CONSTANT } from "../../utils/Constant";
import ProdukKasir from "../user/Produk/ProdukKasir";
import { MyContext } from "../../context/Context";
import ModalQris from "../../components/ModalQris";

export default function Kasir() {
  let navigate = useNavigate();
  const [data, setDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nama, setNama] = useState("");
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);
  const [pesanan, setPesanan] = useState([]);
  const [produk, setProduk] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState({
    modalQris: false,
    data: {},
  });
  async function fetchData() {
    setPage(1);
    try {
      const res = await axios.get(
        `${CONSTANT.BASEURL}produkKasir?search=${search}`
      );
      setDatas(res.data.products.data);
      setTotal(res.data.products.total);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  }

  const { user, setUser } = useContext(MyContext);

  useEffect(() => {
    {
      setLoading(true);
      Auth.isAuthorization() &&
        axiosInstance.get("me").then((res) => {
          setUser(res.data);
          setLoading(false);
        });
    }
  }, []);
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [search]);

  let totalHarga = pesanan.reduce(
    (total, pesanan) => (total + pesanan.harga) * pesanan.jml,
    0
  );
  const handleGetData = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.get(`${CONSTANT.BASEURL}produkUser?page=${2}`);
      setDatas([...data, ...res.data.products.data]);

      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  const handleFinish = (e) => {
    e.preventDefault();
    if (total == null || total == 0) {
      toast.error("pilih item terlebih dahulu");
    } else {
      axiosInstance
        .post("beliByKasir", {
          beli: pesanan,
          tanggal_pemesanan: moment().format("LL"),
          nama: nama,
          total: totalHarga,
        })
        .then((res) => {
          toast.success(res.data);
          setPesanan([]);
          setNama("");
          setShow(false);
          setModal(false);
        })
        .catch((err) => toast.error(err.response.data.message));
    }
  };

  return (
    <>
      {modal.modalQris && (
        <ModalQris
          handleFinish={handleFinish}
          setModal={setModal}
          datas={modal.data}
        />
      )}
      <Toaster />
      <GoToTop />
      <div className="lg:mt-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(produk);
          }}
          htmlFor=""
          className="relative mb-5  "
        >
          <input
            type="text"
            placeholder="cari produk..."
            className="outline-none peer rounded-lg focus:border-primary focus:w-full h-10 transition-all duration-500 ease-in-out w-full border px-2 "
            onChange={(e) => setProduk(e.target.value)}
          />
          <label className="absolute flex items-center right-0 text-abu peer-focus:text-primary transisi   h-full top-0 px-2">
            <BiSearch size={25} className="" />
          </label>
        </form>
      </div>
      {!show && (
        <button
          onClick={() => setShow(true)}
          className="fixed left-1/2 text-white -translate-x-1/2 bottom-12 border z-[999] bg-primary  h-12 w-12  rounded-full"
        >
          {pesanan.length}
        </button>
      )}
      {show && (
        <div className="h-screen bg-black/30 w-screen flex justify-center items-center  fixed left-0 top-0 z-[999]">
          <div
            className={`   transition-all duration-500 ease-in-out rounded-lg p-2   bg-white w-1/2 overflow-y-scroll`}
          >
            <div className="w-full  flex justify-center py-1">
              <button
                onClick={() => {
                  setPesanan([]);
                  setShow(false);
                }}
                className="text-white bg-secondary gap-x-2 hover:bg-secondary transition-all duration-150 ease-in-out font-semibold  w-1/2"
              >
                Hapus
              </button>
              <button
                onClick={() => setShow(false)}
                className="text-white w-1/2  bg-primary gap-x-2 hover:bg-secondary transition-all duration-150 ease-in-out font-semibold "
              >
                close
              </button>
            </div>
            <div className="w-full min-h-12 py-3 gap-y-2 border flex gap-x-1 flex-wrap rounded-lg px-2 ">
              <input
                type="text"
                placeholder="nama"
                onChange={(e) => setNama(e.target.value)}
                className="outline-none w-full rounded-md border  h-10 px-2"
              />
              {pesanan.map((m) => (
                <div className="flex w-full  justify-between">
                  <p
                    key={m.id}
                    className="font-semibold  text-sm block border rounded-lg px-1"
                  >
                    {m.nama}
                  </p>
                  <div>
                    <input
                      type="text"
                      defaultValue={m.jml}
                      onChange={(e) => {
                        const updatedPesanan = pesanan.map((n) => {
                          if (n.id === m.id) {
                            return { ...n, jml: Number(e.target.value) };
                          }
                          return n;
                        });
                        setPesanan(updatedPesanan);
                      }}
                      className="border  outline-none rounded-lg px-1 w-12 text-center"
                    />
                  </div>
                </div>
              ))}
              <p className="font-semibold w-full text-sm block border rounded-lg px-1">
                Total :{" "}
                <FormatRupiah
                  value={pesanan.reduce(
                    (total, pesanan) => (total + pesanan.harga) * pesanan.jml,
                    0
                  )}
                />
              </p>
              <div className="flex w-full gap-x-2 justify-between">
                <button
                  onClick={() =>
                    setModal({
                      modalQris: !modal.modalQris,
                      data: pesanan.reduce(
                        (total, pesanan) =>
                          (total + pesanan.harga) * pesanan.jml,
                        0
                      ),
                    })
                  }
                  className="w-full btn py-2 font-semibold"
                >
                  Qris
                </button>
                <button
                  onClick={handleFinish}
                  className="w-full btn py-2 font-semibold"
                >
                  Cash
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="  ">
        <ProdukKasir
          pesanan={pesanan}
          setPesanan={setPesanan}
          loading={loading}
          setDatas={setDatas}
          data={data}
          handleGetData={handleGetData}
        />
        {total !== data?.length && (
          <div className="flex justify-center">
            <button
              onClick={handleGetData}
              className="btn px-10 font-medium rounded-lg py-1"
            >
              Lihat lebih banyak
            </button>
          </div>
        )}
      </div>
    </>
  );
}
