import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

function LikeCounter() {
  const [likes, setLikes] = useState(0);
    const user = useContext(UserContext)
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-64 text-center">
      <div>
        <h2>name:{user.name}</h2>
      </div>
      {/* Heart Icon */}
      <button
        onClick={handleLike}
        className="text-3xl hover:scale-125 transition"
      >
        ❤️
      </button>

      {/* Like Count */}
      <p className="mt-3 text-lg font-semibold text-gray-700">
        {likes} Likes
      </p>
    </div>
  );
}

export default LikeCounter;