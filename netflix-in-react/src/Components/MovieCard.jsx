import React from "react";
import { Col } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Col>
      <img
        style={{ height: "350px", objectFit: "cover" }}
        className="img-fluid rounded-2 shadow"
        src={movie.Poster}
        alt={movie.Title}
      />
    </Col>
  );
};

export default MovieCard;
