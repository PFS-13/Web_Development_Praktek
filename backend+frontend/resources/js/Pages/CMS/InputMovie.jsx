import { Head, Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import '../../../css/CMS/cms.css'

import SidebarCMS from '@/Components/CMS/SidebarCMS';
import { Inertia } from '@inertiajs/inertia';

const InputNewDrama = () => {
  // State untuk form input


  const [formData, setFormData] = useState({
    filmName: '',
    alternateTitle: '',
    year: '',
    linkPoster: '',
    country: '',
    synopsis: '',
    availabilitys: [],
    trailer: '',
    awards: [],
    genres: [],
    actors: []
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

  const handleActorChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      actors: checked
        ? [...prevState.actors, value]
        : prevState.actors.filter((actor) => actor !== value),
    }));
  };
  const handleAwardChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      awards: checked
        ? [...prevState.awards, value]
        : prevState.awards.filter((award) => award !== value),
    }));
  };

  const handleAvailabilityChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      availabilitys: checked
        ? [...prevState.availabilitys, value]
        : prevState.availabilitys.filter((availability) => availability !== value),
    }));
  };

  // Handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Lakukan sesuatu dengan data form, seperti mengirim ke backend
    Inertia.post(route('insert-movie'), formData);
  };

  

  

  return (
    
    <div>
    <Head title='Input New Movie'></Head>
    <SidebarCMS>
    <div className="mt-1">
    <Link className='btn btn-primary' href='/admin/movies'>back to list movies</Link>
  <h2 className="mb-4 mt-4">  Input New Drama</h2>

      {/* Form untuk input drama */}
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="filmName" className="form-label">Name Film</label>
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

        {/* Genres */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Genres</label>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {genreList.map(genre => (
                <div className="col" key={genre.genre}>
                        <div className="form-check ">
                        <input className="form-check-input" onChange={handleGenreChange} type="checkbox" value={genre.id_genre} id={genre.genre}   />
                        <label className="form-check-label" for={genre.genre}>
                            {genre.genre}
                        </label>
                    </div> 
                </div>
                ))}
              </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="availability" className="form-label">Availability</label>
             {['Disney +  ', 'Netflox', 'Amazon TV', 'Apple TV', 'HBO'].map((availability) => (
              <div className="form-check" key={availability}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={availability}
                  id={`aav${availability}`}
                  onChange={handleAvailabilityChange}
                />
                <label className="form-check-label" htmlFor={`aav${availability}`}>
                  {availability}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Actor Search */}
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="actorSearch" className="form-label"> Actors</label>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3" style={{ maxHeight: '500px', overflowY: 'auto' }}>
            {actorList.map(actor => (
                <div className="col" key={actor.id_actor}>
                        <div className="form-check ">
                        <input className="form-check-input" onChange={handleActorChange} type="checkbox" value={actor.id_actor} id={actor.id_actor} />
                        <label className="form-check-label" for={actor.id_actor}>
                            {actor.actor_name}
                            <img src={actor.link_photo} alt=""  className='actor-photo input-photo mb-3'/>
                        </label>
                    </div> 
                </div>
                ))}
              </div>
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
          <div className="col-md mt-3 mb-3">
            <label htmlFor="awards" className="form-label">Awards</label>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {awardList.map(award => (
                <div className="col" key={award.id_award}>
                        <div className="form-check ">
                        <input className="form-check-input" onChange={handleAwardChange} type="checkbox" value={award.id_award} id={ award.id_award + award.awards + award.year} />
                        <label className="form-check-label" for={ award.id_award + award.awards + award.year}>
                             {award.awards} ( {award.country} , {award.year})
                        </label>
                    </div> 
                </div>
                ))}
            </div>
          </div>

        {/* Submit button */}
        <div className="row">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
    </SidebarCMS>
    </div>
  );

};


export default InputNewDrama;
