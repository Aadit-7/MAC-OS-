import React from "react";
import "./resume.scss";
import MacWindow from "../macWindow/MacWindow";

const Resume = () => {
  return (
    <MacWindow>
      <div className="resumeWindow">
        <embed src="../../../public/resume.pdf" type="" />
      </div>
    </MacWindow>
  );
};

export default Resume;
