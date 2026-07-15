import React from "react";
import PlaylistCard from "./PlaylistCard";
import LikeCounter from "./LikeCounter";
import { UserContext } from "./UserContext";
import Feed from "./Feed";
import FlipkartProductList from "./FlipkartProductList";

function App() {
  const user = { name: "Sakshi" };

  return (
    <div>
      <h1>My Playlist</h1>

      <PlaylistCard song="Shape of You" artist="Ed Sheeran" />
      <PlaylistCard song="Blinding Lights" artist="The Weeknd" />
      <PlaylistCard song="Kesariya" artist="Arijit Singh" />

      <LikeCounter />

      <UserContext.Provider value={user}>
        <Feed />
      </UserContext.Provider>

      <FlipkartProductList />
    </div>
  );
}

export default App;