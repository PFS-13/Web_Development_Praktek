import React from 'react';
import { FaEdit, FaFilter, FaSearch, FaTrash } from 'react-icons/fa'; // Icon untuk Edit dan Delete
import { IoAdd } from 'react-icons/io5';
import '../../../css/CMS/Dramas.css'; // File CSS opsional jika ingin menambah styling khusus

const Dramas = () => {
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
      <table className="table table-light table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Actors</th>
            <th scope="col">Genres</th>
            <th scope="col">Sinopsis</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Contoh data dummy */}
          {[1, 2, 3, 4].map((id) => (
            <tr key={id}>
              <th scope="row">{id}</th>
              <td>Naruto</td>
              <td>Sasuke</td>
              <td>Action</td>
              <td>Konohagakure story</td>
              <td>Finished</td>
              <td>
                <button className="btn btn-danger btn-sm me-3">
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

export default Dramas;
