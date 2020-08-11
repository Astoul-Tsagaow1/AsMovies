import React, { useState } from "react";
import { connect } from "react-redux";
import { selectedmovie ,GetMovies } from "../../Actions/index";
import "./MovieList.css";
import Pagination from "../pagination/Pagination";
import PopularMovies from '../popularMovies/PopularMovies'

// import SelectedMovie from "./SelectedMovie";


function MoviesList(props) {
  const [CorrentPage, setCorrentPage] = useState(1);

 

  if (!props.Movieslist ) {
    return <PopularMovies/>
  }
  const movies = props.Movieslist.res.results.map(movie => {
let srcBackPic ;

    if (movie.poster_path === null) {
      srcBackPic =
        "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    } else {
      srcBackPic = ` https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    }
    return (
      <div className="wrapprer" key={movie.id}>
        <img
          onClick={() => {
            props.selectedmovie(movie.id);

            // setModaliSOpen(true);
          }}
          src={srcBackPic}
          alt={movie.title}
        />
      </div>
    );
  });
const paginat = (page)=>{

props.GetMovies(props.movieSearchName.moviename ,page)
 setCorrentPage(page)
}

const numberPages = Math.floor(props.Movieslist.total_results / 20)
  return (
    <div className="MovieListWrapper">
      <h1>Movies-List </h1>
      <p> results :{props.Movieslist.res.total_results} ,page : {props.Movieslist.res.page}</p>
     {props.Movieslist.res.total_results > 20 ?<Pagination numberPages={numberPages} paginat={paginat} CorrentPage={CorrentPage}/> :""} 
     <div className="movies">

     {movies}

     </div>
     
    </div>
  );
}

const myStateToProps = movies => {
  console.log(movies.getmovies, "movies List");

  return {Movieslist: movies.getmovies , movieSearchName:movies.getmovies };
};
export default connect(myStateToProps, { selectedmovie, GetMovies })(MoviesList);



// total_results
// page: 1
// results: Array(20)
// 0: {popularity: 11.026, vote_count: 361, video: false, poster_path: "/Y1dn19yEAFMBc3N6W0jBnANtFr.jpg", id: 13931, …}
// 1: {popularity: 10.146, vote_count: 527, video: false, poster_path: "/o1JBr2htdBNyEKeIwGGr8Bwh1Bn.jpg", id: 310133, …}
// 2: {popularity: 14.183, vote_count: 1134, video: false, poster_path: "/tc6sLnnaOZk08YndHd53aPlUast.jpg", id: 8859, …}
// 3: {popularity: 6.664, vote_count: 31, video: false, poster_path: "/4i9O5gfGOx5GGPT9XCrWBbbxt86.jpg", id: 94671, …}
// 4: {popularity: 8.234, id: 8440, video: false, vote_count: 264, vote_average: 7.5, …}
// 5: {popularity: 6.26, vote_count: 118, video: false, poster_path: "/gFM9yMrO4fQMiG440Lx6bazB517.jpg", id: 24655, …}
// 6: {popularity: 5.617, vote_count: 62, video: false, poster_path: "/bJQiq1k3NVeKuCmCX8nU5gqtsN6.jpg", id: 15462, …}
// 7: {popularity: 5.727, vote_count: 37, video: false, poster_path: "/uDWvbHveJcXJGFGXJ87sjvInb4C.jpg", id: 17141, …}
// 8: {popularity: 4.741, id: 46989, video: false, vote_count: 28, vote_average: 6.6, …}
// 9: {popularity: 4.668, vote_count: 8, video: false, poster_path: "/hEz46UOnoex5EOlzWfH3Dnfg3TI.jpg", id: 459427, …}
// 10: {popularity: 9.11, id: 13508, video: false, vote_count: 111, vote_average: 7.5, …}
// 11: {popularity: 5.727, vote_count: 0, video: false, poster_path: "/gTbfLmYAJhkn9PtX7uwGyWuytVB.jpg", id: 542436, …}
// 12: {popularity: 7.426, vote_count: 28, video: false, poster_path: "/pXgzgHY188HceFvc1lzUpLuZMTU.jpg", id: 364708, …}
// 13: {popularity: 3.378, vote_count: 20, video: false, poster_path: "/l7ct24twXb6hnf0wkP33mjRYOfD.jpg", id: 99036, …}
// 14: {popularity: 7.462, vote_count: 12, video: false, poster_path: "/czynIdEiHjpGhUWMnoax7Q3lMAE.jpg", id: 573560, …}
// 15: {popularity: 3.471, id: 87233, video: false, vote_count: 43, vote_average: 6.9, …}
// 16: {popularity: 2.572, vote_count: 0, video: false, poster_path: "/hsGh2BDAlqJijFaPWzi8B5fx2Eh.jpg", id: 89313, …}
// 17: {popularity: 4.539, vote_count: 4, video: false, poster_path: null, id: 27603, …}
// 18: {popularity: 2.395, vote_count: 3, video: false, poster_path: "/pNmhaoRuduZOvgTc0Ujqs9gS2Tz.jpg", id: 20703, …}
// 19: {popularity: 2.86, vote_count: 31, video: false, poster_path: "/1cYOPFbHEEXcXq8VYlJI5h2QpIe.jpg", id: 22924, …}
// length: 20
// __proto__: Array(0)
// total_pages: 293
// total_results: 5852

// adult: false
// backdrop_path: "/cWUOlaNY8QNqmXOSZcI17yxTb8w.jpg"
// genre_ids: (2) [16, 10751]
// id: 13931
// original_language: "en"
// original_title: "Mike's New Car"
// overview: "Mike discovers that being the top-ranking laugh collector at Monsters, Inc. has its benefits – in particular, earning enough money to buy a six-wheel-drive car that's loaded with gadgets. That new-car smell doesn't last long enough, however, as Sulley jump-starts an ill-fated road test that teaches Mike the true meaning of buyer's remorse."
// popularity: 11.026
// poster_path: "/Y1dn19yEAFMBc3N6W0jBnANtFr.jpg"
// release_date: "2002-05-24"
// title: "Mike's New Car"
// video: false
// vote_average: 6.8
// vote_count:
