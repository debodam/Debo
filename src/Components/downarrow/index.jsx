import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";

const DownArrow = () => {
  return (
    <div className="arrow-container">
      <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
    </div>
  );
};

export default DownArrow;
