import React from "react";
import MacWindow from "../macWindow/MacWindow";
import "./spotify.scss";

const Spotify = () => {
  return (
    <MacWindow width="20vw" height="50vh">
      <div className="spotifyWindow">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/2RRHqxR0rOnKhrFVihtVCu?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
