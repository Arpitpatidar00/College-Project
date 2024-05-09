// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../Context/AuthContext";
import Cookies from "js-cookie"; // Add this line to import Cookies

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("isLoggedIn");
    Cookies.remove("accessToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav>
      <div className="nav-wrapper white position sticky">
        <Link to="/" className="brand-logo left">PlaceFinder</Link>
        <ul id="nav-mobile" className="right">
          {isLoggedIn ? (
            <>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>

              <li><button id="logout-btn" onClick={handleLogout}><LogoutIcon className="h-1 w-1" /></button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/Signup">Signup</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
