import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

// Backend URL when deployed on Tomcat
const API_URL = "/2300030408_backend/productapi";

function App() {
  return (
    <BrowserRouter basename="/2300030408_frontend">
      <Navbar />
      {/* Add your Routes here */}
    </BrowserRouter>
  );
}

export { App, API_URL };
export default App;
