import React from "react";
import "./resume.scss";
import MacWindow from "../macWindow/MacWindow";

const Resume = ({ windowName, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="resumeWindow">
        <embed src="../../public/resume.pdf" type="" />
      </div>
    </MacWindow>
  );
};

export default Resume;
