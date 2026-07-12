import React from "react";

function PlaylistCard(props) {
  return (
    <div>
      <h3>{props.song}</h3>
      <p>{props.artist}</p>
    </div>
  );
}

export default PlaylistCard;