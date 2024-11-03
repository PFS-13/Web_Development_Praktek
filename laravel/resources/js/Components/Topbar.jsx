import React, { useState, useEffect } from 'react';
import Modal from '@/Components/Modal';
import '../../css/topbar.css'   
import '../../css/dropdown.css'
import { Inertia } from '@inertiajs/inertia';
import { Link, usePage} from '@inertiajs/react';
import Dropdown from './Dropdown';


export default function Topbar({query}){
  const user = usePage().props.auth.user;
  console.log('iser:', user)
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  useEffect(() => {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');
    const navLinks = document.querySelector('.nav-links');

    if (searchIcon) {
      searchIcon.addEventListener('click', function () {
        if (searchInput.classList.contains('hidden')) {
          searchInput.classList.remove('hidden');
          searchInput.classList.add('visible');
          searchInput.focus();
          if (navLinks) navLinks.style.display = 'none';
          searchIcon.style.display = 'none';
        }
      });
    }

    if (searchInput) {
      searchInput.addEventListener('blur', function () {
        if (searchInput.classList.contains('visible')) {
          searchInput.classList.remove('visible');
          searchInput.classList.add('hidden');
          if (navLinks) navLinks.style.display = 'flex';
          searchIcon.style.display = 'block';
        }
      });
    }

    return () => {
      if (searchIcon) searchIcon.removeEventListener('click', () => {});
      if (searchInput) searchInput.removeEventListener('blur', () => {});
    };
  }, []);

  // Search 
  const [searchQuery, setSearchQuery] = useState(query || '');
  const handleSubmit = (e) => {
    event.preventDefault();
    Inertia.visit('/search',  {
      method : 'get',
      data : {query : searchQuery},
      preserveState: true
    });

};
const [genres, setGenres] = useState([]);
const [selectedGenres, setSelectedGenres] = useState([]);

const [countries, setCountries] = useState([]);
const [selectedCountry, setSelectedCountry] = useState('');
useEffect(() => {
  axios.get('/api/countries').then(res => setCountries(res.data));
  axios.get('/api/genres').then(res => setGenres(res.data));

}, []);

const handleGenreChange = (e) => {
  const { value, checked } = e.target;

  if (checked) {
    // Tambahkan genre ke array jika dicentang
    setSelectedGenres(prev => [...prev, value]);
  } else {
    // Hapus genre dari array jika tidak dicentang
    setSelectedGenres(prev => prev.filter(genre => genre !== value));
  }
};

const fetchMovies = (e) => {
  event.preventDefault();
  Inertia.visit('/search',  {
    method : 'get',
    data : {country : selectedCountry, genre : selectedGenres},
    preserveState: true
    });
};
return (
    <header>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkMenu">
          <i className="fa fa-bars"></i>
        </label>
        <Link href="/" className="logo">Movies Hub</Link>
        <ul>
          <li>
            <form onSubmit={handleSubmit}>
              <input type="text" id="search-input"  name='query' className="hidden" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} required/>
              <button type="submit" className='search-btn'>search</button>
            </form>
          </li>
          <li>
            <div className="search-icon" id="search-icon">
              <i className="fa fa-search"></i>
            </div>
          </li>
          <li>
            <div className="filter-icon" id="filter-icon" onClick={toggleModal}>
              <i className="fa fa-filter"></i>
            </div>
          </li>
          <li><Link href='/japan' className="Navbar">Japan</Link></li>
          <li><Link href="/korea" className="Navbar">Korea</Link></li>
          <li><Link href="/us" className="Navbar">United States</Link></li>   
          { user ? (
            <ul class="navbar-user">
            <li class="navbar-user-item">
              <Link class="navbar-user-link"> 
                 {user.name}
              </Link>
              <ul class="dropdown">
                {/* <Link className="option"href={route('dashboard')}><li>Dashboard</li> </Link>  */}
                <Link href={route('logout')} className="option" method="post"><li>Log Out </li></Link>
              </ul>
            </li>
          </ul>

  ) : (
    <li ><Link href="/login" className="Navbar">
       Login
    </Link></li>
  )
}
        </ul>
      </nav>

      {/* Tambahkan Modal di sini */}
      <Modal show={isModalOpen} onClose={toggleModal} >
      <form className='p-4 form-filter' onSubmit={fetchMovies}>
              <div className="form-group pb-3">
                <label className='pb-1 title-label' htmlFor="Country">Country</label>
                <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="form-control" id="Country">
                  <option value="">All</option>
                    {countries.map(country => (
                        <option key={country.id_country} value={country.name_country}>{country.name_country}</option>
                    ))}
                </select>
                
              </div>
              <div className="form-group">
                <label for="Genres" className='title-label mb-3'>Genres</label>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {genres.map(genre => (
                <div className="col" key={genre.genre}>
                        <div className="form-check ">
                        <input className="form-check-input" onChange={handleGenreChange} type="checkbox" value={genre.genre} id={genre.genre}/>
                        <label className="form-check-label" for={genre.genre}>
                            {genre.genre}
                        </label>
                    </div> 
                </div>
                ))}
            </div>
              </div>
          <div className="form-group btn-filter">
              <button className='btn btn-warning' type="submit">Filter</button>
          </div>
      </form>
            </Modal>
    </header>
  );
};


