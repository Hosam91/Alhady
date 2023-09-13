import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from "./imgs/logo_.webp"
export default function Navbar()
{
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
    console.log(isNavbarOpen);
  };
  return (
      <>
          <nav className="navbar navbar-expand-lg p-0">
  <div className="container-fluid ">
                  <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <img src={logo} className='' alt="Alhady" />
            
    </Link>
          <button className={`navbar-toggler ${isNavbarOpen ? '' : 'collapsed'}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            
      <span className="navbar-toggler-icon"></span>
          </button>
          {/* <button className={`navbar-toggler ${isNavbarOpen ? '' : 'collapsed'}`}
            type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon">
              
        </span>
      </button> */}
         
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/home" onClick={closeNavbar}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
                          </li>
                          <li className="nav-item">
          <Link className="nav-link" to="/projects" onClick={closeNavbar}>Projects</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
                          </li> */}
                          <li className="nav-item">
          <Link className="nav-link" to="/designs" onClick={closeNavbar}>Designs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact Us</Link>
        </li>
       
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li> */}
        
      </ul>
     
    </div>
  </div>
</nav>
      </>
  )
}
