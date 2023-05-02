import React from "react";

export default function CardDashboard({ total, name }) {
  return (
    <div className="w-60 h-32 gap-x-4 flex bg-white border border-primary shadow-md items-center px-5 justify-between rounded-lg">
      <div className="grid gap-y-2">
        <p className="lg:text-xl font-bold ">{total}</p>
        <p className="text-md text-black/70 capitalize">{name}</p>
      </div>
      <div className="h-12 w-12  rounded-full border-2 border-t-4 border-t-primary  flex justify-center items-center text-md font-semibold">
        70%
      </div>
    </div>
  );
}
