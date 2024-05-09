// Profile.js
import React, { useState } from "react";
import axios from "axios";
import ReactRoundedImage from "react-rounded-image";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { MdWorkOutline } from "react-icons/md";
import "../Views/Profile.css";
import { useAuth } from "../../Context/AuthContext";
import GuideInterface from "../PlaceData/Guide/GuideInterface.js";

const Profile = () => {
  const { userData,placeId } = useAuth();
  const [availability, setAvailability] = useState(false); // State to track availability
  const [showGuideInterface, setShowGuideInterface] = useState(false);


  const toggleGuideInterface = async () => {
    setShowGuideInterface(!showGuideInterface);
    setAvailability(!availability);

    if (showGuideInterface) {
      try {
        await axios.delete(`http://localhost:4000/submit/delete/${placeId}`);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  const isGuideOrDriver =
    userData && (userData.role === "guide" || userData.role === "driver");

  return (
    <div id="profile">
      <div id="profile-img">
        <ReactRoundedImage image={userData.data._doc.image} />
      </div>
      <div>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
        </Box>
      </div>
      <div id="data">
        <h1>Name: {userData.data._doc.username}</h1>
        <h3>Email: {userData.data._doc.email}</h3>
        <button onClick={toggleGuideInterface}>
          {availability ? "Available" : "Not Available"} {/* Display availability status */}
        </button>
        {isGuideOrDriver && (
          <div>
            <button onClick={toggleGuideInterface}>
              <MdWorkOutline />
            </button>
            {showGuideInterface && <GuideInterface />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
