import React from 'react'
import { selectedmovie } from "../../Actions";
import { connect } from "react-redux";
import './recommendMovies.css'
function RecommendMovies(props) {
console.log( props.recommendMovies);

    const recommendMovies = () =>
    props.recommendMovies.results.map(movie => {
      return (
        <div className="recommendMovies">
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
    return (
        <div className="recommendMoviesWrapper">
            {recommendMovies()}
        </div>
    )
}
export default connect(null ,{selectedmovie} )(RecommendMovies)