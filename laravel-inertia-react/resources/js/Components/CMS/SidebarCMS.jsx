import React, { Children } from 'react';
import { Head, Link } from '@inertiajs/react';
import '../../../assets/fontawesome-free/css/all.min.css';
import '../../../css/CMS/sb-admin-2.min.css';

function Sidebar({children}) {
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

                {/* Nav Item - Home */}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-home"></i>
                        <span>Home</span>
                    </Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Dramas Section */}
                <li className="nav-item">
                    <Link className="nav-link" href='/admin/dramas'>
                        <i className="fas fa-flag"></i>
                        <span>Dramas</span>
                    </Link>
                </li>

                {/* Additional Nav Items */}
                <li className="nav-item">
                    <Link className="nav-link" href={route('admin.countries')}>
                        <i className="fas fa-flag"></i>
                        <span>Countries</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href={route('admin.awards')}>
                        <i className="fas fa-trophy"></i>
                        <span>Awards</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href={route('admin.genres')}>
                        <i className="fas fa-heart"></i>
                        <span>Genres</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href={route('admin.actors')}>
                        <i className="fas fa-user-secret"></i>
                        <span>Actors</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/comments">
                        <i className="fas fa-comment"></i>
                        <span>Comments</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">
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
                            <Link className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                                <i className="fas fa-user"></i>   
                            </Link> 
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </Link> 
                            </div>
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
    </div>
    );
}

export default Sidebar;
