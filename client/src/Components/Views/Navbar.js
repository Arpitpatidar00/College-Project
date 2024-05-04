import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../Context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
}
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    // Clear local storage data and log out
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav>
      <div className="nav-wrapper white position sticky">
        <Link to="/home" className="brand-logo left">
          PlaceFinder
        </Link>
        <ul id="nav-mobile" className="right">
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button id="logout-btn" onClick={handleLogout}>
                  <LogoutIcon className="h-1 w-1" />
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
