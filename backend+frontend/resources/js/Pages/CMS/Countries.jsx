import SidebarCMS from '@/Components/CMS/SidebarCMS';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import Modal from '@/Components/Modal';
import { FaEdit, FaPlus, FaTrash, FaSearch, FaFilter } from 'react-icons/fa';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';

const Countries = ( prop ) => {
  console.log(prop);
    const [countries, setCountries] = useState([]);         // Data asli dari API
    const [filteredCountries, setFilteredCountries] = useState([]); // Data yang akan di-render berdasarkan pencarian
    const [isModalOpen, setModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [name_country, setNameCountry] = useState('');
    const [id_country, setIdCountry] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');      // State untuk input pencarian

    useEffect(() => {
        // Ambil data dari API
        axios.get('/api/countries').then(res => {
            setCountries(res.data);
            setFilteredCountries(res.data); // Inisialisasi `filteredCountries` dengan data asli
        });
    }, []);

    const toggleModal = () => setModalOpen(!isModalOpen);
    
    const toggleEditModal = (country = null) => {
        setEditModalOpen(!isEditModalOpen);
        if (country) {
            setIdCountry(country.id_country);
            setNameCountry(country.name_country);
        } else {
            setIdCountry(null);
            setNameCountry('');
        }
    };

    const handleAddCountry = (e) => {
        e.preventDefault();
        Inertia.post('/insert/countries', { name_country });
        setModalOpen(false);
    };

    const handleEditCountry = (e) => {
        e.preventDefault();
        Inertia.post('/update/countries', { id_country, name_country });
        setEditModalOpen(false);
    };

    const handleDeleteCountry = (id_country) => {
        Inertia.post('/delete/countries', { id_country });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = countries.filter(country =>
            country.name_country.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCountries(filtered);
    };
    const [isNotif, setIsNotif] = useState(false);
    useEffect(() => {
      if(prop.flash.message){
        setIsNotif(true);
      }
      
    }, []);

    return (
        <div>
            <Head title={prop.title || 'Countries'} />
            <SidebarCMS>
                <h2>Countries</h2>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <form onSubmit={handleSearch} className="input-group w-100">
                            <div className="input-group-prepend" onClick={toggleModal}>
                                <button className="btn btn-outline-secondary" type="button">
                                    <FaPlus />
                                </button>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Find countries..."
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

                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Country Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCountries.map((country, index) => (
                                <tr key={country.id_country}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{country.name_country}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm me-2" onClick={() => handleDeleteCountry(country.id_country)}>
                                            <FaTrash />
                                        </button>
                                        <button className="btn btn-success btn-sm" onClick={() => toggleEditModal(country)}>
                                            <FaEdit />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Modal Tambah Country */}
                    <Modal show={isModalOpen} onClose={toggleModal}>
                        <form onSubmit={handleAddCountry} className="p-4 form-filter">
                            <h3 className="center">Insert New Country</h3>
                            <div className="form-group">
                                <label htmlFor="name_country">Country Name</label>
                                <input
                                    id="name_country"
                                    value={name_country}
                                    onChange={(e) => setNameCountry(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <button className="btn btn-primary mr-3" type="submit">Submit</button>
                        </form>
                    </Modal>

                    {/* Modal Edit Country */}
                    <Modal show={isEditModalOpen} onClose={() => toggleEditModal()}>
                        <form onSubmit={handleEditCountry} className="p-4 form-filter">
                            <h3 className="center">Update Country</h3>
                            <div className="form-group">
                                <label htmlFor="name_country">Country Name</label>
                                <input
                                    id="name_country"
                                    value={name_country}
                                    onChange={(e) => setNameCountry(e.target.value)}
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

export default Countries;
