import SidebarCMS from '@/Components/CMS/SidebarCMS';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { IoAdd } from 'react-icons/io5';
import Modal from '@/Components/Modal';
import { FaEdit, FaTrash, FaSearch, FaFilter } from 'react-icons/fa';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';

const Genre = ( prop ) => {
    const [genres, setGenres] = useState([]);              // Data asli dari API
    const [filteredGenres, setFilteredGenres] = useState([]); // Data yang akan di-render berdasarkan pencarian
    const [isModalOpen, setModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [genreName, setGenreName] = useState('');
    const [genreId, setGenreId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');     // State untuk input pencarian

    // Mengambil data genre dari API saat komponen dimuat pertama kali
    useEffect(() => {
        axios.get('/api/genres').then(res => {
            setGenres(res.data);
            setFilteredGenres(res.data); // Inisialisasi `filteredGenres` dengan data asli
        });
    }, []);

    const toggleModal = () => setModalOpen(!isModalOpen);

    const toggleEditModal = (genre = null) => {
        setEditModalOpen(!isEditModalOpen);
        if (genre) {
            setGenreId(genre.id_genre);
            setGenreName(genre.genre);
        } else {
            setGenreId(null);
            setGenreName('');
        }
    };

    const handleAddGenre = (e) => {
        e.preventDefault();
        Inertia.post('/insert/genres', { genre: genreName }, {
            onSuccess: () => {
                setModalOpen(false);
                setGenreName('');
            }
        });
    };

    const handleEditGenre = (e) => {
        e.preventDefault();
        Inertia.post('/update/genres', { id_genre: genreId, genre: genreName }, {
            onSuccess: () => {
                setEditModalOpen(false);
                setGenreId(null);
                setGenreName('');
            }
        });
    };

    const handleDeleteGenre = (id_genre) => {
        Inertia.post('/delete/genres', { id_genre }, {
            onSuccess: () => {
                setFilteredGenres(prevGenres => prevGenres.filter(genre => genre.id_genre !== id_genre));
            }
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Filter data `genres` berdasarkan `searchQuery`
        const filtered = genres.filter(genre =>
            genre.genre.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredGenres(filtered);
    };
    const [isNotif, setIsNotif] = useState(false);
    useEffect(() => {
      if(prop.flash.message){
        setIsNotif(true);
      }
      
    }, []);

    return (
        <div>
            <Head title={prop.title || 'Genres'} />
            <SidebarCMS>
                <div className="container-fluid">
                    <h2>Genres</h2>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <form onSubmit={handleSearch} className="input-group w-100">
                            <div className="input-group-prepend" onClick={toggleModal}>
                                <button className="btn btn-outline-secondary" type="button">
                                    <IoAdd />
                                </button>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Find genres..."
                                aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="submit">
                                    <FaSearch />
                                </button>
                                <button className="btn btn-outline-secondary" type="button">
                                    <FaFilter />
                                </button>
                            </div>
                        </form>
                    </div>
                    {isNotif && (
                      <div class="alert alert-success alert-dismissible fade show" role="alert">
                        {prop.flash.message} 
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                     )}

                    {/* Tabel Daftar Genre */}
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredGenres.map((genre, index) => (
                                <tr key={genre.id_genre}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{genre.genre}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm me-2" onClick={() => handleDeleteGenre(genre.id_genre)}>
                                            <FaTrash />
                                        </button>
                                        <button className="btn btn-success btn-sm" onClick={() => toggleEditModal(genre)}>
                                            <FaEdit />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Modal Tambah Genre */}
                    <Modal show={isModalOpen} onClose={toggleModal}>
                        <form onSubmit={handleAddGenre} className="p-4 form-filter">
                            <h3 className="center">Insert New Genre</h3>
                            <div className="form-group">
                                <label htmlFor="genre">Genre Name</label>
                                <input
                                    id="genre"
                                    value={genreName}
                                    onChange={(e) => setGenreName(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <button className="btn btn-primary mr-3" type="submit">Submit</button>
                        </form>
                    </Modal>

                    {/* Modal Edit Genre */}
                    <Modal show={isEditModalOpen} onClose={() => toggleEditModal()}>
                        <form onSubmit={handleEditGenre} className="p-4 form-filter">
                            <h3 className="center">Update Genre</h3>
                            <div className="form-group">
                                <label htmlFor="genre">Genre Name</label>
                                <input
                                    id="genre"
                                    value={genreName}
                                    onChange={(e) => setGenreName(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <button className="btn btn-success mr-3" type="submit">Edit</button>
                        </form>
                    </Modal>
                </div>
            </SidebarCMS>
        </div>
    );
};

export default Genre;
