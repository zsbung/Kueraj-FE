// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import React, { useState } from "react";
// import { v4 } from "uuid";
// import { storage } from "../configs/Firebase";

// export default function handleAddImage(foto) {
//   const [urlImage, setUrlImage] = useState("");
//   const imageUpload = e.target.files[0];
//   if (!imageUpload) return;
//   const storageRef = ref(storage, `produk/${imageUpload.name + v4()}`);
//   uploadBytes(storageRef, imageUpload).then(() => {
//     getDownloadURL(storageRef).then((url) => {
//       console.log(url);
//     });
//   });
//   return { urlImage };
// }
