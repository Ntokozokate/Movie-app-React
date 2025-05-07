import React from "react";
import "../css/Favorites.css"; // Import your CSS file for styling
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div>
        <h2 className="font-bold text-4xl text-amber-800 text-center">
          Your favorites
        </h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2 className="">Your favorites list is empty</h2>
      <p className="">Add movies to your favorites list to see them here.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Browse Movies
      </button>
    </div>
  );
};

export default Favorites;
