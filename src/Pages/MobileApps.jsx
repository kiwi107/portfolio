import React, { useState } from 'react';
import ProjectCard from '../Components/ProjectCard';
import './css/general.css';
import Projects from '../Data/mobile_projects.js';

const MobileApps = () => {
  const [projects] = useState(Projects);
  const [currentFilteredProjects, setCurrentFilteredProjects] = useState(Projects);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prevFilters) =>
      checked
        ? [...prevFilters, value]
        : prevFilters.filter((filter) => filter !== value)
    );
  };

  const applyFilters = () => {
    setCurrentFilteredProjects(projects.filter((project) =>
      selectedFilters.every((filter) => project.tech.includes(filter))

    ));
  };


  const resetFilter = () => {
    setSelectedFilters([]);
    setCurrentFilteredProjects(projects);
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
  }

  return (
    <div className="page pb-2">
      <h1 className='title text-center pt-5'>Mobile Applications</h1>
    
      
      <div className="row d-flex justify-content-center" style={{ height: '100vh' }}>
        {currentFilteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} mobile={true} />
        ))}
      </div>


    </div>

  );
};

export default MobileApps;
