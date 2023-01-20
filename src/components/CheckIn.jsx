import { useState, useContext } from "react";
import { RoomContext } from "../context/RoomProvider";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Transition } from "@headlessui/react";

import { addDays } from "date-fns";
import { BsCalendar } from "react-icons/bs";
import { DateRange } from "react-date-range";

const CheckIn = ({
  startDate,
  setStartDate,
  setEndDate,
  openDateRange,
  setOpenDateRange,
}) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = ({ selection }) => {
    setSelectionRange(selection);
    if (selection.startDate.getTime() != selection.endDate.getTime()) {
      setEndDate(
        selection.endDate.toLocaleDateString("en-us", {
          month: "short",
          day: "numeric",
        })
      );
      setStartDate(
        selection.startDate.toLocaleDateString("en-us", {
          month: "short",
          day: "numeric",
        })
      );
      setOpenDateRange(false);
    }
  };
  return (
    <>
      <div
        className="w-full h-full cursor-pointer pt-1.5 px-4"
        onClick={() => setOpenDateRange(!openDateRange)}
      >
        <div className="font-semibold uppercase text-accent text-md flex items-center gap-2 select-none">
          <h3>Check In</h3>
          <BsCalendar size="14" />
        </div>
        <p className="text-gray-800">{startDate}</p>
      </div>

      <Transition
        show={openDateRange}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <DateRange
          className="absolute select-none left-0 font-bold transition-all bg-gray-100 shadow-xl top-20 rounded-xl w-[50%]"
          ranges={[selectionRange]}
          minDate={addDays(new Date(), 0)}
          onChange={handleSelect}
          months={2}
          direction="horizontal"
          rangeColors={["rgb(163 135 96)"]}
        />
      </Transition>
    </>
  );
};

export default CheckIn;
