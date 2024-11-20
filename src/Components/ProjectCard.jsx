import React from 'react'
import './css/Card.css'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project, mobile }) => {
    return (
        <>
            <div className='col-md-4 col-sm-12 p-3  d-flex justify-content-center'>
                <Link
                    to={`/project/${project.title}?mobile=${mobile}`}
                    style={{ textDecoration: 'none' }}
                >

                    <div class="card project-card" style={{ width: '350px', height: mobile ? '400px' : '300px' }}>
                        <div className='d-flex justify-content-center'>
                            <img src={project.image} class="card-img-top " alt="..." style={{ borderRadius: '10px', width: mobile ? '150px' : '330px', margin: '10px', height: mobile ? '300px' : 'auto' }} />

                        </div>

                        <h5 class="text-center text-light">{project.title}</h5>
                        <div class="ps-3 pe-3 pb-3">
                            <p class="card-text text-light ">{project.description}</p>
                        </div>

                    </div>
                </Link>


            </div>
        </>


    )
}

export default ProjectCard