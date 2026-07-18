import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function LikeButton() {
  const user = useContext(UserContext);

  return (
    <div style={{ marginTop: "10px" }}>
      <p style={{ color: "white" }}>Liked by: {user.name}</p>
      <button>👍 Like</button>
    </div>
  );
}

export default LikeButton;