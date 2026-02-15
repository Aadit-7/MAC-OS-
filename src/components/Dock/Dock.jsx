import React from "react";
import "./Dock.scss";

const Dock = ({ windowState, setWindowState }) => {
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
          <span className="tooltip">GitHub</span>
        </div>
        <div
          onClick={() => {
            setWindowState((state) => ({ ...state, notes: true }));
          }}
          className="icon notes"
        >
          <img src="../../public/icons/note.svg" alt="" />
          <span className="tooltip">Notes</span>
        </div>
        <div
          onClick={() => {
            window.open("mailto:aadityadav121@gmail.com", "_blank");
          }}
          className="icon mail"
        >
          <img src="../../public/icons/mail.svg" alt="" />
          <span className="tooltip">Mail</span>
        </div>
        <div
          onClick={() => {
            setWindowState((state) => ({ ...state, spotify: true }));
          }}
          className="icon spotify"
        >
          <img src="../../public/icons/spotify.svg" alt="" />
          <span className="tooltip">Spotify</span>
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
          <span className="tooltip">LinkedIn</span>
        </div>
        <div
          onClick={() => {
            setWindowState((state) => ({ ...state, resume: true }));
          }}
          className="icon pdf"
        >
          <img src="../../public/icons/pdf.svg" alt="" />
          <span className="tooltip">Resume</span>
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
          <span className="tooltip">Calendar</span>
        </div>
        <div
          onClick={() => {
            setWindowState((state) => ({ ...state, cli: true }));
          }}
          className="icon cli"
        >
          <img src="../../public/icons/cli.svg" alt="" />
          <span className="tooltip">Terminal</span>
        </div>

        <div
          onClick={() => {
            window.open(" https://duckduckgo.com/", "_blank");
          }}
          className="icon browser"
        >
          <img src="../../public/icons/browser.svg" alt="" />
          <span className="tooltip">Browser</span>
        </div>
      </footer>
    </div>
  );
};

export default Dock;
