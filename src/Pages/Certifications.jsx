import React from 'react';
import './css/general.css';
import './css/certificates.css';
import certificates from '../Data/certificates';

const Certifications = () => {
  return (
    <div className="page">
      <h1 className="title text-center pt-5 pb-3">Certifications</h1>

      <div className="row justify-content-center">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-6 d-flex justify-content-center align-items-center mb-4"
          >
            <div
              className="cert_card d-flex flex-column align-items-center"
              style={{ width: '600px', height: '350px' }}
            >
              <img
                src={cert.src}
                alt={cert.title}
                className="img-fluid"
                style={{
                  width: '500px',
                  height: '300px',
                  padding: '20px',
                 
                
                }}
              />
              <div className="card-body">
                <h6 className="text-center mt-2" style={{ color: 'white' }}>
                  {cert.title}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
