import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaSearch } from 'react-icons/fa';

export default function NavBar() {
    const [selectcity, setselectcity] = useState("Select City");
    const tnCities = [
        "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", 
        "Salem", "Tirunelveli", "Vellore", "Erode", 
        "Thanjavur", "Chengalpattu"
    ];

    return (
        <div style={{fontSize: "17px"}}>
            <nav className="navbar navbar-expand-lg Background-color">
                <div className="container-fluid">
                    
                    {/* 1. Brand - Left Aligned */}
                    <a className="navbar-brand fw-bold text-truncate me-1" style={{fontSize: "20px"}} href="#">
                        Local <span className='Servi-color'>Servi</span><span className='Seek-color'>Seek</span>
                    </a>
                    
                    {/* 2. Grouped Buttons & Toggler (Visible on Mobile Top Bar) */}
                    {/* order-lg-last pushes this entire block to the right on desktop */}
                    <div className="d-flex align-items-center ms-auto gap-2 order-lg-last">
                        <Link to="/login">
                            <button className="btn btn-primary btn-sm px-2 py-1">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-primary btn-sm px-2 py-1">Sign Up</button>
                        </Link>
                        
                        <button className="navbar-toggler p-1 ms-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    
                    {/* 3. Collapsible Area (Contains ONLY Links now) */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3 gap-lg-4 align-items-center mt-3 mt-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle Nav-hover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }}>
                                    {selectcity}
                                </a>
                                <ul className="dropdown-menu shadow-sm custom-dropdown" aria-labelledby="LocationDropdown" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                                    {tnCities.map((city,index)=>(
                                        <li key={index}>
                                            <a className='dropdown-item' href="#" onClick={(e)=>{
                                                e.preventDefault();
                                                setselectcity(city);
                                            }}>
                                                {city}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link Nav-hover" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link Nav-hover" to="/categories">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link Nav-hover" to="/serviceprovider">Service Provider</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled " aria-disabled="true">Disabled</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link Nav-hover" to="/contactus">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}