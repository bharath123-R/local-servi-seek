import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import RegisterPage from './RegisterPage'

export default function Register() {
  return (
    // <BrowserRouter>
    // <Link to="/register">Register</Link>
    // <Routes>
    //     <Route path='/register' element={<RegisterPage />}></Route>
    // </Routes>
    <RegisterPage />

    // </BrowserRouter>
  )
}
