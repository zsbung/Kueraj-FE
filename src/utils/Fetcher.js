import { useEffect, useState } from "react";
import axiosInstance from "../configs/AxiosInstance";

export default function Fetcher(url) {
  const [data, setDatas] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    setFetched(true);
    setLoading(true);
    if (url) {
      axiosInstance
        .get(url)
        .then((res) => {
          setDatas(res.data);
          setLoading(false);
        })
        .catch((error) => setError("gagal mendapatkan data..."))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [fetched]);
  return { fetched, error, loading, data, setFetched };
}
