// import React, { useState, useEffect, useContext } from "react";
// import Comment from "./Comment.js";
// import "./Placedata.css";
// import { RiImageAddFill } from "react-icons/ri";
// import { GrFormClose } from "react-icons/gr";
// import Driver from "./Driver/Driver.js";
// import Guide from "./Guide/Guide.js";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../../createContext.js";
// import axios from "axios";
// import Rating from "react-rating";
// import { useAuth } from "../context/AuthContext.js";

// const ImageDetails = () => {
//   const { userData } = useAuth();
//   const { id } = useParams();
//   const { searchData } = useContext(AppContext);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [previousImages, setPreviousImages] = useState([]);
//   const [showGuideProfile, setShowGuideProfile] = useState(false);
//   const [showDriverProfile, setShowDriverProfile] = useState(false);
//   const [selectedData, setSelectedData] = useState(null);
//   const [Image, setImage] = useState(null);

//   const [loadingComments, setLoadingComments] = useState(true);
//   const { setCommentData } = useContext(AppContext); // Use setCommentData from context

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/comments`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch comment data");
//         }
//         const data = await response.json();
//         console.log("Fetched comment data:", data);
//         setCommentData(data); // Pass fetched comment data through context
//       } catch (error) {
//         console.error("Error fetching comment data:", error);
//       }
//     };
//     fetchimage()
//     fetchData();
//   }, [id, setCommentData]);

//   useEffect(() => {
//     const selectedImageData = searchData.find((image) => image._id === id);
//     setSelectedData(selectedImageData);
//     // Fetch data for selected image

//     const fetchimage = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/uplode`);
//         setImage(response.data)
//       }
//     }
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/add/${id}`);

//         if (response.data && Array.isArray(response.data.images)) {
//           setSelectedData(response.data);
//           console.log("Image data from backend:", response.data.images);
//           setPreviousImages(response.data.images); // Update previousImages state with fetched images
//         } else {
//           console.error("Invalid response format:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching data for selected id:", error);
//       } finally {
//         setLoadingComments(false); // Update loading state regardless of success or failure
//       }
//     };

//     fetchData();
//   }, [id, searchData]);

//   const handleImageSelect = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = async () => {
//         const base64Image = reader.result;
//         console.log(reader.result)
//         try {
//           const response = await axios.post(`http://localhost:4000/upload`, {
//             image: base64Image,
//           });
//           if (response.status === 200) {
//             const uploadedImagePath = response.data.imagePath;
//             setSelectedImage(uploadedImagePath);
//             setPreviousImages((prevImages) => [uploadedImagePath, ...prevImages]);
//           }
//         } catch (error) {
//           console.error("Error uploading image:", error);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };;

//   return (
//     <div className="placecontainer">
//       <div className="image-container">
//         {selectedData && (
//           <img
//             src={selectedData.image}
//             alt="Cardimage"
//             className="card-image"
//           />
//         )}
//         <h1 className="place-name">
//           {selectedData ? selectedData.placeName : "Loading..."}
//         </h1>
//       </div>

//       <div id="place">
//         <h1 className="cityname">
//           {selectedData ? selectedData.cityName : "Loading..."}
//         </h1>

//         <h1 className="title">
//           {selectedData ? selectedData.title : "Loading..."}
//         </h1>

//         <h1 className="description">
//           {selectedData ? selectedData.description : "Loading..."}
//         </h1>

//         <div id="buttonscontainer">
//           <div className="Guide">
//             <h1 onClick={() => setShowGuideProfile(!showGuideProfile)}>
//               Guide{" "}
//             </h1>
//             {showGuideProfile && (
//               <div className="profile-box">
//                 <Guide />
//                 <button onClick={() => setShowGuideProfile(false)}>
//                   <GrFormClose />
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="Driver">
//             <h1 onClick={() => setShowDriverProfile(!showDriverProfile)}>
//               Driver{" "}
//             </h1>
//             {showDriverProfile && (
//               <div className="profile-box">
//                 <Driver />
//                 <p>Driver profile content goes here</p>
//                 <button onClick={() => setShowDriverProfile(false)}>
//                   <GrFormClose />
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <h1> Add Your experience</h1>

//       <div id="experience">
//         <div className="experience-share">
//           <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
//             <RiImageAddFill size={30} />
//           </label>
//           <h1>Happy Customers Images</h1>
//         </div>
//         <div id="placeuploadedimages">
//           {previousImages.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Previous ${index + 1}`}
//               className="bd-placeholder-img img-thumbnail"
//               style={{ maxWidth: 200, maxHeight: 150 }}
//               onMouseOver={(e) => {
//                 e.target.style.maxWidth = "400px";
//                 e.target.style.maxHeight = "400px";
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.maxWidth = "200px";
//                 e.target.style.maxHeight = "150px";
//               }}
//             />
//           ))}
//         </div>
//         <input
//           id="imageUpload"
//           type="file"
//           accept="image/*"
//           style={{ display: "none" }}
//           onChange={handleImageSelect}
//         />
//         {/* Display selected image */}
//         {selectedImage && (
//           <img
//             src={selectedImage}
//             alt="Selected"
//             className="bd-placeholder-img img-thumbnail"
//             style={{ maxWidth: 200, maxHeight: 150 }}
//             onMouseOver={(e) => {
//               e.target.style.maxWidth = "400px";
//               e.target.style.maxHeight = "400px";
//             }}
//             onMouseOut={(e) => {
//               e.target.style.maxWidth = "200px";
//               e.target.style.maxHeight = "150px";
//             }}
//           />
//         )}
//       </div>
//       <div>
//         <h1>Rating</h1>
//         <Rating
//           initialRating={3} // Set the initial rating value
//           emptySymbol={<i className="far fa-star"></i>} // Set the empty star icon
//           fullSymbol={<i className="fas fa-star"></i>} // Set the filled star icon
//           onChange={(rating) => console.log("New rating:", rating)} // Handle onChange event
//         />
//       </div>
//       {!loadingComments && selectedData && (
//         <div>
//           <h1>Comments</h1>
//           <Comment userData={userData} />
//         </div>
//       )}

//       {/* Show loading indicator while comments are being fetched */}
//       {loadingComments && <p>Loading comments...</p>}
//     </div>
//   );
// };

