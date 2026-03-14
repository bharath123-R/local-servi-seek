import React from 'react'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MainGrid from './components/MainGrid'

export default function App() {
  return (
    <div>
      <NavBar />
      <MainGrid />
    </div>
  )
}
