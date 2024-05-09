import React, { useState, useEffect } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../Guide/sliderimg1.jpg";
import { IoIosCall } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import axios from "axios";

const Guide = () => {
  const [showCallDescription, setShowCallDescription] = useState(false);
  const [showAddDescription, setShowAddDescription] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [guideData, setGuideData] = useState(null); // State to store guide data

  useEffect(() => {
    // Function to fetch guide data from the backend
    const fetchGuideData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/submit/guide"); // Assuming the backend API endpoint is '/api/guides'
        setGuideData(response.data.guideData); // Set guide data in state
        console.log(response.data.guideData.userData.data.image)

      } catch (error) {
        console.error("Error fetching guide data:", error);
      }
    };

    fetchGuideData(); // Call the function to fetch guide data when the component mounts
  }, []);

  const toggleCallDescription = () => {
    setShowCallDescription((prev) => !prev);
    // Hide the Add Description when Call Description is shown
    setShowAddDescription(false);
  };

  const toggleAddDescription = () => {
    setShowAddDescription((prev) => !prev);
    // Hide the Call Description when Add Description is shown
    setShowCallDescription(false);
  };

  const handleImageHover = () => {
    setIsImageHovered(true);
  };

  const handleImageLeave = () => {
    setIsImageHovered(false);
  };

  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center" }}
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageLeave}
      >
        <ReactRoundedImage
          image={guideData.userData.data.image}
          imageWidth={isImageHovered ? 250 : 150} // Conditionally set the image width based on hover state
          imageHeight={isImageHovered ? 250 : 150} // Conditionally set the image height based on hover state
        />
        <h1 style={{ marginLeft: "10px" }}>Name</h1>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <IoIosCall
            onClick={toggleCallDescription}
            size={40} // Adjust the size as needed
            style={{ cursor: "pointer" }}
          />
          {showCallDescription && (
            <div>
              <p>This is the Call Description content.</p>
              {guideData && (
                <>
                  <h1>Email: {guideData.userData.data.email}</h1>
                  <h1>Phone NO.: {guideData.phone}</h1>
                </>
              )}
            </div>
          )}
        </div>
        <div>
          <IoAddSharp
            onClick={toggleAddDescription}
            size={40} // Adjust the size as needed
            style={{ cursor: "pointer" }}
          />
          {showAddDescription && (
            <div>
              <p>This is the Add Description content.</p>
              {guideData && (
                <>
                  <h1>Achievements: {guideData.achievements}</h1>
                  <h1>Qualifications: {guideData.qualifications}</h1>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Guide;
