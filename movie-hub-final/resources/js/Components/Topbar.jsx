import React, { useState, useEffect, useRef } from 'react';
import Modal from '@/Components/Modal';
import '../../css/topbar.css'
const Topbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');
    const navLinks = document.querySelector('.nav-links');

    if (searchIcon) {
      searchIcon.addEventListener('click', function () {
        if (searchInput.classList.contains('hidden')) {
          searchInput.classList.remove('hidden');
          searchInput.classList.add('visible');
          searchInput.focus();
          if (navLinks) navLinks.style.display = 'none';
          searchIcon.style.display = 'none';
        }
      });
    }

    if (searchInput) {
      searchInput.addEventListener('blur', function () {
        if (searchInput.classList.contains('visible')) {
          searchInput.classList.remove('visible');
          searchInput.classList.add('hidden');
          if (navLinks) navLinks.style.display = 'flex';
          searchIcon.style.display = 'block';
        }
      });
    }

    return () => {
      if (searchIcon) searchIcon.removeEventListener('click', () => {});
      if (searchInput) searchInput.removeEventListener('blur', () => {});
    };
  }, []);

  return (
    <header>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkMenu">
          <i className="fa fa-bars"></i>
        </label>
        <a href="/" className="logo">Movies Hub</a>
        <ul>
          <li>
            <form action="">
              <input type="text" id="search-input" className="hidden" placeholder="Search..." />
            </form>
          </li>
          <li>
            <div className="search-icon" id="search-icon">
              <i className="fa fa-search"></i>
            </div>
          </li>
          <li>
            <div className="filter-icon" id="filter-icon" onClick={toggleModal}>
              <i className="fa fa-filter"></i>
            </div>
          </li>
          <li><a href="#action" className="Navbar">Japan</a></li>
          <li><a href="#horror" className="Navbar">Korea</a></li>
          <li><a href="#comedy" className="Navbar">China</a></li>
          <li><a href="/login" className="Navbar">
            <i className="fa fa-sign-up"></i> Login
          </a></li>
        </ul>
      </nav>

      {/* Tambahkan Modal di sini */}
      <Modal show={isModalOpen} onClose={toggleModal} >
      <form className='p-4 form-filter'>
              <div class="form-group pb-3">
                <label className='pb-1 title-label' for="Country">Country</label>
                <select class="form-control" id="Country">
                  <option selected>--Select Country--</option>
                  <option>America</option>
                  <option>China</option>
                  <option>Japan</option>
                </select>
              </div>
              <div class="form-group">
                <label for="Genres" className='title-label'>Genres</label>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                <div class="col">
                    <div class="form-check ">
                        <input class="form-check-input" type="checkbox" value="Action" id="action"/>
                        <label class="form-check-label" for="action">
                            Action
                        </label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check ">
                        <input class="form-check-input" type="checkbox" value="Adventure" id="adventure"/>
                        <label class="form-check-label" for="adventure">
                            Adventure
                        </label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check ">
                        <input class="form-check-input" type="checkbox" value="Comedy" id="comedy"/>
                        <label class="form-check-label" for="comedy">
                            Comedy
                        </label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check ">
                        <input class="form-check-input" type="checkbox" value="Drama" id="drama"/>
                        <label class="form-check-label" for="drama">
                            Drama
                        </label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check ">
                        <input class="form-check-input" type="checkbox" value="Comedy" id="comedy"/>
                        <label class="form-check-label" for="comedy">
                            Comedy
                        </label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check ">
                        <input class="form-check-input" type="checkbox" value="Drama" id="drama"/>
                        <label class="form-check-label" for="drama">
                            Drama
                        </label>
                    </div>
                </div>
            </div>
              </div>
          <div className="form-group btn-filter">
              <button className='btn btn-warning'>Filter</button>
          </div>
      </form>
            </Modal>
    </header>
  );
};

export default Topbar;
