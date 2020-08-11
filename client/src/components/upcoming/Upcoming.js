import React from 'react'
import Genremovies from '../Typemovies'
import '../topRated/TopRated.css'

export default function Upcoming() {
    return (
        <div className="TopRated">
        <div className='backtopRated'></div>
    <div className="TitleTopRated">

        <h1><i>Upcoming Movies</i></h1>
    </div>
    <Genremovies genre={'upcoming'}/>
</div>
    )
}

