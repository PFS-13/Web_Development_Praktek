import React, { useState } from 'react';
import { FaEdit, FaFilter, FaSearch, FaTrash } from 'react-icons/fa'; // Icon untuk Edit dan Delete
import { IoAdd } from 'react-icons/io5';
import './Actor.css'; // File CSS opsional jika ingin menambah styling khusus

const Actor = () => {
  // State untuk menyimpan data actor (contoh data dummy)
  const [actors, setActors] = useState([
    { id: 1, country: 'Naruto', name: 'Hyung', photo: 'https://via.placeholder.com/50x50' },
    { id: 2, country: 'One Piece', name: 'Luffy', photo: 'https://via.placeholder.com/50x50' },
    { id: 3, country: 'Attack on Titan', name: 'Eren', photo: 'https://via.placeholder.com/50x50' },
  ]);

  // Fungsi untuk menghapus aktor berdasarkan id
  const handleDelete = (id) => {
    const updatedActors = actors.filter(actor => actor.id !== id);
    setActors(updatedActors);
    console.log(`Actor with id: ${id} deleted`);
  };

  // Fungsi untuk mengedit aktor (bisa dikembangkan lebih lanjut)
  const handleEdit = (id) => {
    const actorToEdit = actors.find(actor => actor.id === id);
    console.log(`Edit actor:`, actorToEdit);
    // Implementasikan logika untuk mengedit data actor
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-80">
          <span className="btn btn-outline-secondary"><IoAdd /></span>
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
            <th scope="col">No</th>
            <th scope="col">Countries</th>
            <th scope="col">Actor Name</th>
            <th scope="col">Photo</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor, index) => (
            <tr key={actor.id}>
              <th scope="row">{index + 1}</th>
              <td>{actor.country}</td>
              <td>{actor.name}</td>
              <td><img src={actor.photo} alt="Actor Photo" /></td>
              <td>
                <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(actor.id)}>
                  <FaTrash />
                </button>
                <button className="btn btn-success btn-sm" onClick={() => handleEdit(actor.id)}>
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

export default Actor;
