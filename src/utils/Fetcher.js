import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Fetcher(url) {
  const [data, setDatas] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    setFetched(true);
    if (url) {
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          setDatas(res.data);
          setLoading(false);
        })
        .catch((error) => setError(error.response.data.message))
        .finally(() => {
          setFetched(false);
        });
    }
  }, []);
  return { fetched, error, loading, data };
}
