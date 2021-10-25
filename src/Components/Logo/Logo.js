import React from "react";
import Tilt from "react-parallax-tilt";
import plant from "./plant.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt10">
      <Tilt
        className="Tilt br2 shadow-2"
        style={{ height: 125, width: 125 }}
        options={{ tiltReverse: "false" }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "20px" }} src={plant} alt="plant" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
