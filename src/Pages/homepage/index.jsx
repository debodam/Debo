import React from "react";
import Portrait from "../../Assets/hero_pic.jpg";
import Navbar from "../../Components/navbar";
import "./style.css";

const Homepage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="hero section__padding">
        <div className="hero-content">
          <h1>DEBOJEET DAM</h1>
          {/* <p>SOFTWARE ENGINEER | SCHULICH SCHOOL OF ENGINEERING</p> */}
        </div>
      </div>

      {/* About Section */}
      <div className="about-content" id="about">
        <div className="about-heading fade-in-section">
          <img src={Portrait} className="hero-logo" alt="" />
          <div className="about-text">
            <h1>Hello!</h1>
            <p>
              I'm Debo, a second-year Software Engineering major at Schulich
              School of Engineering, with a minor in Entrepreneurship and
              Enterprise Development. My interests include biotech, full-stack
              development, and project management. Passionate about tech, I aim
              to make an impact. I find joy in building community connections,
              inspired by mentors at Schulich. Committed to inspiring the next
              generation of engineers!
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-content" id="projects">
        <div className="projects-heading fade-in-section">
          {/* Add your projects content here */}
          <h2>My Projects</h2>
          {/* Add more components for your project details */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
