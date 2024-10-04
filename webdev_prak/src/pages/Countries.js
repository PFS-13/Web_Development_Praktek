import React from 'react';
import { FaEdit, FaFilter, FaSearch, FaTrash } from 'react-icons/fa'; // Icon untuk Edit dan Delete
import { IoAdd } from 'react-icons/io5';
import './Countries.css'; // File CSS opsional jika ingin menambah styling khusus

const Countries = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-80">
          <span className="btn btn-outline-secondary"><IoAdd/></span>
          <input
            type="text"
            className="form-control"
            placeholder="Find drama..."
          />
          <button className="btn btn-outline-secondary">
            <i className="fa fa-search"><FaSearch/></i>
          </button>
          <button className="btn btn-outline-secondary">
            <i className="fa fa-filter"><FaFilter/></i>
          </button>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Countries</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Contoh data dummy */}
          {[1, 2, 3].map((id) => (
            <tr key={id}>
              <th scope="row">{id}</th>
              <td>naruto</td>
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

export default Countries;