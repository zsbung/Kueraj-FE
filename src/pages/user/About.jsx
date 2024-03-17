import React, { useState } from "react";
import foto from "../../assets/img/about.png";
import kontak from "../../assets/img/kontak.png";
export default function About() {
  const [inputValue, setInputValue] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsapp = `https://api.whatsapp.com/send?phone=6281398253889&text=Nama%3A%20${inputValue.nama}%0APesan%3A%20${inputValue.pesan}`;
    window.open(whatsapp, "_blank");
  };
  return (
    <div className="mt-5 content ">
      <div className="flex flex-col gap-y-10">
        <div className="flex lg:flex-row flex-col  gap-x-2 ">
          <div className="lg:w-1/2 justify-center flex flex-col  gap-y-3 ">
            <h1 className="w-full text-[2rem] font-bold text-center capitalize">
              <span className="">Toko Kue RAJ</span>
            </h1>
            <p className="lg:text-[1.2rem]  font-medium ">
            Toko Kue RAJ adalah toko kue yang menghadirkan keajaiban kuliner dengan sentuhan yang unik dan inovatif. Didirikan dengan semangat untuk menghadirkan kebahagiaan dalam setiap potongan kue, kami menggabungkan keahlian kuliner yang tinggi dengan bahan-bahan berkualitas terbaik untuk menciptakan karya seni kuliner yang memukau.
            </p>
          </div>
          <div className="lg:w-1/2 hidden  lg:flex justify-center">
            <img className="h-[20rem] " src={foto} alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="lg:w-1/2 hidden lg:flex justify-center">
            <img className="p-0 lg:h-[24rem]" src={kontak} alt="" />
          </div>
          <div className="lg:w-1/2    text-xl flex flex-col gap-y-2">
            <h1 className="text-3xl font-bold text-center capitalize">
              Hubungi Kami
            </h1>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col gap-y-6"
            >
              <div className="relative group">
                <input
                  type="text"
                  id="input"
                  name="input"
                  className="border peer rounded-md transition-all duration-200 ease-in-out outline-none border-gray-300 px-3 py-2 w-full"
                  value={inputValue.email}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, email: e.target.value })
                  }
                />
                <label
                  htmlFor="input"
                  className={`absolute  left-3 peer-focus:top-0 py-[1px] peer-focus:bg-white  -translate-y-1/2  text-gray-500 text-sm transition-all transform origin-left pointer-events-none ${
                    inputValue.email
                      ? "top-0 -translate-y-1/2  bg-white"
                      : "top-1/2"
                  }`}
                >
                  Email
                </label>
              </div>
              <div className="relative group">
                <input
                  type="text"
                  id="input"
                  name="input"
                  className="border peer rounded-md transition-all duration-200 ease-in-out outline-none border-gray-300 px-3 py-2 w-full"
                  value={inputValue.nama}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, nama: e.target.value })
                  }
                />
                <label
                  htmlFor="input"
                  className={`absolute  left-3 peer-focus:top-0 py-[1px] peer-focus:bg-white  -translate-y-1/2  text-gray-500 text-sm transition-all transform origin-left pointer-events-none ${
                    inputValue.nama
                      ? "top-0 -translate-y-1/2  bg-white"
                      : "top-1/2"
                  }`}
                >
                  Nama
                </label>
              </div>
              <div className="relative group">
                <input
                  type="text"
                  id="input"
                  name="input"
                  className="border peer rounded-md transition-all duration-200 ease-in-out outline-none border-gray-300 px-3 py-2 w-full"
                  value={inputValue.pesan}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, pesan: e.target.value })
                  }
                />
                <label
                  htmlFor="input"
                  className={`absolute  left-3 peer-focus:top-0 py-[1px] peer-focus:bg-white  -translate-y-1/2  text-gray-500 text-sm transition-all transform origin-left pointer-events-none ${
                    inputValue.pesan
                      ? "top-0 -translate-y-1/2  bg-white"
                      : "top-1/2"
                  }`}
                >
                  Pesan
                </label>
              </div>
              <button
                type="submit"
                className="btn rounded-md font-semibold px-3 py-2"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
        <div className="">
          <h1 className="w-full text-[2rem] font-bold text-center capitalize">
            <span className="">Alamat</span>
          </h1>
          <iframe
            className="mb-5"
            id="alamat"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15860.509030273783!2d107.02497893955079!3d-6.377569299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6997a0d10838d7%3A0x4030a019051b8e91!2sRaj%20Cake%20And%20Cookies!5e0!3m2!1sid!2sid!4v1693138150989!5m2!1sid!2sid"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
