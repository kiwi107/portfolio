import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import WebApps from './Pages/WebApps';
import Skills from './Pages/Skills';
import Certifications from './Pages/Certifications';
import About from './Pages/About';
import ProjectDetails from './Pages/ProjectDetails';
import MobileApps from './Pages/MobileApps';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webapps" element={<WebApps />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:title" element={<ProjectDetails />} />
        <Route path="/mobileapps" element={<MobileApps />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
