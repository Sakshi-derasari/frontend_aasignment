import { useEffect, useState } from "react";

function useSearchMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.Response === "False") {
          throw new Error(data.Error);
        }

        setMovies(data.Search || []);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    return () => controller.abort();
  }, [query]);

  useEffect(() => {
    if (movies.length > 0) {
      console.log(`Fetched ${movies.length} movies for "${query}":`, movies);
    }
  }, [movies, query]);

  return { movies, loading, error };
}

export default useSearchMovies;
