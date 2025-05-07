import { useState } from "react";
import MovieCard from "./components/MovieCard";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import "./css/App.css";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="container ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
