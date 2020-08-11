import axios from "axios";
import history from "../history";


export const SignIn =(UserId , UserName)  => {
  return {
    type: 'SIGN_IN',
    payload:{UserId: UserId ,UserName:UserName}
  };
};
export const SignOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};
export const GetMovies = (moviename ,page) => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: "3ea150464035bc92e08e1ecfd93b9557",
        query: moviename,
        page:page
      }
    })
    .then(res => {
      console.log(res.data);
      // res.data.push({moviename:moviename})
      dispatch({ type: "GET_MOVIES", payload: {res:res.data ,moviename:moviename } });
      // history.push("/asmovie/movielist");
    });
};

export const MovieGaners = ()=>dispatch=>{
  axios
  .get(`https://api.themoviedb.org/3/genre/movie/list`, {
    params: {
      api_key: "3ea150464035bc92e08e1ecfd93b9557",
    }
  })
  .then(res=>{

    console.log(res.data ,"GANERS_MOVIE");
    dispatch({ type: "GANERS_MOVIE", payload: res.data });

    
  })

}

export const GetGanerMovies = (ganerId, ganername)=>dispatch=>{
  axios
  .get(`https://api.themoviedb.org/3/discover/movie`, {
    params: {
      api_key: "3ea150464035bc92e08e1ecfd93b9557",
      with_genres:ganerId
    }
  })
  .then(res=>{

    console.log(res.data ,"findGanerslist");
    dispatch({ type: "SELECTED_GANER", payload: res.data });

      history.push(`/asmovie/ganer/${ganername}`);
    
  })



}

export const selectedmovie = movieId => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        api_key: "3ea150464035bc92e08e1ecfd93b9557",
      }
    })
    .then(res => {
      console.log(res.data ,"SELECTED_MOVIE");
      dispatch({ type: "SELECTED_MOVIE", payload: res.data });
      history.push(`/asmovie/detailsmovie/${movieId}`);
    });
};

export const showTrailer = movieId => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
      params: {
        api_key: "3ea150464035bc92e08e1ecfd93b9557"
      }
    })
    .then(res => {
      console.log(res.data ,"SHOW_TRAILER");
      dispatch({ type: "SHOW_TRAILER", payload: res.data.results[0] });
      // history.push(`/asmovie/detailsmovie/${movieId}`);
    });
};

export const similarMovies = (movieId)=>dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}/similar`, {
      params: {
        api_key: "3ea150464035bc92e08e1ecfd93b9557"
      }
    })
    
    .then(res=>{
      console.log(res.data);
      dispatch({ type: "SIMILAR_MOVIES", payload: res.data });
      
    })


}



export const Getrecommend = (movie_id)=> dispatch=>{
axios
.get(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations`, {
  params: {
    api_key: "3ea150464035bc92e08e1ecfd93b9557"
  }
})
.then(res=>{
  console.log(res.data);
  dispatch({ type: "RECOMMEND_MOVIES", payload: res.data });
  
})


}

export const GetcastOfMovie = (movie_id)=> dispatch=>{
  axios
  .get(`https://api.themoviedb.org/3/movie/${movie_id}/credits`, {
    params: {
      api_key: "3ea150464035bc92e08e1ecfd93b9557"
    }
  })
  .then(res=>{
    console.log(res.data , "crerdits");
    dispatch({ type: "CAST", payload: res.data.cast });
    
  })
  
  
  }