import Card from '../Components/Card';
import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Topbar from '@/Components/Topbar';
import '../../css/search-page.css'
import '../../css/styles.css';
import Paginator from '@/Components/Paginator';

export default function Home(prop) {
    return (
    <div>
    <Head title={prop.title}/>
    <Topbar/>     
        <div class="card_movie">
            <div class="card__container">
                <Card movie={prop.movies.data}/>
            </div>
            <div className="paginator">
                <Paginator meta={prop.movies.meta}/>
            </div>
        </div>
    </div>
  );
};



