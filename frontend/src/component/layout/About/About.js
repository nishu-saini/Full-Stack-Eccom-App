import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";

const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://"
              alt="Founder"
            />
            <Typography>Nishu Saini</Typography>
            <h3>quarnstric@gmail.com</h3>
            <span>This is a sample wesbite made by Nishu Saini.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
