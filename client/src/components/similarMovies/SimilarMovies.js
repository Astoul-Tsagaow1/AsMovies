import React from "react";
import { connect } from "react-redux";
import { selectedmovie } from "../../Actions";
import "./SimilarMovies.css";

function SimilarMovies(props) {
console.log(  props.similarMovies.results )

  const similarmoviesx = () =>
  
    props.similarMovies.results.map(movie => {
      return (
        <div className="similarmovies">
          <a href="#content">
            <img
              onClick={() => {
                props.selectedmovie(movie.id);
              }}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            ></img>
          </a>
        </div>
      );
    });
  return <div className="similarMoviesWrapper">{similarmoviesx()}</div>;
}
export default connect(null, { selectedmovie })(SimilarMovies);
