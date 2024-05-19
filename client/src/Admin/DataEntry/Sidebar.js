import React from "react";
import { useAdmin } from "../../Context/AdminContext";
import "./admin.css";

function Sidebar() {
  const { placedata, setPlacedata, userdata, setUserdata, setVideoUpload } = useAdmin();

  function userdataon(e) {
    setPlacedata(false);
    setUserdata(true);
  }
  function placedataon(e) {
    setPlacedata(true);
    setUserdata(false);
  }

  function videouploadon(e) {
    setPlacedata(false);
    setUserdata(false);
    setVideoUpload(true); // Set the state for Video Upload
  }

  return (
    <div className="app">
      <div className="sidebar bg-green-500">
        <h2 className="mt-10 mb-10 text-2xl text-center text-white">
          <b>Welcome Admin Panel</b>
        </h2>
        <div id="hrdiv">
          <hr />
        </div>

        <ul className="buttonsdiv">
          <button
            onClick={placedataon}
            className={`button  text-white ${placedata ? "active" : ""}`}
          >
            <b>Place Control</b>
          </button>
          <button
            onClick={userdataon}
            className={`button  text-white ${userdata ? "active" : ""}`}
          >
            <b>User Control</b>
          </button>
          <button
            onClick={videouploadon}
            className={`button  text-white ${!placedata && !userdata ? "active" : ""}`}
          >
            <b>Video Upload</b>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
