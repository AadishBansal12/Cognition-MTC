import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="intro-container">
        <h1 className="intro-title">Welcome to the Home Page</h1>
        <p className="intro-content">This is the home page content.</p>
      </div>
      <div className="about-container">
        <h2 className="about-title">About Myself</h2>
        <div className="about-details">
          <p className="about-item">Name: Aadish Bansal</p>
          <p className="about-item">Founder (Aadi Foundation)</p>
          <p className="about-item">MLSA 2023</p>
          <p className="about-item">AI/ML</p>
          <p className="about-item">Product Manager (2 years of experience)</p>
          <p className="about-item">UI/UX Designer</p>
          <p className="about-item">IT Support (Google)</p>
          <p className="about-item">Android/Frontend Developer</p>
          <p className="about-item">Photographer</p>
          <p className="about-item">SPR (UPES)</p>
        </div>
      </div>
      <footer className="footer">
        <p className="footer-text">
          © 2023 Aadi Foundation. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
