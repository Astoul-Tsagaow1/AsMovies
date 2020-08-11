import React, { useEffect, useState } from "react";
import {connect} from 'react-redux'
import axios from "axios";
import "./WishList.css";

function WishList(props) {
  const [wishlist, setwishlist] = useState([]);

  useEffect(() => {
    axios.get(`/wishlist:${props.User.UserId}`).then(res => {
      console.log(res.data);
      setwishlist(res.data);
    });
  }, []);

  console.log(wishlist.movie, "wishlist");
  console.log(props.User ,"props.User");

  if (!props.User) {
    return <p>Loading ....</p>
    
  }

  let movie = wishlist.map(movie => {
    return movie.movie;
  });

  console.log(movie, "wish list movie");
  let x = movie.map(movie => {
    return (
      <div className="WishListMovieDetails">
        <h1>{movie.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        ></img>
        <p>{movie.overview}</p>

        <button onClick={()=>{

          axios.delete(`/deleteItem/${movie.id}`)
          .then(res=>{

             console.log(res.data);
            
          })
        }}>Click to Delete</button>
      </div>
    );
  });
  return (
    <div className="WishList">
      <div className="WishListBackround"></div>
      <h1 className="Wishlist-title">
  <i> favorite  movies </i>
        </h1>
      <div className="WishListMovies">
      
        {x}
      </div>
    </div>
  );
}


const MystateToProps = (Mysstate)=>{

  console.log(Mysstate);
  return{User : Mysstate.User}
  
}

export default connect(MystateToProps )(WishList) ;
// adult: false
// backdrop_path: "/oCFbh4Mrd0fuGanCgIF6sG27WGD.jpg"
// genre_ids: (2) [35, 18]
// id: 554993
// original_language: "sv"
// original_title: "Britt-Marie var här"
// overview: "Britt-Marie, a woman in her sixties, decides to leave her husband and start anew. Having been housewife for most of her life and and living in small backwater town of Borg, there isn't many jobs available and soon she finds herself fending a youth football team."
// popularity: 210.784
// poster_path: "/1Duc3EBiegywczxTWekvy03HWai.jpg"
// release_date: "2019-01-25"
// title: "Britt-Marie Was Here"
// video: false
// vote_average: 5.2
// vote_count: 13
