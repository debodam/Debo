import { faGlobe } from "@fortawesome/free-solid-svg-icons"; // Import the globe icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HorizontalScroll from "../../Components/horizontal-scroll";
import { HoverLinks } from "../../Components/hoverlinks";
import Navbar from "../../Components/navbar";
import "./style.css";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-location">
            <p>Located in Calgary</p>
            <span className="icon-wrapper">
              <FontAwesomeIcon
                icon={faGlobe}
                style={{ fontSize: "0.5em" }}
                className="fa-icon globe-icon"
              />
            </span>
          </div>
          <h1>Debojeet Dam</h1>
        </div>
      </div>
      {/* About Section */}
      <div className="about-content" id="about">
        <div className="about-text">
          <p className="first-paragraph">
            A third-year Software Engineering student at Schulich, that is
            deeply passionate about project management and biotechnology.
            Committed to advancing the tech industry and fostering meaningful
            community connections.
          </p>
        </div>
        <div className="about-text-2">
          <p className="second-paragraph">
            My enthusiasm for design, coding, and interaction situates me
            uniquely within the tech sphere. Click the button and take a peak
            inside my world!
          </p>
          <button className="button">About Me</button>
        </div>
      </div>
      {/* Linebreak */}
      <hr className="section-divider" />
      {/* Projects Section */}
      <div className="projects" id="projects">
        <div className="projects-heading">
          <h2>
            Some of my projects/<span className="exponent">(4)</span>
          </h2>
        </div>
        <div className="projects-content">
          <HoverLinks />
        </div>
        <div className="project-button">
          <button className="button-2">More Work</button>
        </div>
      </div>
      {/* Experience Section */}
      <HorizontalScroll /> {/* Add the ExperienceComponent here */}
    </div>
  );
};

export default Homepage;
