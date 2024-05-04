import React, { useState } from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import axios from "axios"; // Import Axios
import { useAuth } from "../../Context/AuthContext";

const DefaultComponent = () => {
  const { userData } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!userData || !userData.data) {
    // Handle the case where userData or userData.data is null
    return <div>Loading...</div>;
  }

  const handlePostComment = async (commentText) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:4000/comments", {
        userId: userData.data._doc.userId,
        username: userData.data._doc.username,
        image: userData.data._doc.image,
        text: commentText,
      });

      if (response.status === 201) {
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
