import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <div className="icon">
          <img src="../../public/icons/apple.svg" alt="" />
        </div>
        <p>Aadit</p>
        <p>Window</p>
        <p>Help</p>
        <p>Terminal</p>
      </div>
      <div className="right">
        <div className="icon">
          <img src="../../public/icons/wifi.svg" alt="" />
        </div>
        <DateTime />
      </div>
    </nav>
  );
};

export default Navbar;
