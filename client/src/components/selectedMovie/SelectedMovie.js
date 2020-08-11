import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  showTrailer,
  similarMovies,
  selectedmovie,
  Getrecommend,
  GetcastOfMovie
} from "../../Actions";
import "./selectedMovie.css";
import ModalTralier from "../modalTralier/ModalTralier";
import SimilarMovies from "../similarMovies/SimilarMovies";
import RecommendMovies from "../recommendMovies/RecommendMovies";

function SelectedMovie(props) {
  const [ModaliSOpen, setModaliSOpen] = useState(false);
  const {
    selectedMovie,
    Showtrailer,
    similarMovies,
    recommendMovies,
    casts
  } = props.SelectedMovie;
  let srcBackPic;

  console.log(casts, "casts");

  useEffect(() => {
    props.similarMovies(selectedMovie.id);
    props.Getrecommend(selectedMovie.id);
    props.GetcastOfMovie(selectedMovie.id);
  }, [selectedMovie.id]);
  console.log(selectedMovie, "selectedMovie components");
  console.log(Showtrailer, "Showtrailer ");
  if (!selectedMovie || !casts) {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
  if (selectedMovie.backdrop_path === null) {
    srcBackPic =
      "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  } else {
    srcBackPic = `https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`;
  }
  console.log(srcBackPic);

  const ganers = selectedMovie.genres.map(ganers => {
    console.log(ganers.name);
    return <p>{ganers.name}</p>;
  });
 const afterSlice = [];
 for (let i = 0; i < 10; i++) {
  afterSlice.push(casts[i])
 }
 console.log(afterSlice ,"afterSlice");


//  cast
 
  const credits = afterSlice.map(cast => {
    return (<a href={`https://en.wikipedia.org/wiki/${cast.name}`}target="_blank" >

      <img
        src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
        // finish casts ******
        // alt={selectedMovie.title}
      />
    </a>

    );
  });
  return (
    <div>
      <div
        className="content"
        id="content"
        style={{
          backgroundImage: `url(${srcBackPic})`,
          backgroundSize: "cover"
        }}
      >
        {Showtrailer === undefined ? (
          <ModalTralier
            isOpen={ModaliSOpen}
            onRequestClose={() => {
              setModaliSOpen(false);
            }}
            Showtrailer={Showtrailer}
          ></ModalTralier>
        ) : (
          <ModalTralier
            isOpen={ModaliSOpen}
            onRequestClose={() => {
              setModaliSOpen(false);
            }}
            trailerkey={Showtrailer.key}
            Showtrailer={Showtrailer}
          />
        )}
      </div>
      <div className="movieditalis">
        <div className="box">
          <div className="imgbox">
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
            ></img>
          </div>
          <div className="details">
            <div className="detailsContent">
              <i
                class="far fa-play-circle"
                onClick={() => {
                  props.showTrailer(selectedMovie.id);
                  setModaliSOpen(true);
                }}
                style={{ fontSize: "70px" }}
              ></i>
            </div>
          </div>
        </div>

        <div className="movieDitaials">
          <div className="movietitles">
            <h4> {selectedMovie.title}</h4>
            <h6>
              <i>{selectedMovie.tagline}</i>
            </h6>

            <p>overview: {selectedMovie.overview}</p>

            <p>popularity :{selectedMovie.popularity} </p>
            <p>Time :{selectedMovie.runtime} min </p>
            <div className="ganers">{ganers} </div>
          </div>
          <div className="casts">{credits}</div>
        </div>
      </div>

       <div style={{ display: "flex" }}>
        {!similarMovies ? (
          <div> SimilarMovies :none </div>
        ) : (
          <div>
            {" "}
            SimilarMovies :<SimilarMovies similarMovies={similarMovies} />{" "}
          </div>
        )}
        {!recommendMovies ? (
          "sda"
        ) : (
          <div>
            {" "}
            because You Watch{" "}
            <strong>
              <i>{`${selectedMovie.title}`}</i>
            </strong>
            :<RecommendMovies recommendMovies={recommendMovies} />
          </div>
        )}
      </div> 
    </div>
  );
}

const MystateToProp = SelectedMovie => {
  console.log(SelectedMovie, 123);

  return { SelectedMovie: SelectedMovie };
};
export default connect(MystateToProp, {
  showTrailer,
  similarMovies,
  selectedmovie,
  Getrecommend,
  GetcastOfMovie
})(SelectedMovie);

// adult: false
// backdrop_path: "/lfLFO7yJgoMfHlHjyvJ9ipCPeFJ.jpg"
// belongs_to_collection: null
// budget: 0
// genres: [{…}]
// homepage: ""
// id: 310133
// imdb_id: "tt3813310"
// original_language: "en"
// original_title: "Cop Car"
// overview: "Two kids find themselves in the centre of a deadly game of cat and mouse after taking a sheriff's cruiser for a joy ride."
// popularity: 11.821
// poster_path: "/o1JBr2htdBNyEKeIwGGr8Bwh1Bn.jpg"
// production_companies: (4) [{…}, {…}, {…}, {…}]
// production_countries: [{…}]
// release_date: "2015-08-07"
// revenue: 134552
// runtime: 86
// spoken_languages: [{…}]
// status: "Released"
// tagline: "Their first drive could be their last."
// title: "Cop Car"
// video: false
// vote_average: 5.8
// vote_count: 529
