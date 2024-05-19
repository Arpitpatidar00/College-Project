import React, { useState } from "react";
import axios from "axios";

const VideoUpload = () => {
  const [videos, setVideos] = useState([null, null, null]);
  const [titles, setTitles] = useState(["", "", ""]);
  const [descriptions, setDescriptions] = useState(["", "", ""]);

  const handleFileChange = (e, index) => {
    const newVideos = [...videos];
    newVideos[index] = e.target.files[0];
    setVideos(newVideos);
  };

  const handleTitleChange = (e, index) => {
    const newTitles = [...titles];
    newTitles[index] = e.target.value;
    setTitles(newTitles);
  };

  const handleDescriptionChange = (e, index) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = e.target.value;
    setDescriptions(newDescriptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataArray = videos.map((video, index) => {
      const formData = new FormData();
      formData.append("title", titles[index]);
      formData.append("description", descriptions[index]);
      formData.append("video", video);
      return formData;
    });

    try {
      await Promise.all(
        formDataArray.map((formData) =>
          axios.post("http://localhost:4000/video", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        )
      );
      alert("Videos uploaded successfully");
    } catch (error) {
      console.error("Error uploading videos:", error);
      alert("Failed to upload videos");
    }
  };

  return (
    <div>
      <h2>Upload Videos</h2>
      <form onSubmit={handleSubmit}>
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            <div>
              <label>Choose Video {index + 1}:</label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleFileChange(e, index)}
              />
            </div>
            <div>
              <label>Title:</label>
              <input
                type="text"
                value={titles[index]}
                onChange={(e) => handleTitleChange(e, index)}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                value={descriptions[index]}
                onChange={(e) => handleDescriptionChange(e, index)}
              ></textarea>
            </div>
          </div>
        ))}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default VideoUpload;
