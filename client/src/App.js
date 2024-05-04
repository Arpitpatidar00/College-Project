import React from "react";
import Start from "./Start.js";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AdminProvider } from "./Context/AdminContext.js";

function App() {
  return (
    <BrowserRouter>
      <AdminProvider>
        <Start />
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
