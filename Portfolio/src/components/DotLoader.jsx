import React from "react";
import "./Loader.css"; // Import your CSS styles here

function DotLoader() {
  return (
    <div className="loader-container">
      <div className="dot-loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default DotLoader;