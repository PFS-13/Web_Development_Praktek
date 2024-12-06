import SidebarCMS from "../../Components/CMS/SidebarCMS";
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import '../../../css/CMS/cms.css'
import Modal from '@/Components/Modal';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';

export default function ActorDashboard(prop){


const [countries, setCountries] = useState([]);

// Modal
const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

const [modalData, setModalData] = useState('');
const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
const [isEditModalOpen, setEditModalOpen] = useState(false);

const [idActor,setIdActor] = useState('');
const [nameActor,setNameActor] = useState('');

const toggleDeleteModal = (datas = null) => {
  setDeleteModalOpen(!isDeleteModalOpen);
  setModalData(datas);
  setIdActor(datas.id)
  setNameActor(datas.name)
};

const toggleEditModal = (datas = null) => {
  setEditModalOpen(!isEditModalOpen);
  setModalData(datas);
  setIdActor(datas.id)
  setNameActor(datas.name)
};



const [country, setCountry] = useState('');
const [name, setName] = useState('');
const [birth, setBirth] = useState('');
const [link,setLink] = useState('') ;

useEffect(() => {
  axios.get('/api/countries').then(res => setCountries(res.data));
  if(prop.flash && prop.flash.message){
    setIsNotif(true);
  }
}, []);

useEffect(() => {
  if (modalData) {
    setCountry(modalData.country || '');
    setName(modalData.name || '');
    setLink(modalData.link || '');
    setBirth(modalData.birth || '');

  }
}, [modalData])



const [isNotif, setIsNotif] = useState(false);




const submit = (e) => {
  e.preventDefault();
  const data = {
    country,name,link,birth
  }
  Inertia.post('/insert/actors',data);
};



const handleDelete = (e) => {
  e.preventDefault();
  const data = { 
    idActor, nameActor
  }
  Inertia.post(route('delete-actor'),data);
  setDeleteModalOpen(!isDeleteModalOpen)
   
}

const handleEdit = (e) => {
  e.preventDefault();
  const data = {
    idActor,country,name,link,birth
  }
  Inertia.post('/update/actors',data);

  
}


  // Search-Actor
  const [searchQuery, setSearchQuery] = useState('');
  

const handleSearch = (e) => {
  event.preventDefault();
  const data = {
    searchQuery
  }
    Inertia.visit('/admin/actors',  {
      method : 'get',
      data : {query : searchQuery},
      preserveState: true
    });
}


  
  return (
    <div>
      <Head title={prop.title}></Head>
   <SidebarCMS>
    <h2>Actor</h2>
   <div className="container-fluid">
                    <form onSubmit={handleSearch}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend" onClick={toggleModal}>
                            <button className="btn btn-outline-secondary" type="button" data-testid="add_actor"><i className="fas fa-plus"></i></button>
                          </div>
                        <input type="text" className="form-control" placeholder="Find actors..." aria-label="Recipient's username" aria-describedby="basic-addon2"  onChange={(e) => setSearchQuery(e.target.value)}/>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary" type="submit" data-testid="search_actor"><i className="fas fa-search"></i></button>
                          {prop.reset && (
                            <button className="btn btn-outline-secondary" href="/admin/actors" type="submit" data-testid="reset_button">reset search</button>
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
                    <table className="table">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Countries</th>
                            <th scope="col">Actor Name</th> 
                            <th scope="col">Birth Date</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        {prop.actors && prop.actors.length > 0 ? (
                          prop.actors.map((actor, i) => (
                            <tr key={actor.id_actor}>
                              <td>{i + 1}</td>
                              <td>{actor.country}</td>
                              <td>{actor.actor_name}</td>
                              <td>{actor.birth_date}</td>
                              <td><img src={actor.link_photo} alt="" className="actor-photo" /></td>
                              <td>
                                <button className="btn btn-danger mr-2" data-testid="delete_actor" onClick={() => toggleDeleteModal({ id: actor.id_actor, name: actor.actor_name, link: actor.link_photo })}>
                                  <i className="fa fa-trash"></i>
                                </button>
                                <button className="btn btn-success" data-testid="update_actor" onClick={() => toggleEditModal({ id: actor.id_actor, name: actor.actor_name, link: actor.link_photo, country: actor.id_country, birth: actor.birth_date })}>
                                  <i className="fa fa-pen"></i>
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
   <Modal show={isModalOpen} onClose={toggleModal} >
                <form  onSubmit={submit} className='p-4 form-filter'>
                <h3 className='form-title'>Insert New Actor</h3>
                        <div className="form-group pb-3">
                          <label className='pb-1 title-label' htmlFor="country">Country</label>
                          <select id="country" onChange={(country) => setCountry(country.target.value)} className="form-control" required>
                            <option value="" selected disabled> -- Select Country -- </option>
                              {countries.map(country => (
                                  <option key={country.id_country} value={country.id_country}>{country.name_country}</option>
                              ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Nama Actor</label>
                          <input id="name" onChange={(name) => setName(name.target.value)}  required className='form-control'/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="birth">Tanggal Lahir</label>
                          <input type='date' id="birth" onChange={(birth) => setBirth(birth.target.value)}  required className='form-control'/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="photo">Link Photo</label>
                          <input id="photo" onChange={(link) => setLink(link.target.value)}  required className='form-control'/>
                        </div>
                        
                        <button className="btn btn-primary mr-3" type="submit">Submit</button>
                </form>
    </Modal>

<Modal show={isDeleteModalOpen} onClose={toggleDeleteModal} >
                <form  onSubmit={handleDelete} className='p-4 form-filter'>
                <h2>Delete Actor</h2>

                        <div className="form-group pb-3">
                          Yakin ingin menghapus data actor <strong> {modalData?.name} </strong>
                          <img src={modalData?.link} className='actor-photo' />
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
                        <div className="form-group pb-3">
                          <label className='pb-1 title-label' htmlFor="country">Country</label>
                          <select id="country" value={country} onChange={(country) => setCountry(country.target.value)} className="form-control" required>
                            <option value="" selected disabled> -- Select Country -- </option>
                              {countries.map(country => (
                                  <option key={country.id_country} value={country.id_country}>{country.name_country}</option>
                              ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Nama Actor</label>
                          <input id="name" value={name} onChange={(name) => setName(name.target.value)}  required className='form-control'/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="birth">Tanggal Lahir</label>
                          <input type='date' id="birth" value={birth} onChange={(birth) => setBirth(birth.target.value)}  required className='form-control'/>
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

