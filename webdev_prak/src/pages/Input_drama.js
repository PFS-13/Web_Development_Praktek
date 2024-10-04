import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Menggunakan ikon pencarian dari react-icons
import './input_drama.css'; // File CSS untuk styling tambahan

const InputNewDrama = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Input New Drama</h2>

      {/* Form untuk input drama */}
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="filmName" className="form-label">Name Film</label>
            <input type="text" className="form-control" id="filmName" placeholder="Enter film name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="alternateTitle" className="form-label">Alternate Title</label>
            <input type="text" className="form-control" id="alternateTitle" placeholder="Enter alternate title" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="year" className="form-label">Year</label>
            <input type="text" className="form-control" id="year" placeholder="Enter release year" />
          </div>
          <div className="col-md-6">
            <label htmlFor="country" className="form-label">Country</label>
            <select id="country" className="form-select">
              <option value="Korea">Korea</option>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="synopsis" className="form-label">Sinopsis</label>
            <textarea className="form-control" id="synopsis" rows="3" placeholder="Enter drama synopsis"></textarea>
          </div>
          <div className="col-md-6">
            <label htmlFor="poster" className="form-label">Upload Poster</label>
            <input type="file" className="form-control" id="poster" />
          </div>
        </div>

        {/* Genres */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Genres</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Romance" id="genreRomance" />
              <label className="form-check-label" htmlFor="genreRomance">Romance</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Action" id="genreAction" />
              <label className="form-check-label" htmlFor="genreAction">Action</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Comedy" id="genreComedy" />
              <label className="form-check-label" htmlFor="genreComedy">Comedy</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Thriller" id="genreThriller" />
              <label className="form-check-label" htmlFor="genreThriller">Thriller</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Fantasy" id="genreFantasy" />
              <label className="form-check-label" htmlFor="genreFantasy">Fantasy</label>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="availability" className="form-label">Availability</label>
            <input type="text" className="form-control" id="availability" placeholder="Enter availability" />
          </div>
        </div>

        {/* Actor Search */}
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="actorSearch" className="form-label">Find actors</label>
            <div className="input-group">
              <input type="text" className="form-control" id="actorSearch" placeholder="Find actors..." />
              <button className="btn btn-outline-secondary" type="button"><FaSearch /></button>
            </div>
          </div>
        </div>

        {/* Actor Table */}
        <table className="table table-light table-hover mb-4">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Countries</th>
              <th scope="col">Actor Name</th>
              <th scope="col">Photos</th>
              <th scope="col">Add</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
              <td><input type="checkbox" /></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
              <td><input type="checkbox" /></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
              <td><input type="checkbox" /></td>
            </tr>
          </tbody>
        </table>

        {/* Trailer and Awards */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="trailer" className="form-label">Trailer</label>
            <input type="text" className="form-control" id="trailer" placeholder="Trailer of film" />
          </div>
          <div className="col-md-6">
            <label htmlFor="awards" className="form-label">Awards</label>
            <select id="awards" className="form-select">
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
