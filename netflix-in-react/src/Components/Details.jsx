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
        <>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt="poster" className="img-fluid rounded-2 shadow my-5" />
          <h3>Informazioni aggiuntive sul Film selezionato:</h3>
          <h4>
            <strong>Anno:</strong> {movie.Year}
          </h4>
          <h4>
            <strong>Data di Rilascio: </strong>
            {movie.Rated}
          </h4>
          <h4>
            <strong>Durata:</strong> {movie.Runtime}
          </h4>
          <h4>
            <strong>Lingue:</strong> {movie.Language}
          </h4>
          <h4>
            <strong>Descrizione:</strong> {movie.Plot}
          </h4>
        </>
      ) : (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default Details;
