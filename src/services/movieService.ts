import axios from "axios";
import type { Movie } from "../types/movie";

const fetchMovies = async (query: string): Promise<Movie[]> => {
  const { data } = await axios.get<{ results: Movie[] }>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query: query,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    },
  );

  return data.results;
};

export default fetchMovies;