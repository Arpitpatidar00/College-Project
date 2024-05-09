// GuideInterface.js
import React, { useState } from "react";
import axios from "axios";
import "../Place.css";

import { useAuth } from "../../../Context/AuthContext";

const GuideInterface = () => {
  const [availability, setAvailability] = useState(false);
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [hours, setHours] = useState("");
  const [customPlace, setCustomPlace] = useState("");
  const [submitting, setSubmitting] = useState(false); // State to track submission status

  const { placeId,setPlaceId,userData } = useAuth(); // Using the useAuth hook to get placeId


const submitData = async () => {
  try {
    const response = await axios.post("http://localhost:4000/submit/submit", {
      placeId: customPlace || placeId,
      availability,
      time,
      price,
      hours,
      customPlace,
      userData,
    });
    setPlaceId(response.data.guideData._id);
    return response.data.dataId; // Return the ID from the response
  } catch (error) {
    console.error("Error submitting data:", error);
  }
};


  const deleteData = async () => {
    try {
      await axios.delete(`http://localhost:4000/submit/delete/${placeId}`);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleToggleAvailability = async () => {
    if (!availability) {
      try {
      } catch (error) {
        console.error("Error toggling availability:", error);
      } finally {
        setSubmitting(false); // Reset submitting state
      }
    } else {
      if (placeId) {
        await deleteData();
      }
    }
    setAvailability(!availability);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (availability) {
      submitData(); 
      setTime("");
      setPrice("");
      setHours("");
      setCustomPlace("");
    } else {
      console.log("Cannot submit form. User is not available.");
    }
  };

  return (
    <>
      <div className="driver-interface">
        <h1>Driver Interface</h1>

        <div className="switch">
          <label>
            Availability:{" "}
            <input
              type="checkbox"
              checked={availability}
              onChange={handleToggleAvailability}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="customPlace">Custom Place:</label>
            <input
              type="text"
              id="customPlace"
              value={customPlace}
              onChange={(e) => setCustomPlace(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="hours">Hours:</label>
            <input
              type="number"
              id="hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default GuideInterface;
