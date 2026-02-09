import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Doctors from './pages/Doctors.jsx'
import DoctorProfile from './pages/DoctorProfile.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/doutores" element={<Doctors />} />
          <Route path="/doutores/:id" element={<DoctorProfile />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
