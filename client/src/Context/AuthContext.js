// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [commentData, setCommentData] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,

        isLoggedIn,
        setIsLoggedIn,
        accessToken, // Expose access token in the context
        setAccessToken, // Function to set access token
        user,
        setUser,
        searchData,
        setSearchData,
        commentData,
        setCommentData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
