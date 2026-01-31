import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import WeatherProvider from "./components/context/WeatherContext";
import NavBar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <WeatherProvider>
     <NavBar/>
      <App />
    </WeatherProvider>
  </BrowserRouter>
);
