import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const movies = [
    { id: 1, title: "Alice in Wonderland", release_date: "2020" },
    { id: 2, title: "Annie", release_date: "2012" },
    { id: 3, title: "Avatar", release_date: "2021" },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchTerm);
    setSearchTerm("");
  };
  return (
    <div className="home happy">
      <form action="" onSubmit={handleSearch} className="search-form">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
        <button className="search-button ">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          //  movie.title.toLowerCase().startsWith(searchTerm) && (  //conditional rendering notes
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
