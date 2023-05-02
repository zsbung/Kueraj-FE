import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../configs/Firebase";
import React, { useState } from "react";
import { v4 } from "uuid";

export default function HandleFotoFireBase({ file }) {
  const [link, setLink] = useState();
  if (!file) return;
  const storageRef = ref(storage, `produk/${imageUpload.name + v4()}`);
  uploadBytes(storageRef, imageUpload).then(() => {
    getDownloadURL(storageRef).then((url) => {
      setLink(url);
    });
  });
  return { link };
}
