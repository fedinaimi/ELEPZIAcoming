import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import logo from "./assets/LOGOELPEZIAMAJWHITE.png"; // Import your logo here

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Logo */}

        {/* Heading */}
        <h1 className="main-title">
          ELEPZIA
          <br />
          Website
          <br />
          Coming Soon
        </h1>

        {/* Timer Countdown */}
        <Timer />

        {/* Optin Form */}
        <Optin />

        {/* Preloader */}
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
