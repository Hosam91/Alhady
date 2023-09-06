import React from 'react'
import logo from './imgs/logo.png'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
export default function Footer() {
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
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">project</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
                  <FaLocationArrow className="" /> Central area -New Damiatta
                  -Damiatta
                </p>
              </li>
              <li>
                <FaPhone /> +201222120629
              </li>
              <li>
                <FaWhatsapp /> +201222120629
              </li>
              <li>
                <BiLogoGmail /> abduhady2@gmail.com
              </li>
              <li className="soical-media">
                <ul className="d-flex w-100 justify-content-around list-unstyled">
                  <li>
                    <a href="https://www.facebook.com/alhady.co">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/alhady.co">
                      <FaInstagram />
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
