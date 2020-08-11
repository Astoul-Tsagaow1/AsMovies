// const INATIAL_STATE = {
//   isSinedIn: null,
//   UserId:null
// };
export default (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSinedIn: true, User: action.payload };
    case "SIGN_OUT":
      return { ...state, isSinedIn: false, User: null };
    case "GANERS_MOVIE":
      return { ...state, ganers: action.payload };
    case 'SELECTED_GANER':
      return {...state ,ganermovies:action.payload}
    case "GET_MOVIES":
      return{...state , getmovies: action.payload};
    case "SELECTED_MOVIE":
      return { ...state, selectedMovie: action.payload };
    case "SHOW_TRAILER":
      return { ...state, Showtrailer: action.payload };
    case "SIMILAR_MOVIES":
      return { ...state, similarMovies: action.payload };
      case "CAST":
        return { ...state, casts: action.payload };

    default:
      return state;
  }
};

// export default (state = INATIAL_STATE, action) => {
//   switch (action.type) {
//     case "SIGN_IN":
//       return {...state, isSinedIn: true , UserId:action.payload}
//     case "SIGN_OUT":
//       return {...state, isSinedIn: false ,UserId:null}

//     default:
//       return state;
//   }
// };
