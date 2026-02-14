import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({ children, width="40vw",height="40vh"  }) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 300,
        y: 200,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red" data-title="Close"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <p>aadityadav - zsh</p>
        </div>
        <div className="main">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
