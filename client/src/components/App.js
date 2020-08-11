import React from "react";
import SearchMovie from "./searchMovie/SearchMovie";
// import MoviesList from "./MoviesList";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import SelectedMovie from "./selectedMovie/SelectedMovie"; 
import PopularMovies from "./popularMovies/PopularMovies";
import MainNavbar from "./mainNavbar/Navbar";
import TopRated from "./topRated/TopRated";
import Upcoming from "./upcoming/Upcoming";
import WishList from "./wishList/WishList";
import GanersComponents from "./ganercomponent/GanersComponents";
import Footer from "./footer/Footer";
function App() {
  return (
    <div>
      <Router history={history}>
      <MainNavbar  />
        <div>
          <Switch>
            <Route path="/" exact component={SearchMovie}></Route>
            {/* <Route path="/asmovie/movielist" exact component={MoviesList}></Route> */}
            <Route path="/asmovie/detailsmovie/:id" exact component={SelectedMovie}></Route>
            <Route path="/asmovie/popular" exact component={PopularMovies}></Route>
            <Route path="/asmovie/toprated" exact component={TopRated}></Route>
            <Route path="/asmovie/upcoming" exact component={Upcoming}></Route>
            <Route path="/asmovie/wishlist" exact component={WishList}></Route>
            <Route path="/asmovie/ganer/:id" exact component={GanersComponents}></Route>
          </Switch>

        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
