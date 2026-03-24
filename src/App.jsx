import React from 'react'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MainGrid from './components/MainGrid'
import PhotoGrid from './components/PhotoGrid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <PhotoGrid /> */}
      {/* <MainGrid /> */}
   

<BrowserRouter>
      <Routes>
        
        {/* FIX: Add a route for "/" */}

        {/* Option 1: Make the Login Page the default page for now */}
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        {/* Option 2: Automatically redirect "/" to "/login" */}
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}

        {/* Option 3: If you have your ServiSeek Home Page ready, put it here */}
        {/* <Route path="/" element={<HomePage />} /> */}


        {/* Your existing login route */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}
