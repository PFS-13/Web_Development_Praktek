import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronRight, FaFilm } from 'react-icons/fa'; // Menggunakan FaChevronRight untuk panah dan FaCog untuk ikon pengaturan

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
          <NavLink className="nav-link" activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>

        {/* Dropdown untuk Dramas */}
        <li className="nav-item">
          <button 
            className={`nav-link btn btn-link text-left ${isDramaDropdownOpen ? 'active' : ''}`} 
            onClick={toggleDramaDropdown}
          >
            {/* <FaFilm className="me-2" />  */}
            <span>Dramas</span>

            {/* Panah dengan efek rotasi */}
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
          <NavLink className="nav-link" activeClassName="active" to="/countries">
            Countries
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/awards">
            Awards
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/genre">
            Genres
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/actor">
            Actor
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/comment">
            Comment
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/user">
            User
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
