import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./Feedback.css";

export default function Feedback() {
  const [isVisible, setIsVisible] = useState(false);
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const feedbackSection = document.getElementById("Feedback");
      if (feedbackSection) {
        const { top } = feedbackSection.getBoundingClientRect();
        const isVisible = top < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await fetch("http://localhost:4000/Feedback");
        if (response.ok) {
          const data = await response.json();
          setFeedbackData(data);
        } else {
          console.error("Failed to fetch feedback data");
        }
      } catch (error) {
        console.error("Error fetching feedback data:", error);
      }
    };

    fetchFeedbackData();
  }, []);

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const postedTime = new Date(timestamp);
    const timeDiff = now.getTime() - postedTime.getTime();
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  };

  return (
    <>
      <div id="Feedback">
        <section className={`vh-100 feedback-section ${isVisible ? "visible" : ""}`}>
<MDBContainer className="py-2" >
            <MDBRow className="justify-content-center">
              <MDBCol md="11" lg="9" xl="7">
                <div className="d-flex flex-wrap">
                  {feedbackData.map((feedbackItem) => (
                    <div key={feedbackItem._id} className="comment-card">
                      <img
                        className="rounded-circle shadow-1-strong me-3"
                        src={`data:image/png;base64,${feedbackItem.userData.image}`}
                        alt="avatar"
                        width="65"
                        height="65"
                      />
                      <MDBCard className="w-100">
                        <MDBCardBody className="p-4">
                          <div>
                            <MDBTypography tag="h5">
                              {feedbackItem.userData.username}
                            </MDBTypography>
                            <p className="small">
                              {getTimeAgo(feedbackItem.createdAt)}
                            </p>
                            <p>{feedbackItem.feedback}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <a href="#!" className="link-muted me-2">
                                  <MDBIcon fas icon="thumbs-up me-1" />
                                  {feedbackItem.likes}
                                </a>
                                <a href="#!" className="link-muted">
                                  <MDBIcon fas icon="thumbs-down me-1" />
                                  {feedbackItem.dislikes}
                                </a>
                              </div>
                              <a href="#!" className="link-muted">
                                <MDBIcon fas icon="reply me-1" /> Reply
                              </a>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  ))}
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </>
  );
}
