// Signin.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../Views/Screen.css";
import { useAuth } from "../../Context/AuthContext";

function Signin() {
  const navigate = useNavigate();
  
  const { setIsLoggedIn, setUserData, setAccessToken } = useAuth() // Get setAccessToken from context


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Redirect if user is already logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/home');
    }
  }, [navigate]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });

      
      alert("Login successful!");
      setUserData(response.data);
      console.log(response.data);
      setAccessToken(response.data.token); // Set token in context

      setIsLoggedIn(true);
      navigate('/home')
      localStorage.setItem("accessToken", response.token);
      setIsLoggedIn(true);
      localStorage.setItem("accessToken", response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Failed to login. Please try again.");
    }
  };

  return (
    <div id="maindiv">
      <div id="container-login">
        <h1>Log in</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email Address:</label>
            <input
              id="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              id="input2"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div id="buttondiv">
            <button type="submit">Sign In</button>
          </div>
        </form>
        <p>
          <Link to="/">Don't have an account? Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
