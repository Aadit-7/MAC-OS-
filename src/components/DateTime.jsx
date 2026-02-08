import React from "react";
import { useState, useEffect } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted =
        now
          .toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })
          .replace(",", " ") +
        " " +
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
      setDateTime(formatted);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{dateTime}</div>;
};

export default DateTime;
