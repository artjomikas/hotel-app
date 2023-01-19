import { useState, createContext } from "react";
import { roomData } from "../data";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [openDateRange, setOpenDateRange] = useState(false);
  const [endDate, setEndDate] = useState("");

  return (
    <RoomContext.Provider
      value={{ openDateRange, setOpenDateRange, rooms, endDate, setEndDate }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
