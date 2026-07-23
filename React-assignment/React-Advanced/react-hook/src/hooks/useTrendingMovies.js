import { useEffect, useState } from "react";

function useTrendingMovies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=ec4f63f33fdf178a99dcede73f8991e1"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch trending movies");
        }

        const result = await response.json();
        setData(result.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return { data, loading, error };
}

export default useTrendingMovies;
