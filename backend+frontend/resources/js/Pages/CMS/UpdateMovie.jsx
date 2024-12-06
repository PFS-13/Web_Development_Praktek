import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import '../../../css/CMS/cms.css'

import SidebarCMS from '@/Components/CMS/SidebarCMS';
import { Inertia } from '@inertiajs/inertia';

const UpdateMovies = (prop) => {
    console.log(prop);
  // State untuk form input

  const movie = prop.movie[0];
    

  const [formData, setFormData] = useState({
    id_movies:movie.id_movies,
    filmName: movie.title || '',
    alternateTitle: movie.alternative_title || '',
    year: movie.year || '',
    linkPoster: movie.link_posters || '',
    country: movie.id_country || '',
    synopsis: movie.synopsis || '',
    trailer: movie.link_trailers || '',
  });

  const [countryList, setCountryList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [actorList, setActorList] = useState([]);
  const [awardList, setAwardList] = useState([]);

  useEffect(() => {
    axios.get('/api/countries').then(res => setCountryList(res.data));
    axios.get('/api/genres').then(res => setGenreList(res.data));
    axios.get('/api/actors').then(res => setActorList(res.data));
    axios.get('/api/awards').then(res => setAwardList(res.data));


  }, []);

  // Handler untuk perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler untuk checkbox genres
  const handleGenreChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      genres: checked
        ? [...prevState.genres, value]
        : prevState.genres.filter((genre) => genre !== value),
    }));
  };


  // Handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Lakukan sesuatu dengan data form, seperti mengirim ke backend
    Inertia.post(route('update-movie'), formData);
  };
  return (
    
    <div>
    <Head title='Input New Movie'></Head>
    <SidebarCMS>
    <div className="mt-1">
      <h2 className="mb-4">Update Drama</h2>

      {/* Form untuk input drama */}
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="filmName" className="form-label">Name Film</label>
            <input
              type="hidden"
              className="form-control"
              id="id_movies"
              name="id_movies"
              value={formData.id_movies}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="form-control"
              id="filmName"
              name="filmName"
              value={formData.filmName}
              onChange={handleInputChange}
              placeholder="Enter film name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="alternateTitle" className="form-label">Alternate Title</label>
            <input
              type="text"
              className="form-control"
              id="alternateTitle"
              name="alternateTitle"
              value={formData.alternateTitle}
              onChange={handleInputChange}
              placeholder="Enter alternate title"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="year" className="form-label">Year</label>
            <input type="number" required min={1900} max={2025} className='form-control' d="year"
              name="year" value={formData.year} onChange={handleInputChange}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="country" className="form-label">Country</label>
            <select
              id="country"
              className="form-control"
              name="country"
              required
              value={formData.country}
              onChange={handleInputChange}
            >
              <option value="" selected disabled> -- Select Country -- </option>
                              {countryList.map(country => (
                                  <option key={country.id_country} value={country.id_country}>{country.name_country}</option>
                              ))}
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="synopsis" className="form-label">Synopsis</label>
            <textarea
            required
              className="form-control"
              id="synopsis"
              name="synopsis"
              value={formData.synopsis}
              onChange={handleInputChange}
              rows="3"
              placeholder="Enter drama synopsis"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="poster" className="form-label">Upload Link Poster</label>
            <input
              type="text"
              className="form-control"
              id="linkPoster"
              name="linkPoster"
              value={formData.linkPoster}
              onChange={handleInputChange}
              placeholder="Enter Link Poster"
              required 
            />
          </div>
        </div>

   

          <div className="col-md">
            <label htmlFor="trailer" className="form-label">Trailer</label>
            <input
              type="text"
              className="form-control"
              id="trailer"
              name="trailer"
              value={formData.trailer}
              onChange={handleInputChange}
              placeholder="Trailer of film"
            />
          </div>  
      

        {/* Submit button */}
        <div className="row mb-3 mt-3">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">Edit</button>
          </div>
        </div>
      </form>
    </div>
    </SidebarCMS>
    </div>
  );

};


export default UpdateMovies;
