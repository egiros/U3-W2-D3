import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OMDB_URL from "../helpers/OmbdUrl";

const Details = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  //prendere la key 2491cb2f

  const getOmdbData = () => {
    console.log(params.omdbID);
    fetch(OMDB_URL + "&i=" + params.omdbID)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((movieData) => {
        setMovie(movieData);
        console.log("movieData", movieData);
      });
  };

  useEffect(() => {
    getOmdbData();
  }, []);

  console.log(params.omdbID);
  return (
    <div className="text-light">
      {movie ? (
        <h1>{movie.Title}</h1>
      ) : (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default Details;
