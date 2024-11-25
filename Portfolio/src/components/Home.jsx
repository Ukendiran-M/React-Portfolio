import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Logo from "./Logo.jsx";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation on component load
    setIsVisible(true);
  }, []);

  const [isVis, setIsVis] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVis(true); // Trigger the speech bubble visibility after mount
    }, 500); // Delay to control when the bubble appears (optional)
  }, []);

  const openWhatsAppChat = () => {
    // Opens the LinkedIn profile page in a new tab
    window.open("https://wa.me/6380471087", "_blank");
  };
  return (
    <div className="holder">
      <div className="container">
        <Navbar />
        <Sidebar />
        <Logo/>
        <h1 aria-label="UKENDIRAN">
          &nbsp;<span className="typewriter thick"></span>
        </h1>
        
        {/* Apply the 'show' class conditionally */}
        <h3 className={isVisible ? "show" : ""}>Full Stack Developer</h3>
              <div className={`speech-bubble ${isVisible ? "show" : ""}`}>
                It's Me
              </div>
        <p className={isVisible ? "show" : ""}>
          Passionate Full Stack Developer and UI/UX Designer <br />
          From Coimbatore, India with an enthusiastic mindset, <br />
          actively learning and working with cutting-edge technologies.
        </p>
        <button className="fancy-button" onClick={openWhatsAppChat}>Let's Talk!</button>
        <div className="profile">
          <img src="./public/profile.png" alt="Profile" />
        </div>
        </div>
    </div>
  );
}

export default Home;