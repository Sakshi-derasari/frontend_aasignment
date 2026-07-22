import { useState } from "react";

const useLikeButton = (initialLikes = 0, initiallyLiked = false) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(initiallyLiked);

  const toggleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return { likes, isLiked, toggleLike };
};

export default useLikeButton;