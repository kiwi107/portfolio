import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../Data/projects';
import mobile_projects from '../Data/mobile_projects';
import { useLocation } from 'react-router-dom';
function ProjectDetails() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const isMobile = params.get('mobile') === 'true';
    const { title } = useParams();
    const [project, setProject] = useState(
        Projects.find((project) => project.title === title) ||
        mobile_projects.find((project) => project.title === title)
    );

    useEffect(() => {
        const project = Projects.find((project) => project.title === title) || mobile_projects.find((project) => project.title === title);
        setProject(project);
    }, [title]);

    return (
        <div className="page" style={{ color: 'white', backgroundColor: '#000', padding: 20 }}>
            <h1 style={{ marginLeft: 10, marginTop: 50, color: 'orange' }}>{project.title}</h1>

            <div id="carouselExample" className="carousel slide my-4">
                <div className="carousel-inner">
                    {project.carousel.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        >
                            <img
                                src={image.src}
                                className="d-block"
                                alt={`Screenshot ${index + 1}`}
                                style={{ width: isMobile ? '200px' : '60%', margin: 'auto' }}
                            />
                            {isMobile ? null :
                                <h6 className="text-center" style={{ color: 'azure', margin: 10 }}>{image.description}</h6>}
                        </div>

                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <h3 className="title">Description:</h3>
            <p className='custom-text'>{project.description}</p>

            <h3 className="title">Technologies Used:</h3>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', padding: 0, margin: 0 }}>
                {project.tech.map((tech, index) => (
                    <p
                        key={index}
                        style={{
                            color: 'white',

                            padding: ' 10px',

                        }}
                    >
                        {tech}
                    </p>
                ))}
            </ul>
            <h3 className="title">Functionalities:</h3>
            <div className="row">
                {project.functionality.map((func, index) => (
                    <div className="col-12 col-sm-12 col-md-4" key={index}>
                        <ul>
                            {project.functionality.slice(index * 5, index * 5 + 5).map((item, subIndex) => (
                                <li className='custom-text' key={subIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectDetails;
