import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Menggunakan ikon pencarian dari react-icons
import './input_drama.css'; // File CSS untuk styling tambahan

const InputNewDrama = () => {
  // State untuk form input
  const [formData, setFormData] = useState({
    filmName: '',
    alternateTitle: '',
    year: '',
    country: 'Korea',
    synopsis: '',
    availability: '',
    trailer: '',
    awards: 'Award 1',
    genres: [],
  });

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
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Input New Drama</h2>

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
            <select
              id="year"
              className="form-select"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
            >
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="country" className="form-label">Country</label>
            <select
              id="country"
              className="form-select"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            >
              <option value="Korea">Korea</option>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="synopsis" className="form-label">Synopsis</label>
            <textarea
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
            />
          </div>
        </div>

        {/* Genres */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Genres</label>
            {['Romance', 'Action', 'Comedy', 'Thriller', 'Fantasy'].map((genre) => (
              <div className="form-check" key={genre}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={genre}
                  id={`genre${genre}`}
                  onChange={handleGenreChange}
                />
                <label className="form-check-label" htmlFor={`genre${genre}`}>
                  {genre}
                </label>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            <label htmlFor="availability" className="form-label">Availability</label>
            <select
              id="availability"
              className="form-select"
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
            >
              <option value="Disney+">Disney +</option>
              <option value="Netflix">Netflix</option>
              <option value="AmazonTV">Amazon TV</option>
              <option value="AppleTV">Apple TV</option>
              <option value="HBO">HBO</option>
            </select>
          </div>
        </div>

        {/* Actor Search */}
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="actorSearch" className="form-label">Find actors</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="actorSearch"
                placeholder="Find actors..."
              />
              <button className="btn btn-outline-secondary" type="button">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        {/* Trailer and Awards */}
        <div className="row mb-3">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <label htmlFor="awards" className="form-label">Awards</label>
            <select
              id="awards"
              className="form-select"
              name="awards"
              value={formData.awards}
              onChange={handleInputChange}
            >
              <option value="Award 1">Award 1</option>
              <option value="Award 2">Award 2</option>
              <option value="Award 3">Award 3</option>
            </select>
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
  );
};

export default InputNewDrama;
