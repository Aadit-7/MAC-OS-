import React, { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock/Dock";
import Navbar from "./components/navbar/Navbar";
import Github from "./windows/github/Github";
import Notes from "./windows/notes/Notes";
import Resume from "./windows/resume/Resume";
import Spotify from "./windows/spotify/Spotify";
import Cli from "./windows/cli/Cli";

const App = () => {
  const [windowState, setWindowState] = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <div>
      <Navbar />
      <Dock windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && (
        <Github windowName="github" setWindowState={setWindowState} />
      )}
      {windowState.notes && (
        <Notes windowName="notes" setWindowState={setWindowState} />
      )}
      {windowState.resume && (
        <Resume windowName="resume" setWindowState={setWindowState} />
      )}
      {windowState.spotify && (
        <Spotify windowName="spotify" setWindowState={setWindowState} />
      )}
      {windowState.cli && (
        <Cli windowName="cli" setWindowState={setWindowState} />
      )}
    </div>
  );
};

export default App;
