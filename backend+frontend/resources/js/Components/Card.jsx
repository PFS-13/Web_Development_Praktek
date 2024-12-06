// src/components/Card.jsx
import React from 'react';
import '../../css/search-page.css'
import { Link } from '@inertiajs/react';
const isMovie = (movie) => {
    const moviesArray = movie[0];
    return moviesArray.map((data,i) => {  
        return <div key={i}>

            <Link href={route('movie.detail')} method="get" data={{ id: data.id_movies }} as="button" className='card++'>
                <article className="card__article">
                <div className="card__data">
                    <img src={data.link_posters} alt="card image" className="card__img"/>
                    <h1 className="card__title">{data.title}</h1>
                    <p className="card__genre">{data.year}</p>
                    <p className="card__genre">{data.country}</p>            
                </div>
            </article> 
        </Link>
        </div>
    })
}
const noMovie = () => {
    return (
        <div className='no-movie'>
            Tidak ada film yang anda cari
        </div>
    )
}

const Card = ({movie}) => {
  const movieLen = movie[0].length
  if (movieLen > 0){
    return isMovie(movie)   
  } else {
    return noMovie()
  }
}

export default Card
