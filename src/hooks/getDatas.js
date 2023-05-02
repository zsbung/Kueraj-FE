import { useEffect, useState } from "react";
import Get from "../api/get.api";

export default function getDatas(fd) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    if (fd) {
      setLoading(true);
      fd()
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => setError(err))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [fetched]);
  return { loading, data, error, setFetched, fetched };
}
