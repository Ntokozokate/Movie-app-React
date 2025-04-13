import React from "react";
import "../css/MovieCard.css"; // Import your CSS file for styling
const MovieCard = ({ movie }) => {
  function onFavoriteClick() {
    alert("Added to favourites");
  }

  return (
    <div className="movie-card ">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn " onClick={onFavoriteClick}>
            ❤️
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="">{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
