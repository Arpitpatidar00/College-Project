// Signin.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "../Views/Screen.css";
import Cookies from "js-cookie";

function Signin() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, setUserData, setAccessToken } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

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
      setAccessToken(response.data.token);
      setIsLoggedIn(true);
      Cookies.set("isLoggedIn", true);
      Cookies.set("accessToken", response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Failed to login. Please try again.");
    }
  };

  if (isLoggedIn) {
    return null;
  }

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i
                className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                style={{ color: "#709085" }}
              ></i>
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: "23rem" }} onSubmit={handleSubmit}>
                <h3
                  className="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Log in
                </h3>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control form-control-lg"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control form-control-lg"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="pt-1 mb-4">
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-info btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                {error && <p>{error}</p>}
                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account? <Link to="/Signup">Register here</Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Login image"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;
