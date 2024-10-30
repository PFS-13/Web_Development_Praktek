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
          <NavLink className="nav-link" to="/" end>
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
                <NavLink className="nav-link" to="/dramas">List Drama</NavLink>
                <NavLink className="nav-link" to="/validate">Validate</NavLink>
                <NavLink className="nav-link" to="/input_drama">Input New Drama</NavLink>
              </div>
            </div>
          )}
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/countries">
            Countries
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/awards">
            Awards
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/genre">
            Genres
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/actor">
            Actor
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/comment">
            Comment
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user">
            User
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
