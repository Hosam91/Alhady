import React from 'react'
import { Link } from 'react-router-dom'

import logo from "./imgs/logo.png"
export default function Navbar() {
  return (
      <>
          <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ">
                  <Link className="navbar-brand" to="#">
                      <img src={logo} className='' alt="Alhady" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
                          </li>
                          <li className="nav-item">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
       
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
      </>
  )
}