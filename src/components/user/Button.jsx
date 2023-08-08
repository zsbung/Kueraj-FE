import React from "react";

export default function Button({ icon, handleOnlick, nama, style }) {
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
      {icon && icon}
      {nama}
    </button>
  );
}
