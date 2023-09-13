import React from 'react'
import logo from './imgs/logo.png'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
// import { FaWhatsapp } from 'react-icons/bi'
export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    
    <>
      <div className="myFooter row  m-0 ">
        <div className="col-md-4 llogo border-end   ">
          <img src={logo} className="w-100 " alt="" />
        </div>

        <div className="col-md-4 border-end  d-flex flex-wrap   quick-links-father">
          <h4 className="w-100 text-center">Quick Links</h4>
          <ul className="quick-links w-100  ">
            <li>
              <Link to="/home" onClick={scrollToTop}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop}>About</Link>
            </li>
            <li>
              <Link to="/projects"onClick={scrollToTop}>project</Link>
            </li>
            <li>
              <Link to="/designs"onClick={scrollToTop}>Designs</Link>
            </li>
            <li>
              <Link to="/contact"onClick={scrollToTop}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4 d-flex border-end-0 ">
          <div className="our-contacts ">
            <ul className="info  ">
              <li>
                {/* <p className='w-100'>
                    <FaLocationArrow className='' />  Alhady Consulting Engineers
                              </p> */}

                <p className="w-100">
                  <FaLocationArrow /> Central area -New Damiatta
                  -Damiatta
                </p>
              </li>
              <li>
                <a href="tel:+201222120629">
                  <FaPhone /> +201222120629
                  </a>
              </li>
              {/* <li>
                <FaWhatsapp /> +201222120629
              </li> */}
              <li>
                <a href="mailto:abduhady2@gmail.com">
                  <BiLogoGmail /> abduhady2@gmail.com
                  </a>
              </li>
              <li className="soical-media">
                <ul className="d-flex w-100 justify-content-around list-unstyled">
                  <li>
                    <a href="https://www.facebook.com/alhady.co" >
                      <FaFacebook  className='facebook-icon'/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/alhady.co" >
                      <FaInstagram  className='instagram-icon' />
                    </a>
                  </li>
                  <li>
                    <a href="tel:+201222120629">
                      <FaWhatsapp   className='whatsapp-icon'/>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-12 w-100 cpoywright align-items-center">
        <p>ALHADY ALL RIGHTS RESERVED © 2023</p>
      </div>
    </>
  )
}
