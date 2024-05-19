import React from "react";
// import './Adminpanel.css'
import Sidebar from "./Sidebar";
import { useAdmin } from "../../Context/AdminContext";
import Placedata from "./Placedata";
import Userdata from "./Userdata";
import VideoUpload from "./Videospage.js";
function Adminpanel() {
  const { placedata, userdata } = useAdmin();

  return (
    <>
      <div className="app">
        <Sidebar />

        <div className="main-content">
          {placedata ? (
            <>
              <Placedata />
            </>
          ) : (
            <></>
          )}
          {userdata ? (
            <>
              <Userdata />
            </>
          ) : (
            <>
              <VideoUpload />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Adminpanel;
