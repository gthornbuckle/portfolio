import React from 'react';
import { BrowserRouter , Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Pages/Portfolio';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/portfolio" replace />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
