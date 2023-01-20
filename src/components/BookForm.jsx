import {
  AdultsDropdown,
  KidsDropdown,
  CheckIn,
  CheckOut,
  RoomDropdown,
} from "../index";
import { useState, useRef } from "react";
import { addDays } from "date-fns";

const BookForm = () => {
  const [openDateRange, setOpenDateRange] = useState(false);
  const [adults, setAdults] = useState(1);
  const [room, setRoom] = useState("Superior Room");

  const [startDate, setStartDate] = useState(
    new Date().toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
    })
  );

  const [endDate, setEndDate] = useState(
    addDays(new Date(), 1).toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
    })
  );

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <form className="h-[300px] bg-white w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r ">
          <CheckIn
            startDate={startDate}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
            openDateRange={openDateRange}
            setOpenDateRange={setOpenDateRange}
          />
        </div>

        <div className="flex-1 border-r">
          <CheckOut
            endDate={endDate}
            openDateRange={openDateRange}
            setOpenDateRange={setOpenDateRange}
          />
        </div>

        <div className="lg:w-[15%] border-r">
          <AdultsDropdown adults={adults} setAdults={setAdults} />
        </div>

        <div className="flex-1 border-r">
          <RoomDropdown room={room} setRoom={setRoom} />
        </div>

        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="btn btn-primary text-xl"
        >
          BOOK NOW
        </button>
      </div>
    </form>
  );
};

export default BookForm;
