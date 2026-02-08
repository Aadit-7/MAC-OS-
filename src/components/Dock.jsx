import React from "react";
import "./Dock.scss";

const Dock = () => {
  return (
    <div>
      <footer className="dock">
        <div className="icon github">
          <img src="../../public/icons/github.svg" alt="" />
        </div>
        <div className="icon notes">
          <img src="../../public/icons/note.svg" alt="" />
        </div>
        <div className="icon mail">
          <img src="../../public/icons/mail.svg" alt="" />
        </div>
        <div className="icon spotify">
          <img src="../../public/icons/spotify.svg" alt="" />
        </div>
        <div className="icon link">
          <img src="../../public/icons/link.svg" alt="" />
        </div>
        <div className="icon pdf">
          <img src="../../public/icons/pdf.svg" alt="" />
        </div>
        <div className="icon calendar">
          <img src="../../public/icons/calender.svg" alt="" />
        </div>
        <div className="icon cli">
          <img src="../../public/icons/cli.svg" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Dock;
