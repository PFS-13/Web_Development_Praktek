import Card from '../Components/Card';
import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Topbar from '@/Components/Topbar';
import '../../css/search-page.css'
import '../../css/styles.css';
import Paginator from '@/Components/Paginator';

export default function Home(prop) {
    console.log('movie-meta',prop)
    return (
    <div>
    <Head title={prop.title}/>
    <Topbar selectedCountry={prop.country}/>   
    {prop.input != '' && (
        <h5 className='search-note'>Hasil Pencarian: '{prop.input}'. <br /> <Link href="/search"> reset pencarian</Link></h5>
        )}        

    <div className="card_movie">
            <div className="card__container">
                <Card movie={prop.movies.data}/>
            </div>
            <div className="paginator">
                <Paginator meta={prop.movies.meta}/>
            </div>
        </div>
    </div>
  );
};



