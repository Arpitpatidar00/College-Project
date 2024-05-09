import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../Views/Screen.css";

function SignUp() {
  const navigate = useNavigate();



  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user", // Default role is 'user'
  });

  const [preview, setPreview] = useState("");
  const [additionalFields, setAdditionalFields] = useState({
    aadharNumber: "",
    certificationAddress: "",
    licenceNumber: "",
    aadharFile: null,
    licenceFile: null,
    certificationFile: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Encode image data as base64
      const imageData = preview.split(",")[1];
      console.log(imageData);
      // Convert files to base64
      const aadharFileData = additionalFields.aadharFile
        ? await fileToBase64(additionalFields.aadharFile)
        : null;
      const licenceFileData = additionalFields.licenceFile
        ? await fileToBase64(additionalFields.licenceFile)
        : null;
      const certificationFileData = additionalFields.certificationFile
        ? await fileToBase64(additionalFields.certificationFile)
        : null;

      // Send data to the server
      const response = await axios.post("http://localhost:4000/auth/register", {
        ...formData,
        ...additionalFields,
        image: imageData,

        aadharFile: aadharFileData,
        licenceFile: licenceFileData,
        certificationFile: certificationFileData,
      });

      alert("Successfully registered user.");
      console.log(response.data);

      // Redirect to the login page
      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Failed to register user. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      // Handle case where no file is selected
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result;
      setPreview(base64data);
    };
    reader.readAsDataURL(file);
  };

  const handleAdditionalInputChange = (e) => {
    const { name, value } = e.target;
    setAdditionalFields({
      ...additionalFields,
      [name]: value,
    });
  };

  const handleAdditionalFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setAdditionalFields({
      ...additionalFields,
      [fieldName]: file,
    });
  };

  return (
    <div id="maindiv">
      <div id="container-login">
        <h1>Sign up</h1>
        <div className="form-group">
          <label>Role:</label>
          <div>
            <input
              type="radio"
              id="user"
              name="role"
              value="user"
              checked={formData.role === "user"}
              onChange={handleInputChange}
            />
            <label htmlFor="user">User</label>
          </div>
          <div>
            <input
              type="radio"
              id="driver"
              name="role"
              value="driver"
              checked={formData.role === "driver"}
              onChange={handleInputChange}
            />
            <label htmlFor="driver">Driver</label>
          </div>
          <div>
            <input
              type="radio"
              id="guide"
              name="role"
              value="guide"
              checked={formData.role === "guide"}
              onChange={handleInputChange}
            />
            <label htmlFor="guide">Guide</label>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Common fields */}
          <div className="form-group">
            <label>Username:</label>
            <input
              id="input"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address:</label>
            <input
              id="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              id="input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Role-specific fields */}
          {formData.role === "guide" && (
            <>
              <div className="form-group">
                <label>Aadhar Number:</label>
                <input
                  type="text"
                  name="aadharNumber"
                  value={additionalFields.aadharNumber}
                  onChange={handleAdditionalInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Aadhar File:</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleAdditionalFileChange(e, "aadharFile")}
                  required
                />
              </div>
              <div className="form-group">
                <label>Certification Address:</label>
                <input
                  type="text"
                  name="certificationAddress"
                  value={additionalFields.certificationAddress}
                  onChange={handleAdditionalInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Certification File:</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) =>
                    handleAdditionalFileChange(e, "certificationFile")
                  }
                  required
                />
              </div>
            </>
          )}
          {formData.role === "driver" && (
            <>
              <div className="form-group">
                <label>Aadhar Number:</label>
                <input
                  type="text"
                  name="aadharNumber"
                  value={additionalFields.aadharNumber}
                  onChange={handleAdditionalInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Aadhar File:</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleAdditionalFileChange(e, "aadharFile")}
                  required
                />
              </div>
              <div className="form-group">
                <label>Licence Number:</label>
                <input
                  type="text"
                  name="licenceNumber"
                  value={additionalFields.licenceNumber}
                  onChange={handleAdditionalInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Licence File:</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleAdditionalFileChange(e, "licenceFile")}
                  required
                />
              </div>
            </>
          )}

          {/* Common field */}
          <div className="form-group">
            <label>User Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            )}
          </div>

          <div className="form-group">
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <div className="link">
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
