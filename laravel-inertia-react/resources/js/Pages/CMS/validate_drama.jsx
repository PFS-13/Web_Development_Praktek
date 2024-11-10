import React from "react";
import { FaEdit, FaFilter, FaSearch, FaTrash } from 'react-icons/fa'; // Icon untuk Edit dan Delete
import { IoAdd } from 'react-icons/io5';

const Validate = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-80">
          <span className="btn btn-outline-secondary">
            <IoAdd />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Find drama..."
          />
          <button className="btn btn-outline-secondary">
            <FaSearch />
          </button>
          <button className="btn btn-outline-secondary">
            <FaFilter />
          </button>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Alternate Title</th>
            <th scope="col">Actor</th>
            <th scope="col">Genre</th>
            <th scope="col">Sinopsis</th>
            <th scope="col">Availability</th>
            <th scope="col">Trailer</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Contoh data dummy */}
          {[1, 2, 3].map((id) => (
            <tr key={id}>
              <th scope="row">{id}</th>
              <td>Naruto</td>
              <td>Sasuke</td>
              <td>Action</td>
              <td>This is the synopsis of the drama.</td>
              <td>Available</td>
              <td><a href="https://www.youtube.com/watch?v=12345" target="_blank" rel="noopener noreferrer">Watch Trailer</a></td>
              <td>
                <button className="btn btn-danger btn-sm me-2">
                  <FaTrash />
                </button>
                <button className="btn btn-success btn-sm">
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Validate;
