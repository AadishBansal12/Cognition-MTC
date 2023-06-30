import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Page</h1>
      <div className="contact-info">
        <h2>Aadi Foundation</h2>
        <p>INDIA</p>
        <p>Display current local time</p>
        <p>(GMT-12:00) International Date Line West</p>
        <p>500094812@stu.upes.ac.in</p>
        <a href="https://aadish.carrd.co/">https://aadish.carrd.co/</a>
      </div>
      <div className="social-accounts">
        <h2>Social accounts</h2>
        <a href="https://www.instagram.com/aadish_bansal1/">Instagram</a>
        <a href="https://www.linkedin.com/in/aadishbansal1/">LinkedIn</a>
        <a href="https://www.linkedin.com/company/aadi-foundation-official/">
          LinkedIn (Aadi Foundation)
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
