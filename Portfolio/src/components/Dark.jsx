// Dark.jsx
import React, { useState, useEffect } from 'react';
import './Dark.css'

function Dark() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    }
  };

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
    </button>
  );
}

export default Dark;