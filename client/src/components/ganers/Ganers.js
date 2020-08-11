import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { MovieGaners ,GetGanerMovies } from "../../Actions/index";
import Dropdown from "react-bootstrap/Dropdown";

function Ganers(props) {
  useEffect(() => {
    props.MovieGaners();
  }, []);
  if (!props.ganers) {
    return <h1>Loading.....</h1>;
  }

  console.log(props.ganers.genres);
  const selectedganer = props.ganers.genres.map(ganer => {
    console.log(ganer.name, "ganer");


    return <Dropdown.Item href={`#${ganer.id}` }onClick={()=>{
        console.log(ganer.id);
        props.GetGanerMovies(ganer.id ,ganer.name)
        
    }} >{ganer.name}</Dropdown.Item>;
  });
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Geners
      </Dropdown.Toggle>
      <Dropdown.Menu> {selectedganer}</Dropdown.Menu>
    </Dropdown>
  );
}
const mapStateToProps = Mystate => {
  console.log(Mystate.ganers, "Ganers Components");
  return { ganers: Mystate.ganers };
};

export default connect(mapStateToProps, { MovieGaners ,GetGanerMovies })(Ganers);
