import React from "react";
import "../css/MovieCard.css"; // Import your CSS file for styling
import { useMovieContext } from "../context/MovieContext";
import { FaHeart } from "react-icons/fa"; // Font Awesome heart

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card ">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            <FaHeart />
          </button>
        </div>
      </div>
      =
      <div className="movie-info">
        <h3 className="">{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
