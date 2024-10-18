// src/components/Card.jsx
import React from 'react';
import '../../css/search-page.css'
const isMovie = (movie) => {
    const moviesArray = movie[0];
    return moviesArray.map((data,i) => {  
        return <div key={i}>
            <a href="awo/" className='card++'>
                <article class="card__article">
                <div class="card__data">
                    <img src={data.link_posters} alt="card image" class="card__img"/>
                    <h1 class="card__title">{data.title}</h1>
                    <p class="card__genre">{data.year}</p>            
                </div>
            </article> 
        </a>
        </div>
    })
}
const noMovie = () => {
    return (
        <div className='no-movie'>
            Tidak ada movie yang anda cari
        </div>
    )
}

const Card = ({movie}) => {
  if (!movie) return noMovie() 
  return isMovie(movie)
}

export default Card
