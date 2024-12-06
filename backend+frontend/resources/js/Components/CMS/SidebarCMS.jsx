import React, { Children, useState } from 'react';
import { Head, Link ,usePage} from '@inertiajs/react';
import '../../../assets/fontawesome-free/css/all.min.css';
import '../../../css/CMS/sb-admin-2.min.css';
import Modal from '@/Components/Modal';



export default function SidebarCMS({children}) {
    // const user = usePage().props.auth.user;

    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen); 
    };
    
    
    return (
        <div id='wrapper'>
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Movie Hub</div>
                </Link>

                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Dramas Section */}
                <li className="nav-item">
                    <Link className="nav-link" href={route('admin-movies')}>
                        <i className="fas fa-film"></i>
                        <span>Movies</span>
                    </Link>
                </li>

                {/* Additional Nav Items */}
                <li className="nav-item">
                    <Link className="nav-link" href={route('admin-countries')}>
                        <i className="fas fa-flag"></i>
                        <span>Countries</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href={route('admin-awards')}>
                        <i className="fas fa-trophy"></i>
                        <span>Awards</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href={route('admin-genres')}>
                        <i className="fas fa-heart"></i>
                        <span>Genres</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href={route('admin-actors')}>
                        <i className="fas fa-user-secret"></i>
                        <span>Actors</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href={route('admin-comments')}>
                        <i className="fas fa-comment"></i>
                        <span>Comments</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href={route('admin-users')}>
                        <i className="fas fa-users"></i>
                        <span>Users</span>
                    </Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Sidebar Toggler */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">
                   
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <h2></h2>
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>


                    <ul className="navbar-nav ml-auto">

                        
                        <li className="nav-item dropdown no-arrow">
                            <span className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                 aria-haspopup="true" aria-expanded="false" onClick={toggleModal}>
                                {/* <button className="mr-2 d-none d-lg-inline text-gray-600 small" >{user.name}</button> */}
                                <i className="fas fa-user"></i>   
                            </span> 
                            
                        </li>

                    </ul>

                </nav>
                <div className="container-fluid"> {children} </div> 
        
                <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2021</span>
                    </div>
                </div>
            </footer>
        </div>
        </div>    
        <Link className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </Link> 

        <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <Link className="btn btn-primary" href="authentication.html">Logout</Link> 
                    </div>
                </div>
            </div>
        </div>        
        <Modal show={isModalOpen} onClose={toggleModal} >
                <div className='p-4'>
                <h2>Log Out</h2>
                    <div className="form-group pb-3">
                    Yakin ingin Log Out ?
                    </div>                        
                    <div class="d-grid gap-3 col-6 mx-auto">
                    <Link href={route('logout')} method='post' class="btn btn-danger mr-3" type="submit" >Log Out</Link>
                    <span class="btn btn-primary" onClick={toggleModal}>Tidak</span>
                    </div>
                    </div>
    </Modal>
    </div>
    
    
    );
    
    
}


