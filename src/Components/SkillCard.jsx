import React from 'react';
import './css/Card.css';

const SkillCard = ({ skill }) => {
  return (
    <div className="col-6 col-sm-6 col-md-4 d-flex align-items-center justify-content-center">
      <div className='my-3 mx-2 project-card' style={{ width: '200px', height: '80px' }}>
        <div className="row ps-2" style={{height:'100%', width:'100%'}}>
          <div className="col-6 d-flex align-items-center">
            <img
              style={{
                width: '60px',
                height: '50px',
              }}
              src={skill.icon}
              alt={skill.name}
            />
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center text-white">
            <div>{skill.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
