import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronRight, FaFilm } from 'react-icons/fa';

const Sidebar = () => {
  const [isDramaDropdownOpen, setIsDramaDropdownOpen] = useState(false);

  // Fungsi untuk toggle dropdown
  const toggleDramaDropdown = () => {
    setIsDramaDropdownOpen(!isDramaDropdownOpen);
  };

  return (
    <div className="bg-dark text-white sidebar">
      <h2 className="text-center py-3">Movie Hub</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/dashboard" end>
            Home
          </NavLink>
        </li>

        {/* Dropdown untuk Dramas */}
        <li className="nav-item">
          <button 
            className={`nav-link btn btn-link text-left ${isDramaDropdownOpen ? 'active' : ''}`} 
            onClick={toggleDramaDropdown}
          >
            <span>Dramas</span>
            <FaChevronRight 
              className={`chevron-icon ${isDramaDropdownOpen ? 'rotate' : ''} float-right`} 
            />
          </button>

          {/* Conditional Rendering: Tampilkan submenu hanya jika dropdown terbuka */}
          {isDramaDropdownOpen && (
            <div className="collapse show">
              <div className="bg-dark py-2 collapse-inner rounded">
                <NavLink className="nav-link" to="/admin/dramas">List Drama</NavLink>
                <NavLink className="nav-link" to="/admin/validate">Validate</NavLink>
                <NavLink className="nav-link" to="/admin/input_drama">Input New Drama</NavLink>
              </div>
            </div>
          )}
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/countries">
            Countries
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/awards">
            Awards
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/genre">
            Genres
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/actor">
            Actor
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/comment">
            Comment
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/user">
            User
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
