import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;