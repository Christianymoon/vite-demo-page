import React from 'react'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import logo from './assets/logo.png';
import { FloatingWhatsApp } from "react-floating-whatsapp";


function App() {

  return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <FloatingWhatsApp avatar={logo}
            statusMessage="En Línea"
            darkMode={true}
            phoneNumber="+524772294425" 
            accountName="VR Impresiones" 
            chatMessage="Hola! en un momento nos contactaremos contigo. 😊"
            placeholder="Escribe un mensaje" />
        </Router>
      </div>
  )
}

export default App
