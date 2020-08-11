import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { selectedmovie } from "../Actions";
import "./PopularMovies.css";
import Pagination from "./pagination/Pagination";

function Genremovies(props) {
  const [PopularMovies, setpopularMovies] = useState([]);
  const [CorrentPage, setCorrentPage] = useState(1);
  const [addToWishList, setaddToWishList] = useState("Add to wish List");
  const { User } = props.state;
  console.log( props.state);

  const GetPopularMovies = page => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${props.genre}`, {
        params: {
          api_key: "3ea150464035bc92e08e1ecfd93b9557",
          page: page
        }
      })
      .then(res => {
        console.log(res.data);

        setpopularMovies(res.data);
      });
  };

  useEffect(() => {
    GetPopularMovies(CorrentPage);
    console.log(CorrentPage);
  }, [CorrentPage]);
  const paginat = page => {
    setCorrentPage(page);
  };

  if (!PopularMovies.results) {
    return (
      <div className="x">
 <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      </div>
     
    );
  }

  const listOfPopularMovies = PopularMovies.results.map(movie => {
    return (
      <div className="box" key={movie.id}>
        {" "}
        <div className="boxImg">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.name}
          ></img>
        </div>
        <div className="ditaile">
          <h1>{movie.title}</h1>
         <div className="button_Wrapper">
        {!User ? "": <button  type="button" class="btn btn-outline-warning"
            onClick={() => {
              axios
                .post("/wishlist", { User:User, movie: movie })
                .then(res => {
                  console.log(res.data);

                  //// send messeg to user add yo his favorite list <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

                  // if (res.status ===200) {
                  //   setaddToWishList('Add!!!')
                    
                  // }
                });
            }}
          >
            {addToWishList}
          </button>}

          <button type="button" class="btn btn-outline-primary"
            onClick={() => {
              props.selectedmovie(movie.id);
            }}
          >
            more details{" "}
          </button>

         </div>
         
        </div>
      </div>
    );
  });
  const numberPages = Math.floor(PopularMovies.total_results / 20);
  console.log(numberPages, "numberPages");

  return (

      <div className="listOfPopularMovies_wrapper">
        <Pagination
          numberPages={numberPages}
          paginat={paginat}
          CorrentPage={CorrentPage}
        />
        {listOfPopularMovies}
      </div>
  );
}
const mapstatetoprops = state => { 
  return { state };
};
export default connect(mapstatetoprops, { selectedmovie })(Genremovies);
