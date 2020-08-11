import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { GetMovies } from "../../Actions";
import "./SearchMovie.css";
import MoviesList from "../moviesAfterSearch/MoviesList";

function SearchMovie(props) {
  const [moviename, setmoviename] = useState("");
  const [CorrentPage, setCorrentPage] = useState(1);

  const Hendelsubmit = event => {
    event.preventDefault();
    props.GetMovies(moviename, CorrentPage);
  };

  return (
    <div>
      <div className="SearchMovie">
        <div className="SearchMovieTitleWrpper">
        <h1>Welcome To ASmovies </h1>

        </div>
        {/* <form onSubmit={Hendelsubmit}>
          <input
            placeholder="Search Movie"
            value={moviename}
            onChange={e => setmoviename(e.target.value)}
          />
        </form> */}
      </div>
      <MoviesList />
    </div>
  );
}
const myStateToProps = mystate => {
  console.log(mystate, "SearchMovie");

  return { mystate };
};
export default connect(myStateToProps, { GetMovies })(SearchMovie);
