import React, { useState } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../Guide/sliderimg1.jpg";
import { IoIosCall } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";

const Driver = () => {
  const [showCallDescription, setShowCallDescription] = useState(false);
  const [showAddDescription, setShowAddDescription] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

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
          image={MyPhoto}
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
              <h1>Email</h1>
              <h1>Phone NO.</h1>
            </div>
          )}
        </div>
        <div>
          <IoAddSharp
            onClick={toggleAddDescription}
            size={40} // Adjust the size as needed
            style={{ cursor: "pointer" }}
          />
          {showAddDescription &&(


           <div>
              <p>This is the Call Description content.</p>
              <h1>Achivements</h1>
              <h1>Qualifications</h1>
            </div>
)}
        </div>
      </div>
    </div>
  );
};

export default Driver;
