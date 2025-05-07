import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
// The useEffect allows you  to add side effects to your components or functions and defining when they should run.

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]); // we are storing this in state so that when we update th emovies list it will automatically rerendr the component
  const [error, setError] = useState(null); // this is used to store any errors that may occur when fetching the movies
  const [loading, setLoading] = useState(true); // this is used to show a loading spinner when the movies are being fetched

  useEffect(() => {
    // this is an empty array so it will only run once when the component mounts
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movie...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    if (loading) return; // if the movies are already loading, we don't want to search again

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchTerm);
      setMovies(searchResults);
      setError(null); // reset the error state
    } catch (err) {
      console.log(err);
      setError("Failed to load movie...");
    } finally {
      setLoading(false);
    }

    //alert(searchTerm);
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
      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading"> LOADING...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            //  movie.title.toLowerCase().startsWith(searchTerm) && (  //conditional rendering notes
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
