import { useContext, useEffect, useState } from "react";
import { RoomContext } from "../context/RoomProvider";

const CheckOut = () => {
  const { endDate, setOpenDateRange, openDateRange } = useContext(RoomContext);

  return (
    <>
      <p
        onClick={() => setOpenDateRange(!openDateRange)}
        className="cursor-pointer"
      >
        Check Out {endDate}
      </p>
    </>
  );
};

export default CheckOut;
