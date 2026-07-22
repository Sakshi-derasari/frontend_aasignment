import React from "react";
import useTrendingMovies from "../../hooks/useTrendingMovies";

function MoviesList() {
  const { data, loading, error } = useTrendingMovies();

  if (loading) return <p>Loading trending movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Trending Movies Today</h2>

      {data.map((movie) => (
        <div
          key={movie.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
          }}
        >
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
