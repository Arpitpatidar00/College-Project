import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useAuth } from "../../Context/AuthContext";
import { useSelector } from "react-redux";
import { formatDistanceToNow, parseISO } from "date-fns";

import "./Placedata.css"; // Import CSS file for custom styles

export default function ShowComments() {
  const placeId = useSelector((state) => state.place.placeId);
  const { commentData } = useAuth();

  return (
    <section style={{ backgroundColor: "#ad655f" }}>
      <MDBContainer className="py-5" style={{ maxWidth: "auto" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10">
            <div className="comment-container">
              {commentData
                .filter(comment => comment.placeId === placeId) // Filter comments by placeId
                .map((comment) => (
                  <React.Fragment key={comment._id}>
                    <MDBCard className="text-dark comment-card">
                      <MDBCardBody className="p-4">
                        <div className="d-flex align-items-center mb-3">
                          <MDBCardImage
                            className="rounded-circle shadow-1-strong me-3"
                            src={`data:image/jpeg;base64,${comment.userProfile}`} // Display base64 image correctly
                            alt={comment.avatarUrl}
                            width="100"
                            height="100"
                          />
                          <MDBTypography tag="h6" className="fw-bold mb-1">
                            {comment.fullName}
                          </MDBTypography>
                          <p className="mb-0 ms-auto">
                            {formatDistanceToNow(parseISO(comment.createdAt), { addSuffix: true })} {/* Format timestamp */}
                            <span className="badge bg-primary ms-2">Pending</span>
                          </p>
                        </div>
                        <p className="mb-0">{comment.text}</p>
                        <div className="d-flex mt-3">
                          <a href="#!" className="link-muted me-2">
                            <MDBIcon fas icon="pencil-alt" />
                          </a>
                          <a href="#!" className="link-muted me-2">
                            <MDBIcon fas icon="redo-alt" />
                          </a>
                          <a href="#!" className="link-muted me-2">
                            <MDBIcon fas icon="heart" />
                          </a>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </React.Fragment>
                ))}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
