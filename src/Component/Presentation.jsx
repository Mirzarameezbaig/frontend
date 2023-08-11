import React from "react";
import pexelsImage from "../Assets/pexels-kasuma-426894.jpg";
import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${pexelsImage})` }}>
        <img
          src="https://www.freeiconspng.com/thumbs/bismillah-png/bismillah-logo-png-14.png"
          className="zoom-image"
          alt=""
        />
        <Link className="attractive-Link" to="/home">
          Go to Website
        </Link>
      </div>
    </>
  );
};

export default Presentation;