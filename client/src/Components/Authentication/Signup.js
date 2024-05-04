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
    aadharFile: null,
    certificationAddress: "",
    certificationFile: null,
    licenceNumber: "",
    licenceFile: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert file inputs to base64 strings
      const aadharFileBase64 = additionalFields.aadharFile
        ? await convertFileToBase64(additionalFields.aadharFile)
        : null;
      const certificationFileBase64 = additionalFields.certificationFile
        ? await convertFileToBase64(additionalFields.certificationFile)
        : null;
      const licenceFileBase64 = additionalFields.licenceFile
        ? await convertFileToBase64(additionalFields.licenceFile)
        : null;
      const imageBase64 = preview ? preview.split(",")[1] : null;

      const response = await axios.post("http://localhost:4000/auth/register", {
        ...formData,
        aadharFile: aadharFileBase64,
        certificationFile: certificationFileBase64,
        licenceFile: licenceFileBase64,
        image: imageBase64,
      });

      alert("Successfully registered user.");
      console.log(response.data);
      navigate("/login"); // Redirect to login page
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
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

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
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
                />
              </div>
              <div className="form-group">
                <label>Certification:</label>
                <input
                  type="text"
                  name="certificationAddress"
                  value={additionalFields.certificationAddress}
                  onChange={handleAdditionalInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label> Uplode Certification:</label>

                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) =>
                    handleAdditionalFileChange(e, "certificationFile")
                  }
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
                <label>Licence:</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleAdditionalFileChange(e, "licenceFile")}
                />
              </div>
            </>
          )}
          <div className="form-group">
            <label>User Image:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
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
