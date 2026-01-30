import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import WeatherProvider from "./WeatherContext";

//index.js connects the app to the browser, enables routing, and shares global weather data with all components.

///This fileis to help put reaact app on one screen through id root

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </BrowserRouter>
);

//BrowserRouter helps switch pages without refreshing the app through routes
//weather provider helps access data--we put <app/> 

