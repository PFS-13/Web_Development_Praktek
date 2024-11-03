import React from 'react';
import { Head} from '@inertiajs/react';
import Topbar from '@/Components/Topbar';
import HeroSection from '@/Components/Home/HeroSection';
// import HorizontalScroll from '@/Components/Home/HorizontalScroll';
import '../../css/beranda-style.css';
import '../../css/styles.css';
import '../../css/topbar.css'
export default function Home(prop) {
  return (
    <div>
      <Head title={prop.title}/>
      <Topbar />     
      <HeroSection /> 
      
      {/* <HorizontalScroll title="Popular Movies" /> */}
    </div>
  );
};


