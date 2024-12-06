import SidebarCMS from '@/Components/CMS/SidebarCMS';

import { Head, Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import '../../../css/CMS/cms.css'
import Modal from '@/Components/Modal';
import { Inertia } from '@inertiajs/inertia';


const MovieDashboard = (prop) => {

const [countries, setCountries] = useState([]);

// Modal
const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

const [modalData, setModalData] = useState('');
const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
const [isEditModalOpen, setEditModalOpen] = useState(false);

const [idMovies,setIdMovies] = useState('');
const [title,setTitle] = useState('') ;

const toggleDeleteModal = (datas = null) => {
  setDeleteModalOpen(!isDeleteModalOpen);
  setModalData(datas);
  setIdMovies(datas.id)
  setTitle(datas.name)
};

const toggleEditModal = (datas = null) => {
  setEditModalOpen(!isEditModalOpen);
  setModalData(datas);
  setIdActor(datas.id)
  setTitle(datas.name)
};



const [name, setName] = useState('');
const [link,setLink] = useState('') ;


useEffect(() => {
  axios.get('/api/countries').then(res => setCountries(res.data));
  if(prop.flash.message){
    setIsNotif(true);
  }
}, []);

useEffect(() => {
  if (modalData) {
    setName(modalData.name || '');
    setLink(modalData.link || '');
  }
}, [modalData])



const [isNotif, setIsNotif] = useState(false);




const submit = (e) => {
  e.preventDefault();
//   const data = {
//     country,name,link
//   }
//   console.log(data);
//   Inertia.post('/insert/actors',data);
};



const handleDelete = (e) => {
  e.preventDefault();
  const data = { 
    idMovies, title
  }
  Inertia.post(route('delete-movie'),data);
  setDeleteModalOpen(!isDeleteModalOpen)
   
}

const handleEdit = (e) => {
  e.preventDefault();
//   const data = {
//     idActor,country,name,link
//   }
//   console.log(data);
//   Inertia.post('/update/actors',data);

  
}
  // Search-Actor
  const [searchQuery, setSearchQuery] = useState('');


const handleSearch = (e) => {
  console.log('ok');
  event.preventDefault();
  const data = {
    searchQuery
  }
  console.log(data)
    Inertia.visit('/admin/movies',  {
      method : 'get',
      data : {query : searchQuery},
      preserveState: true
    });
}

const editMovie = (id_movies) => {
  event.preventDefault();
  Inertia.visit('/admin/update_movie',  {
    method : 'get',
    data : {id_movies},
    preserveState: true
  });

}


  
  return (
    <div>
      <Head title={prop.title}></Head>
   <SidebarCMS>
    <h2>Movies</h2>
   <div className="container-fluid">
                    <form onSubmit={handleSearch}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                           <Link href={route('admin-input_movie')}> <button className="btn btn-outline-secondary" type="button"><i className="fas fa-plus"></i></button></Link>
                          </div>
                        <input type="text" className="form-control" placeholder="Find movies..." aria-label="Recipient's username" aria-describedby="basic-addon2"  onChange={(e) => setSearchQuery(e.target.value)}/>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary" type="submit"><i className="fas fa-search"></i></button>
                          {prop.reset && (
                            <button className="btn btn-outline-secondary" href="/admin/movies" type="submit">reset search</button>
                          )}
                        </div>
                      </div>
                                              </form>
                  <div >
                     {isNotif && (
                      <div class="alert alert-success alert-dismissible fade show" role="alert">
                        {prop.flash.message} 
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                     )}
                  </div>
                  
                  <table className="table table-light table-hover">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope='col'>Posters</th>
                            <th scope='col'>Availability</th>
                            <th scope="col">Actors</th>
                            <th scope="col">Genres</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {prop.movies && prop.movies.length > 0 ? (
                          prop.movies.map((movie, i) => (
                            <tr>
                            <th scope="row">{i + 1}</th>
                            <td className='w-15'>{movie.title}</td>
                            <td className='w-15'><img src={movie.link_posters} className='poster-photo' /></td>
                            <td className="w-15">{movie.availability}</td>
                            <td className='w-10'>{movie.actors}</td>
                            <td className='w-10'>{movie.genres}</td>
                            <td>{movie.approved == false ? (
                               <span className="btn btn-danger"> "Not Approved" </span> 
                                ) : (
                                    <span className="btn btn-success"> Approved </span> 
                                )}</td>

                            <td className='col-action'>
                                <button className="btn btn-danger btn-sm mr-3" onClick={() => toggleDeleteModal({ id: movie.id_movies, name: movie.title, link: movie.link_posters })}>
                                <i className="fa fa-trash"></i>
                                </button>
                                <button className="btn btn-success btn-sm mr-3" onClick={() => editMovie(movie.id_movies)}>
                                <i className="fa fa-pen"></i>
                                </button>
                                <button className="btn btn-primary btn-sm">
                                <i className="fa fa-info"></i>
                                </button>
                            </td>
                            </tr>
                        ))
                        ) : (
                          <tr>
                            <h2 className='mt-2 text-align-center'>Tidak ada</h2>
                          </tr>
                        )}
                        </tbody>
                    </table>
                                    
                     
            </div>
   </SidebarCMS>

<Modal show={isDeleteModalOpen} onClose={toggleDeleteModal} >
                <form  onSubmit={handleDelete} className='p-4 form-filter'>
                <h2>Delete Movie</h2>
                        <div className="form-group pb-3">
                          Yakin ingin menghapus data movie <strong> {modalData?.name} </strong>
                          <img src={modalData?.link} className='poster-photo' />
                        </div>                        
                        <div class="d-grid gap-3 col-6 mx-auto">
                          <button class="btn btn-danger mr-3" type="submit">Delete</button>
                          <span class="btn btn-primary" onClick={toggleDeleteModal}>Tidak</span>
                        </div>
                </form>
            </Modal>

<Modal show={isEditModalOpen} onClose={toggleEditModal} >
            <form  onSubmit={handleEdit} className='p-4 form-filter'>
                <h3 className='form-title'>Update Actor</h3>
                        {/* <div className="form-group pb-3">
                          <label className='pb-1 title-label' htmlFor="country">Country</label>
                          <select id="country" value={country} onChange={(country) => setCountry(country.target.value)} className="form-control" required>
                            <option value="" selected disabled> -- Select Country -- </option>
                              {countries.map(country => (
                                  <option key={country.id_country} value={country.id_country}>{country.name_country}</option>
                              ))}
                          </select>
                        </div> */}
                        <div className="form-group">
                          <label htmlFor="name">Nama Actor</label>
                          <input id="name" value={name} onChange={(name) => setName(name.target.value)}  required className='form-control'/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Link Photo</label>
                          <input id="photo" value={link} onChange={(link) => setLink(link.target.value)}  required className='form-control'/>
                          <img src={link} className='actor-photo mt-3' />
                        </div>
                        
                        <button className="btn btn-success mr-3" type="submit">Edit</button>
                </form>
            </Modal>
   </div> 
  );
};

export default MovieDashboard;
