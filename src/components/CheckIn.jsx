import { useState, useContext } from "react";
import { RoomContext } from "../context/RoomProvider";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";

import { DateRange } from "react-date-range";

const CheckIn = () => {
  const { openDateRange, setOpenDateRange, endDate, setEndDate } =
    useContext(RoomContext);
  const [choose, setChoose] = useState(false);

  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = ({ selection }) => {
    setSelectionRange(selection);
    if (selection.startDate.getTime() != selection.endDate.getTime()) {
      setChoose(true);
      setEndDate(selection.endDate.toDateString());

      setTimeout(() => {
        setOpenDateRange(false);
      }, 400);
    }
  };
  return (
    <>
      <p
        onClick={() => setOpenDateRange(!openDateRange)}
        className="cursor-pointer"
      >
        Check In {choose && selectionRange.startDate.toDateString()}
      </p>

      {openDateRange && (
        <DateRange
          className="absolute left-0 top-10 shadow-xl rounded-xl transition-all bg-gray-100 font-bold"
          ranges={[selectionRange]}
          minDate={addDays(new Date(), 0)}
          onChange={handleSelect}
          months={2}
          K
          direction="horizontal"
          rangeColors={["rgb(163 135 96)"]}
        />
      )}
    </>
  );
};

export default CheckIn;
