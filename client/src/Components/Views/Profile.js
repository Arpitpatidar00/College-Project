// Profile.js
import React from "react";
import ReactRoundedImage from "react-rounded-image";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import "../Views/Profile.css";
import { useAuth } from "../../Context/AuthContext";

const Profile = () => {
  const { userData } =useAuth();

  return (
    <div id="profile">
      <div id="profile-img">
        <ReactRoundedImage image={userData.data._doc.image} />{" "}
        {/* Use userData.data.image */}
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
        <h1>Name:{userData.data._doc.username}</h1>{" "}
        {/* Use userData.data.username */}
        <h3>Email:{userData.data._doc.email}</h3>{" "}
        {/* Use userData.data.email */}
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default Profile;
