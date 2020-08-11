import React,{useState} from 'react'
import Genremovies from '../Typemovies'
import './PopularMoviesY.css'

export default function PopularMovies() {
  const [CorrentPage, setCorrentPage] = useState(1);

    return (
        <div>
        <div className="PopularMoviesTitle">
        <h1><i>Popular Moives</i></h1>

        </div>
        <Genremovies genre={'popular'}/>
    </div>
    )
}
