import React from 'react'
import Genremovies from '../Typemovies';
import './TopRated.css'

export default function TopRated() {
    return (
        <div className="TopRated">
            <div className='backtopRated'></div>
        <div className="TitleTopRated">

            <h1><i>Top Rated Movies</i></h1>
        </div>
        <Genremovies genre={'top_rated'}/>
    </div>
    )
}
