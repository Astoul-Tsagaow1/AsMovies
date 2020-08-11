import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { selectedmovie } from "../../Actions";
import "./GanersComponents.css";

function GanersComponents(props) {
  useEffect(() => {});

  if (!props.movies) {
    return <h1>Loading....</h1>;
  }
  let srcImg;
  const ganermovies = props.movies.results.map(movie => {
    return (
      <div className="ganercardmovie"
        onClick={() => {
          props.selectedmovie(movie.id);
        }}
      > 
      {movie.poster_path === null ? <img  src= {"https://cdn.browshot.com/static/images/not-found.png"} alt={movie.title}/> : <img  src= {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}></img>}
        {/* {movie.title} */}
        <div className="ganersContent">

        </div>

      </div>
    );
  });
  return (
    <div>
      <div className="ganersbackround"></div>
      <div className="GanersComponents">
        <h1 className="ganer-title"><i>{props.match.params.id} movies :</i> </h1>
        <div className="GanermoviesWrapper">{ganermovies}</div>
      </div>
    </div>
  );
}

const mapStateToprops = mystate => {
  console.log(mystate.ganermovies);
  return { movies: mystate.ganermovies };
};
export default connect(mapStateToprops, { selectedmovie })(GanersComponents);
