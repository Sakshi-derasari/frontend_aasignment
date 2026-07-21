import React from "react";
import useCurrentTime from "../../hooks/useCurrentTime";

function LiveClock() {
  const currentTime = useCurrentTime();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🕒 Live Clock</h2>
      <h1>{currentTime.toLocaleTimeString()}</h1>
    </div>
  );
}

export default LiveClock;