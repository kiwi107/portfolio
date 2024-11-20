import React from 'react';
import ModalPDF from '../Components/ModalPDF';
import PdfViewer from '../Components/PdfViewer';
import RoleRotator from '../Components/RoleRotator';
import './css/home.css';

const Home = () => {
  const pdfUrl = '/pdfs/CV.pdf';
  const Modal_body = <PdfViewer pdfUrl={pdfUrl} />;

  return (
    <>
      <div id="background" style={{ background: "url('images/background_img.jpg') no-repeat center center/cover" }}>
        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-4">
            <div className='d-flex flex-column justify-content-center'>
              <div className='d-flex justify-content-center'>
                <h1 className="text-white" style={{ fontSize: '3rem', paddingTop: '120px' }}>Hi, I'm Karim</h1>
              </div>
              <div className='d-flex justify-content-center'>
                <RoleRotator />
              </div>

              <div className='d-flex justify-content-center mt-2'>
                <button className='animated-button btn btn-color1' data-bs-toggle="modal" data-bs-target={`#exampleModalCheckCV`}>
                  <span className="text-container">Check CV    <i className="bi bi-file-text icon"></i></span>
                </button>

                <ModalPDF btnName='CheckCV' body={Modal_body} title="Karim Sherif Louis CV" pdf={pdfUrl} />
                <button className='animated-button btn-color2' data-bs-toggle="modal" data-bs-target="#contactModal">
                  <span className="text-container">Contact Me   <i className="bi bi-telephone icon"></i></span>
                </button>

                <div
                  className="modal fade"
                  id="contactModal"
                  tabIndex="-1"
                  aria-labelledby="contactModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="contactModalLabel">Contact Information</h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p>If you'd like to get in touch, you can reach me through the following methods:</p>
                        <p><strong>Email:</strong> Karimslkamel@gmail.com</p>
                        <p><strong>Phone:</strong> 01112653391</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className='d-flex justify-content-center mt-2 mb-5'>
                <a href="https://www.linkedin.com/in/karim-sherif-43ba9a211/" className='animated-button' target="_blank" rel='noreferrer'>
                  <i className="bi bi-linkedin text-white fs-4 m-3 animated-button"></i>
                </a>
                <a href='https://github.com/kiwi107' className='animated-button' target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Github">
                  <i className="bi bi-github text-white fs-4 m-3 "></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">

          </div>
          <div className="col-12 col-sm-12 col-md-4">
            <div className="d-flex justify-content-center">
              <img src="/images/Profile_img.PNG" alt="profile" className="animated-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
