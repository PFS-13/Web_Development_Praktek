import SidebarCMS from '@/Components/CMS/SidebarCMS';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { IoAdd } from 'react-icons/io5';
import Modal from '@/Components/Modal';
import { FaEdit, FaTrash, FaSearch, FaFilter } from 'react-icons/fa';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';

const Awards = ({ title }) => {
    const [awards, setAwards] = useState([]); // Data asli dari API
    const [filteredAwards, setFilteredAwards] = useState([]); // Data yang akan di-render berdasarkan pencarian
    const [isModalOpen, setModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [awardName, setAwardName] = useState('');
    const [year, setYear] = useState('');
    const [countryId, setCountryId] = useState('');
    const [awardId, setAwardId] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); // State untuk input pencarian
    const [countries, setCountries] = useState([]); // Data negara

    useEffect(() => {
        axios.get('/api/awards').then(res => {
            console.log("Awards data with country:", res.data); // Debugging: pastikan country ada
            setAwards(res.data);
            setFilteredAwards(res.data);
        });
    }, []);
       
    useEffect(() => {
        axios.get('/api/countries').then(res => setCountries(res.data));
    }, []);
    

    const toggleModal = () => setModalOpen(!isModalOpen);

    const toggleEditModal = (award = null) => {
        setEditModalOpen(!isEditModalOpen);
        if (award) {
            setAwardId(award.id_awards);
            setAwardName(award.awards);
            setYear(award.year);
            setCountryId(award.id_country);
        } else {
            setAwardId(null);
            setAwardName('');
            setYear('');
            setCountryId('');
        }
    };

    const handleAddAward = (e) => {
        e.preventDefault();
        Inertia.post('/insert/awards', { awards: awardName, year, id_country: countryId });
        setModalOpen(false);
    };

    const handleEditAward = (e) => {
        e.preventDefault();
        Inertia.post('/update/awards', { id_awards: awardId, awards: awardName, year, id_country: countryId });
        setEditModalOpen(false);
    };

    const handleDeleteAward = (id_awards) => {
        Inertia.post('/delete/awards', { id_awards });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = awards.filter(award =>
            award.awards.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredAwards(filtered);
    };

    return (
        <div>
            <Head title={title || 'Awards'} />
            <SidebarCMS>
                <h2>Awards</h2>
                <div className="container-fluid">
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
                                placeholder="Find awards..."
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
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Award Name</th>
                                <th scope="col">Year</th>
                                <th scope="col">Country</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {filteredAwards.map((award, index) => (
                            <tr key={award.id_awards}>
                            <th scope="row">{index + 1}</th>
                            <td>{award.awards}</td>
                            <td>{award.year}</td>
                            <td>{award.country?.name_country || 'N/A'}</td>
                            <td>
                                <button className="btn btn-danger btn-sm me-2" onClick={() => handleDeleteAward(award.id_awards)}>
                                <FaTrash />
                                </button>
                                <button className="btn btn-success btn-sm" onClick={() => toggleEditModal(award)}>
                                <FaEdit />
                                </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {/* Modal Tambah Award */}
                    <Modal show={isModalOpen} onClose={toggleModal}>
                        <form onSubmit={handleAddAward} className="p-4 form-filter">
                            <h3 className="center">Insert New Award</h3>
                            <div className="form-group">
                                <label htmlFor="award">Award Name</label>
                                <input
                                    id="award"
                                    value={awardName}
                                    onChange={(e) => setAwardName(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="year">Year</label>
                                <input
                                    id="year"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <select
                                    id="country"
                                    value={countryId}
                                    onChange={(e) => setCountryId(e.target.value)}
                                    required
                                    className="form-control"
                                >
                                    <option value="">Select Country</option>
                                    {countries.map(country => (
                                        <option key={country.id_country} value={country.id_country}>{country.name_country}</option>
                                    ))}
                                </select>
                            </div>
                            <button className="btn btn-primary mr-3" type="submit">Submit</button>
                        </form>
                    </Modal>

                    {/* Modal Edit Award */}
                    <Modal show={isEditModalOpen} onClose={() => toggleEditModal()}>
                        <form onSubmit={handleEditAward} className="p-4 form-filter">
                            <h3 className="center">Update Award</h3>
                            <div className="form-group">
                                <label htmlFor="award">Award Name</label>
                                <input
                                    id="award"
                                    value={awardName}
                                    onChange={(e) => setAwardName(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="year">Year</label>
                                <input
                                    id="year"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <select
                                    id="country"
                                    value={countryId}
                                    onChange={(e) => setCountryId(e.target.value)}
                                    required
                                    className="form-control"
                                >
                                    <option value="">Select Country</option>
                                    {countries.map(country => (
                                        <option key={country.id_country} value={country.id_country}>{country.name_country}</option>
                                    ))}
                                </select>
                            </div>
                            <button className="btn btn-success mr-3" type="submit">Edit</button>
                        </form>
                    </Modal>
                </div>
            </SidebarCMS>
        </div>
    );
};

export default Awards;
