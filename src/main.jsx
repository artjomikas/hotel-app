import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import RoomProvider from "./context/RoomProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RoomProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RoomProvider>
);
