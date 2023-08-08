import React from "react";
import { MdErrorOutline } from "react-icons/md";
import axiosInstance from "../configs/AxiosInstance";
export default function ModalHapus({
  setFetched,
  setModal,
  setMessage,
  datas,
}) {
  const handleDelete = (e) => {
    const { item, id } = datas;
    axiosInstance.delete(`${item}/${id}`).then((res) => {
      setMessage(res.data.message);
      setFetched(false);
      setModal(false);
    });
  };

  return (
    <div className="h-screen flex backdrop-blur-sm z-[9999] justify-center items-center top-0 left-0 w-full bg-black/30 fixed ">
      <div className="bg-white w-[25rem] h-[10rem] py-5 rounded-lg flex flex-col justify-around items-center">
        <div>
          <MdErrorOutline className="text-red-600" size={50} />
        </div>

        <div className="flex flex-col justify-center gap-y-1">
          <p className="text-[16px]">Yakin untuk menghapus?</p>
          <div className="flex gap-x-2 justify-center">
            <button
              onClick={handleDelete}
              className="btn px-3 py-2 text-lg font-semibold rounded-lg"
            >
              Hapus
            </button>
            <button
              onClick={() => setModal(false)}
              className="bg-red-600 text-white hover:bg-red-700 px-3 py-2 text-lg font-semibold rounded-lg"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
