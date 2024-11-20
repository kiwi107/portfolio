import React from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';

const NavBar = () => {
  // Function to hide the offcanvas
  // const handleCloseOffcanvas = () => {
  //   const offcanvasElement = document.getElementById('offcanvasNavbar');
  //   if (offcanvasElement) {
  //     const offcanvasInstance = Offcanvas.getInstance(offcanvasElement);
  //     if (offcanvasInstance) offcanvasInstance.hide();


  //   }
  //   const backdrop = document.querySelector('.offcanvas-backdrop');
  //   if (backdrop) backdrop.remove();


  // };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="dark"
        style={{
          position: 'absolute',
          top: '0',
          width: '100%',
          zIndex: '1000',
        }}
      >
        <div className="container-fluid">
          {/* Toggler button to open the offcanvas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas menu */}
          <div
            className="offcanvas offcanvas-start"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              {/* Close button inside offcanvas */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/"

                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Projects
                  </a>
                  <ul className="dropdown-menu">
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        className="dropdown-item"
                        to="/webapps"


                      >
                        Web Applications
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        className="dropdown-item"
                        to="/mobileapps"

                      >
                        Mobile Applications
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link
                    className="nav-link"
                    to="/skills"


                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link
                    className="nav-link"
                    to="/certifications"

                  >
                    Certifications
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
