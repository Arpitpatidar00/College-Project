// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [accessToken, setAccessToken] = useState(() => {
    return Cookies.get("accessToken") || "";
  });
  const [searchData, setSearchData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [placeId, setPlaceId] = useState("");
  // const [userId, setUserId] = useState(() => {
  //   return Cookies.get("userId") || "";
  // });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn) {
      return JSON.parse(storedIsLoggedIn);
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    if (isLoggedIn) {
      // Cookies.set("userId", userId);
      Cookies.set("accessToken", accessToken);
    } else {
      Cookies.remove("userId");
      Cookies.remove("accessToken");
    }
  }, [isLoggedIn, accessToken]);

  return (
    <AuthContext.Provider
      value={{
        placeId,
        setPlaceId,
        userData,
        setUserData,
        isLoggedIn,
        setIsLoggedIn,
        accessToken,
        setAccessToken,
        searchData,
        setSearchData,
        commentData,
        setCommentData,
        // userId,
        // setUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
