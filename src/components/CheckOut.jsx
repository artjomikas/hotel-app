import { useContext, useEffect, useState } from "react";
import { RoomContext } from "../context/RoomProvider";
import { BsCalendar } from "react-icons/bs";

const CheckOut = ({ endDate, openDateRange, setOpenDateRange }) => {
  return (
    <>
      <div
        className="w-full h-full cursor-pointer pt-1.5 px-4"
        onClick={() => setOpenDateRange(!openDateRange)}
      >
        <div className="font-semibold uppercase text-accent text-md flex items-center gap-2 select-none">
          <h3>Check out</h3>
          <BsCalendar size="14" />
        </div>
        <p className="text-gray-800">{endDate}</p>
      </div>
    </>
  );
};

export default CheckOut;
