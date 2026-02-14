import React from "react";
import "./Dock.scss";

const Dock = ({ setWindowState }) => {
  return (
    <div>
      <footer className="dock">
        <div
          onClick={() => {
            setWindowState((state) => ({ ...state, github: true }));
          }}
          className="icon github"
        >
          <img src="../../public/icons/github.svg" alt="" />
        </div>
        <div
          onClick={() => {
            setWindowState((state) => ({ ...state, notes: true }));
          }}
          className="icon notes"
        >
          <img src="../../public/icons/note.svg" alt="" />
        </div>
        <div
          onClick={() => {
            window.open("mailto:aadityadav121@gmail.com", "_blank");
          }}
          className="icon mail"
        >
          <img src="../../public/icons/mail.svg" alt="" />
        </div>
        <div
          onClick={() => {
            setWindowState((state) => ({ ...state, spotify: true }));
          }}
          className="icon spotify"
        >
          <img src="../../public/icons/spotify.svg" alt="" />
        </div>
        <div
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/aadit-yadav-331b5317b/",
              "_blank",
            );
          }}
          className="icon link"
        >
          <img src="../../public/icons/link.svg" alt="" />
        </div>
        <div
          onClick={() => {
            setWindowState((state) => ({ ...state, resume: true }));
          }}
          className="icon pdf"
        >
          <img src="../../public/icons/pdf.svg" alt="" />
        </div>
        <div
          onClick={() => {
            window.open(
              "https://calendar.google.com/calendar/u/0/r?tab=mc&pli=1",
              "_blank",
            );
          }}
          className="icon calendar"
        >
          <img src="../../public/icons/calender.svg" alt="" />
        </div>
        <div
          onClick={() => {
            setWindowState((state) => ({ ...state, cli: true }));
          }}
          className="icon cli"
        >
          <img src="../../public/icons/cli.svg" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Dock;
