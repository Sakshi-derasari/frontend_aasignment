import React, { useState } from "react";

function LikeCounter() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ margin: "20px" }}>
      <h3> Likes: {likes}</h3>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  );
}

export default LikeCounter;