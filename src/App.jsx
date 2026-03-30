import React from 'react'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MainGrid from './components/MainGrid'
import PhotoGrid from './components/PhotoGrid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from './components/HomePage';
import RegisterPage from '../RegisterPage/RegisterPage';
import NewRegisterPage from '../RegisterPage/NewRegisterPage';
import CategoriesPage from './components/CategoriesPage';
import ServiceProvider from './components/ServiceProvider';
import ContactPage from './components/ContactPage';


export default function App() {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <PhotoGrid /> */}
      {/* <MainGrid /> */}
      {/* <NewRegisterPage /> */}
      {/* <CategoriesPage /> */}
      {/* <CategoriesPageNew /> */}
      {/* <ServiceProvider /> */}
      {/* <ContactPage /> */}

      <BrowserRouter >
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<NewRegisterPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/serviceprovider' element={<ServiceProvider />} />
        <Route path='/contactus' element={<ContactPage/>} />
        
        
      </Routes>
    </BrowserRouter>
      
 </div>   
  )
}
