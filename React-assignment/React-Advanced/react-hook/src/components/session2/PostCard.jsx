import React from "react";
import useLikeButton from "../../hooks/useLikeButton";

console.log("PostCard is rendering");
const PostCard = ({ username, image, initialLikes }) => {
  const { likes, isLiked, toggleLike } = useLikeButton(initialLikes);

  return (
    <div style={{ background: "white", color: "black", padding: "20px" }}>
      <h3>{username}</h3>
      <img src={image} alt="post" width="200" />
      <button onClick={toggleLike}>
        {isLiked ? "❤️ Liked" : "🤍 Like"}
      </button>
      <p>{likes} likes</p>
    </div>
  );
  const styles = {
    card: {
      width: "300px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      margin: "20px auto",
      textAlign: "center",
    },
    image: {
      width: "100%",
      borderRadius: "10px",
    },
    actions: {
      marginTop: "10px",
    },
    button: {
      padding: "8px 12px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
    },
  };
}
  export default PostCard;