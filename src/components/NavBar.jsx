import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaSearch } from 'react-icons/fa';


export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg Background-color">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Local <span className='Servi-color'>Servi</span><span className='Seek-color'>Seek</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0 gap-3 gap-lg-4 align-items-start">
                            <li className="nav-item">
                                <a className="nav-link btn btn-outline-info Nav-hover" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-outline-info Nav-hover" href="#">Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-outline-info Nav-hover" href="#">Service Provider</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle btn btn-outline-info Nav-hover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled btn btn-outline-info" aria-disabled="true">Disabled</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-outline-info Nav-hover" href="#">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success d-flex align-items-center justify-content-center" type="submit">
                                <FaSearch />
                                <span className="d-none d-lg-inline ms-2">Search</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
