import React, { useState } from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

const DefaultComponent = ({ placeName }) => {
  const { userData, searchData } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!userData || !userData.data || !searchData || !placeName) {
    return <div>Loading...</div>;
  }

  const handlePostComment = async (commentData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Extract necessary data from the commentData
      const { text, userId, comId, avatarUrl, userProfile, fullName } = commentData;

      const response = await axios.post("http://localhost:4000/comments", {
        text,
        userId,
        comId,
        avatarUrl,
        userProfile,
        fullName,
        placeName, // Include placeName in the payload
      });

      if (response.status !== 201) {
        throw new Error("Failed to post comment");
      }

      // Optionally, you can handle the successful post here
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <CommentSection
        currentUser={{
          currentUserId: userData.data._doc.userId,
          currentUserImg: userData.data._doc.image,
          currentUserProfile: userData.data._doc.image,
          currentUserFullName: userData.data._doc.username,
        }}
        logIn={{
          loginLink: "http://localhost:3001/login",
          signupLink: "http://localhost:3001/",
        }}
        onSubmitAction={handlePostComment}
      />
    </div>
  );
};

export default DefaultComponent;
