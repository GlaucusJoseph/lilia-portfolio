import React, { useEffect, useState } from "react";
import "./index.css";
import { InstagramIcon } from "../../assets/svg";

const MainNavbar = () => {
  const [liliaDescription, setLiliaDescription] = useState("Community manager");



  return (
    <nav className="navbar-box" role="navigation" aria-label="Main Navigation">
      <div className="container">
        <label className="navbar-title">Lilia Cordova</label>
        &nbsp;
        <label className="navbar-subtitle">{liliaDescription}</label>
      </div>
      <div className="container">
        <ul className="navbar-box-content">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <InstagramIcon height="40" width="40" />
      </div>
    </nav>
  );
};

export default MainNavbar;
