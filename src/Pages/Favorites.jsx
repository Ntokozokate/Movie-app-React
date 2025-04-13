import React from "react";
import "../css/Favorites.css"; // Import your CSS file for styling

const Favorites = () => {
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
