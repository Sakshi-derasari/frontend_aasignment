import React, { useContext } from "react";
import { UserContext } from "../UserContext";

function LikeButton() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>Liked by: {user.name}</p>
      <button> Like</button>
    </div>
  );
}

export default LikeButton;