import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import GoogleAuth from "../googleAuth/GoogleAuth";
import { connect } from "react-redux";
import Ganers from "../ganers/Ganers";
function MainNavbar(props) {
  const { User } = props.state;
  console.log(User);

  return ( <Navbar collapseOnSelect expand="md" fixed="top" style={{backgroundColor:"rgba(0,0,0,0.7)"}}  variant="dark">
      <Link to="/" className="navbar-brand text-light">ASmovies</Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
          {/* <Link  className="navbar-brand text-light" to="/asmovie/popular">
              popular Movies
            </Link>  */}
            {User === null ? (
              ""
            ) : (
              <Link className="navbar-brand text-light" to="/asmovie/wishlist">
                Wish list
              </Link>
            )}

            <Link className="navbar-brand text-light" to="/asmovie/toprated">
              Top Rated Movies
            </Link>
            <Link className="navbar-brand text-light" to="/asmovie/upcoming">
              Up coming Movies
            </Link>
          <Ganers/>
          </Nav>
      <GoogleAuth />
        </Navbar.Collapse>
      </Navbar>
      );
}
const mappropstostate = state => {
  console.log(state);
  return { state };
};
export default connect(mappropstostate)(MainNavbar);
