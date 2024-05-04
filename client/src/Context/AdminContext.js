import React, { createContext, useState,useContext } from 'react';

export const AdminContext = createContext({
    placedata: true,
    userdata:true,
  

});

export const AdminProvider = ({ children }) => {
    const [userdata, setUserdata] = useState(true);
    const [placedata, setPlacedata] = useState(false);


  return (
    <AdminContext.Provider value={{ placedata,setPlacedata,userdata, setUserdata}}>
      {children}
    </AdminContext.Provider>
  );
};
export  function useAdmin() {
  return useContext(AdminContext)
}