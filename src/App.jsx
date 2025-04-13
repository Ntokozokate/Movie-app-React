import { useState } from "react";
import MovieCard from "./components/MovieCard";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <div className="bg-gray-300 ">
      <NavBar />
      <main className="container ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
