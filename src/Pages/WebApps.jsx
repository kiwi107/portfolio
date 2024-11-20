import React, { useState } from 'react';
import ProjectCard from '../Components/ProjectCard';
import './css/general.css';
import Projects from '../Data/projects.js';

const WebApps = () => {
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
      <h1 className='title text-center pt-5'>Web Applications</h1>
      <div className='d-flex justify-content-end'>
        
        {/* <div className='pe-3'>
          <div className="dropdown">
            <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter Projects
            </button>
            <ul className="dropdown-menu p-3" style={{ width: '250px' }}>
              <h3>Technologies</h3>
              <hr />
              {['React', 'Node.js', 'Express', 'Django', 'Laravel', 'PostgreSQL', 'Mongodb', 'Sql Server'].map((tech) => (
                <div className="form-check" key={tech}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={tech}
                    id={`filter${tech}`}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor={`filter${tech}`}>
                    {tech}
                  </label>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-around">
                <button className="btn btn-danger" onClick={resetFilter}>Reset</button>

                <button type="button" className="btn btn-primary" onClick={applyFilters}>
                  Apply
                </button>
              </div>

            </ul>
          </div>
        </div> */}
      </div>
      <div className="row d-flex justify-content-center" style={{ height: '100%' }}>
        {currentFilteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} mobile={false}/>
        ))}
      </div>


    </div>

  );
};

export default WebApps;