// export default ImageDetails;
import React, { useState, useEffect } from "react";
import Comment from "./Comment.js";
import "./Placedata.css";
import { RiImageAddFill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import Driver from "./Driver/Driver.js";
import Guide from "./Guide/Guide.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "react-rating";
import { useAuth } from "../../Context/AuthContext.js";

const ImageDetails = () => {
  const { userData, searchData, setCommentData } = useAuth();
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [previousImages, setPreviousImages] = useState([]);
  const [showGuideProfile, setShowGuideProfile] = useState(false);
  const [showDriverProfile, setShowDriverProfile] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [Image, setImage] = useState(null);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/comments`);
        if (!response.ok) {
          throw new Error("Failed to fetch comment data");
        }
        const data = await response.json();
        console.log("Fetched comment data:", data);
        setCommentData(data); // Pass fetched comment data through context
      } catch (error) {
        console.error("Error fetching comment data:", error);
      }
    };
    fetchData();
  }, [id, setCommentData]);
  console.log(Image);
  useEffect(() => {
    const selectedImageData = searchData.find((image) => image._id === id);
    setSelectedData(selectedImageData);

    const fetchimage = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/upload`);
        setImage(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };
    fetchimage();

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/add/${id}`);

        if (response.data && Array.isArray(response.data.images)) {
          setSelectedData(response.data);
          console.log("Image data from backend:", response.data.images);
          setPreviousImages(response.data.images); // Update previousImages state with fetched images
        } else {
          console.error("Invalid response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data for selected id:", error);
      } finally {
        setLoadingComments(false); // Update loading state regardless of success or failure
      }
    };

    fetchData();
  }, [id, searchData]);

  const handleImageSelect = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result;
        console.log(reader.result);
        try {
          const response = await axios.post(`http://localhost:4000/upload`, {
            image: base64Image,
          });
          if (response.status === 200) {
            const uploadedImagePath = response.data.imagePath;
            setSelectedImage(uploadedImagePath);
            setPreviousImages((prevImages) => [
              uploadedImagePath,
              ...prevImages,
            ]);
          }
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="placecontainer">
      <div className="image-container">
        {selectedData && (
          <img
            src={selectedData.image}
            alt="Cardimage"
            className="card-image"
          />
        )}
        <h1 className="place-name">
          {selectedData ? selectedData.placeName : "Loading..."}
        </h1>
      </div>

      <div id="place">
        <h1 className="cityname">
          {selectedData ? selectedData.cityName : "Loading..."}
        </h1>

        <h1 className="title">
          {selectedData ? selectedData.title : "Loading..."}
        </h1>

        <h1 className="description">
          {selectedData ? selectedData.description : "Loading..."}
        </h1>

        <div id="buttonscontainer">
          <div className="Guide">
            <h1 onClick={() => setShowGuideProfile(!showGuideProfile)}>
              Guide{" "}
            </h1>
            {showGuideProfile && (
              <div className="profile-box">
                <Guide />
                <button onClick={() => setShowGuideProfile(false)}>
                  <GrFormClose />
                </button>
              </div>
            )}
          </div>

          <div className="Driver">
            <h1 onClick={() => setShowDriverProfile(!showDriverProfile)}>
              Driver{" "}
            </h1>
            {showDriverProfile && (
              <div className="profile-box">
                <Driver />
                <p>Driver profile content goes here</p>
                <button onClick={() => setShowDriverProfile(false)}>
                  <GrFormClose />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <h1> Add Your experience</h1>

      <div id="experience">
        <div className="experience-share">
          <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
            <RiImageAddFill size={30} />
          </label>
          <h1>Happy Customers Images</h1>
        </div>
        <div id="placeuploadedimages">
          {previousImages.map((image, index) => (
            <img
              key={index}
              src={Image.imageString}
              alt={`Previous ${index + 1}`}
              className="bd-placeholder-img img-thumbnail"
              style={{ maxWidth: 200, maxHeight: 150 }}
              onMouseOver={(e) => {
                e.target.style.maxWidth = "400px";
                e.target.style.maxHeight = "400px";
              }}
              onMouseOut={(e) => {
                e.target.style.maxWidth = "200px";
                e.target.style.maxHeight = "150px";
              }}
            />
          ))}
        </div>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageSelect}
        />
        {/* Display selected image */}
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            className="bd-placeholder-img img-thumbnail"
            style={{ maxWidth: 200, maxHeight: 150 }}
            onMouseOver={(e) => {
              e.target.style.maxWidth = "400px";
              e.target.style.maxHeight = "400px";
            }}
            onMouseOut={(e) => {
              e.target.style.maxWidth = "200px";
              e.target.style.maxHeight = "150px";
            }}
          />
        )}
      </div>
      <div>
        <h1>Rating</h1>
        <Rating
          initialRating={3} // Set the initial rating value
          emptySymbol={<i className="far fa-star"></i>} // Set the empty star icon
          fullSymbol={<i className="fas fa-star"></i>} // Set the filled star icon
          onChange={(rating) => console.log("New rating:", rating)} // Handle onChange event
        />
      </div>
      {!loadingComments && selectedData && (
        <div>
          <h1>Comments</h1>
          <Comment userData={userData} />
        </div>
      )}

      {/* Show loading indicator while comments are being fetched */}
      {loadingComments && <p>Loading comments...</p>}
    </div>
  );
};

export default ImageDetails;