import React from "react";

export default function Button({ handleOnlick, nama, style }) {
  return (
    <button
      onClick={handleOnlick}
      className={`
    font-bold 
    ${style} 
    flex 
    justify-center 
    items-center
    
    `}
    >
      {nama}
    </button>
  );
}
