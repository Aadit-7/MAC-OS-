import React from "react";
import "./resume.scss";
import MacWindow from "../macWindow/MacWindow";

const Resume = ({ windowName, setWindowState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
      height="60vh"
      width="55vw"
    >
      <div className="resumeWindow">
        <embed src="../../public/resume.pdf" type="" />
      </div>
    </MacWindow>
  );
};

export default Resume;
