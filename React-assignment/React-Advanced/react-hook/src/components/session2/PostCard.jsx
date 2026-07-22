import React from "react";
import useLikeButton from "../hooks/useLikeButton";

const PostCard = ({ username, image, initialLikes }) => {
  const { likes, isLiked, toggleLike } = useLikeButton(initialLikes);

  return (
    <div style={styles.card}>
      <h3>{username}</h3>

      <img src={image} alt="post" style={styles.image} />

      <div style={styles.actions}>
        <button onClick={toggleLike} style={styles.button}>
          {isLiked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>

      <p>{likes} likes</p>
    </div>
  );
};

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

export default PostCard;