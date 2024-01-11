import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Col>
      <Link to={`/movies/details/${movie.omdbID}`} style={{ cursor: "pointer" }}>
        <img
          style={{ height: "350px", objectFit: "cover" }}
          className="img-fluid rounded-2 shadow"
          src={movie.Poster}
          alt={movie.Title}
        />
      </Link>
    </Col>
  );
};

export default MovieCard;
