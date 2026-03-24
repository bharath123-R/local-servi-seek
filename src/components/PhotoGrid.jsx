import React from 'react'
// import Photo from './Photo.png';
import './PhotoGrid.css'
import { FaSearch } from 'react-icons/fa';

export default function PhotoGrid() {
  return (
    <div className='image-grid'>
      <div className="content-tag">
      <h1 className=' fw-bold main-content'>Find Trusted Local Experts Near You</h1>
      <p className='sub-content'>instant booking for Plumbing, Cleaning, Electricians and more</p>
      </div>


      <div className='search-container'>
      <div className="custom-search" >
      
        <input className="form-control me-2 custom-search-input" type="text" placeholder="What are you looking for?" aria-label="Search" />
        <button className="btn btn-warning d-flex align-items-center justify-content-center custom-button" type="submit">
          <FaSearch />
          <span className="d-none d-lg-inline ms-2">Search Service</span>
        </button>
      
      </div>
      </div>



    </div>
  )
}
