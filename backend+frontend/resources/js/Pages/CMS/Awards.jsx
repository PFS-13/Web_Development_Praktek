import SidebarCMS from "@/Components/CMS/SidebarCMS";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Modal from '@/Components/Modal';
import { Inertia } from "@inertiajs/inertia";


const Awards = (prop) => {

    const [awardList, setAwardList] = useState([]);
    const [countryList, setCountryList] = useState([]);

    useEffect(() => {
      axios.get('/api/awards').then(res => setAwardList(res.data));
      axios.get('/api/countries').then(res => setCountryList(res.data));

  
    }, []);

const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

const [modalData, setModalData] = useState('');
const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
const [isEditModalOpen, setEditModalOpen] = useState(false);

const [idAward,setIdAward] = useState('');
const [nameAward,setNameAward] = useState('');

const toggleDeleteModal = (datas = null) => {
  setDeleteModalOpen(!isDeleteModalOpen);
  setModalData(datas);
  setIdAward(datas.id)
  setNameAward(datas.award)
  setYear(datas.year)

};


const [award, setAward] = useState('');
const [country, setCountry] = useState('');
const [year,setYear] = useState('') ;

const toggleEditModal = (datas = null) => {
  setEditModalOpen(!isEditModalOpen);
  setModalData(datas);
  setCountry(datas.country)
  setIdAward(datas.id)
  setNameAward(datas.award)
  setYear(datas.year)
};


useEffect(() => {
  if(prop.flash.message){
    setIsNotif(true);
  }
}, []);

useEffect(() => {
  if (modalData) {
    setCountry(modalData.country || '');
    setAward(modalData.award || '');
    setYear(modalData.year || '');
  }
}, [modalData])



const [isNotif, setIsNotif] = useState(false);




const submit = (e) => {
  e.preventDefault();
  const data = {
    country,award,year
  }
  console.log(data);
  Inertia.post(route('insert-award'),data);

};



const handleDelete = (e) => {
  e.preventDefault();
  const data = { 
    idAward, nameAward
  }
  console.log(data);
  Inertia.post(route('delete-award'),data);
  setDeleteModalOpen(!isDeleteModalOpen)
   
}

const handleEdit = (e) => {
  e.preventDefault();
  const data = {
    idAward,country,award,year
  }
  console.log(data);
  Inertia.post(route('update-award'),data);

  
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
    Inertia.visit('/admin/awards',  {
      method : 'get',
      data : {query : searchQuery},
      preserveState: true
    });
}


  
    return (
        <div>
            <SidebarCMS> 
        <div className=" mt-5">
            <Head title="CMS Awards"></Head>
            <h2>Awards</h2>
            <form onSubmit={handleSearch}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend" onClick={toggleModal}>
                            <button className="btn btn-outline-secondary" type="button"><i className="fas fa-plus"></i></button>
                          </div>
                        <input type="text" className="form-control" placeholder="Find awards..." aria-label="Recipient's username" aria-describedby="basic-addon2"  onChange={(e) => setSearchQuery(e.target.value)}/>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary" type="submit"><i className="fas fa-search"></i></button>
                          {prop.reset && (
                            <button className="btn btn-outline-secondary" href="/admin/awards" type="submit">reset search</button>
                          )}
                        </div>
                      </div>
                                              </form>
                  <div >
                     {isNotif && (
                      <div className="alert alert-success alert-dismissible fade show" role="alert">
                        {prop.flash.message} 
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                     )}
                  </div>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Countries</th>
                        <th scope="col">Awards</th>
                        <th scope="col">Year</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Contoh data dummy */}
                    {awardList.map((award,id) => (
                        <tr key={id}>
                            <th scope="row">{id + 1}</th>
                            <td>{award.country}</td>
                            <td>{award.awards}</td>
                            <td>{award.year}</td>
                            <td>
                            <button className="btn btn-danger mr-2" onClick={() => toggleDeleteModal({ id: award.id_award, award: award.awards, year: award.year })}>
                                  <i className="fa fa-trash"></i>
                                </button>
                                <button className="btn btn-success" onClick={() => toggleEditModal({ id: award.id_award, award: award.awards, year: award.year, country: award.id_country })}>
                                  <i className="fa fa-pen"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
        </SidebarCMS>
        <Modal show={isModalOpen} onClose={toggleModal} >
                <form  onSubmit={submit} className='p-4 form-filter'>
                <h3 className='form-title'>Insert New Award</h3>
                        <div className="form-group pb-3">
                          <label className='pb-1 title-label' htmlFor="country">Country</label>
                          <select id="country" onChange={(country) => setCountry(country.target.value)} className="form-control" required>
                            <option value="" selected disabled> -- Select Country -- </option>
                              {countryList.map(country => (
                                  <option key={country.id_country} value={country.id_country}>{country.name_country}</option>
                              ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Nama Award</label>
                          <input id="name" onChange={(award) => setAward(award.target.value)}  required className='form-control'/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Year</label>
                          <input type="number" min={1900} max={2025} id="photo" onChange={(year) => setYear(year.target.value)}  required className='form-control'/>
                        </div>
                        
                        <button className="btn btn-primary mr-3" type="submit">Submit</button>
                </form>
    </Modal>
        <Modal show={isDeleteModalOpen} onClose={toggleDeleteModal} >
                <form  onSubmit={handleDelete} className='p-4 form-filter'>
                <h2>Delete Actor</h2>
                        <div className="form-group pb-3">
                          Yakin ingin menghapus data Award <strong> {modalData?.award} ({modalData?.year}) </strong>
                        </div>                        
                        <div className="d-grid gap-3 col-6 mx-auto">
                          <button className="btn btn-danger mr-3" type="submit">Delete</button>
                          <span className="btn btn-primary" onClick={toggleDeleteModal}>Tidak</span>
                        </div>
                </form>
            </Modal>

<Modal show={isEditModalOpen} onClose={toggleEditModal} >
            <form  onSubmit={handleEdit} className='p-4 form-filter'>
                <h3 className='form-title'>Update Award</h3>
                        <div className="form-group pb-3">
                          <label className='pb-1 title-label' htmlFor="country">Country</label>
                          <select id="country" value={country} onChange={(country) => setCountry(country.target.value)} className="form-control" required>
                            <option value=""  disabled> -- Select Country -- </option>
                              {countryList.map(country => (
                                  <option key={country.id_country} value={country.id_country}>{country.name_country}</option>
                              ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Nama Award</label>
                          <input id="name" value={award} onChange={(award) => setAward(award.target.value)}  required className='form-control'/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="year">Year</label>
                          <input type="number" min={1900} max={2025} id="year" value={year} onChange={(year) => setYear(year.target.value)}  required className='form-control'/>
                        </div>
                        
                        <button className="btn btn-success mr-3" type="submit">Edit</button>
                </form>
            </Modal>
        </div>
    );
};

export default Awards;
