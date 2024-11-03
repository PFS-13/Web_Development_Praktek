import React from 'react';
import { FaFilm, FaUser, FaChartLine, FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Dashboard</h2>

      {/* Statistik Singkat */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card bg-primary text-white text-center">
            <div className="card-body">
              <FaFilm size={50} />
              <h4>120</h4>
              <p>Total Movies</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-success text-white text-center">
            <div className="card-body">
              <FaUser size={50} />
              <h4>50</h4>
              <p>Total Users</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-warning text-white text-center">
            <div className="card-body">
              <FaChartLine size={50} />
              <h4>200</h4>
              <p>Total Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tombol Tambah Film */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Manage Movies</h4>
        <button className="btn btn-primary">
          <FaPlus /> Add New Movie
        </button>
      </div>

      {/* Tabel Film */}
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Year</th>
            <th scope="col">Genre</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Data dummy */}
          {[1, 2, 3].map((id) => (
            <tr key={id}>
              <th scope="row">{id}</th>
              <td>Movie Title {id}</td>
              <td>202{ id }</td>
              <td>Action</td>
              <td>
                <button className="btn btn-danger btn-sm me-2"><FaTrash /></button>
                <button className="btn btn-success btn-sm"><FaEdit /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
