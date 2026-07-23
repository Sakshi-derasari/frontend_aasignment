import React from "react";
import useFetchData from "../../hooks/useFetchData1";

function SpotifyPlaylists() {
  const { data, loading, error } = useFetchData(
    "https://api.example.com/spotify/playlists"
  );

  // ❗ Hook is called at top level (NOT inside condition/loop)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>🎵 Spotify Playlists</h2>

      {data.map((playlist) => (
        <div key={playlist.id}>
          <h3>{playlist.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default SpotifyPlaylists;