import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Col, Row } from "react-bootstrap";

const MovieGallery = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const apiKey = "2491cb2f";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(category)}`);
        const data = await response.json();
        setMovies(data.Search);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category, apiKey]);

  return (
    <div className="bg-dark text-white mb-5">
      <h2>{category}</h2>
      <div className="container-fluid mt-2 mb-3">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 g-2 text-center">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MovieGallery;
