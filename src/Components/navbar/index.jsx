import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <p className="code-by-debo">&nbsp;&copy; Code by Debo</p>
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a href="#about">Work</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Experience</a>
          </li>
          <li className="nav-item">
            <a href="#demo">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
