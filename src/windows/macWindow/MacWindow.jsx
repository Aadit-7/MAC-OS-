import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({
  children,
  width = "50vw",
  height = "50vh",
  windowName,
  setWindowState,
}) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 10,
        y: 20,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              onClick={() => {
                // console.log(setWindowState);

                setWindowState((state) => ({ ...state, [windowName]: false }));
              }}
              className="dot red"
            >
              <span className="tooltip">Close</span>
            </div>
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
