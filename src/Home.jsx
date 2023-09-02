import React from 'react'
import { Link } from 'react-router-dom'

import s from './Home.module.css'
import {
  Navigation,
  Pagination,
  A11y,
  Scrollbar,
  Autoplay,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

import contract from './imgs/home/contract.jpg'
import inter from './imgs/home/inter.jpg'
import key from './imgs/home/key.jpg'

import b from './imgs/home/b2.jpg'
import c from './imgs/home/c2.jpg'
import d from './imgs/home/b1.jpg'
// import e from './imgs/5.jpeg'
// import f from './imgs/6.jpeg'

export default function Home() {
  return (
    <>
      <div className="row row-h"  id='home'>
        <div className="col-md-12 ">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className={s.myswipper}
           
          >
            <SwiperSlide className={s.slidy1}>
              {/* <img src={b} alt="Image 1" /> */}
              <h3 className='stext'>Seafty & Creativity the Core of every project</h3>
            </SwiperSlide>

            <SwiperSlide className={s.slidy2}>
              {/* <img src={c} alt="Image 2" /> */}
              <h3 className='stext'>Trust our team bring you vision to life</h3>
            </SwiperSlide>

            <SwiperSlide className={s.slidy3}>
              <h3 className='stext'>Key Steps To Bring Your Vision To Life</h3>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className=" about-section  mt-1">
        <div className="row container-fluid">
          <div className="col-md-6 b p-2 about-img">
            <img src={c} alt="d" className="w-100 p-2 " />
          </div>
          <div className="col-md-6  p-2">
            <h3 className="p-2">About Us</h3>
            <p className="our-text ">
              Alhady Consulting Engineers your trusted partner in engineering
              excellence. As a premier engineering consulting firm, we
              specialize in providing innovative solutions that drive growth and
              elevate projects to new heights. With a relentless commitment to
              precision, creativity, and collaboration, we've built a reputation
              for delivering exceptional engineering services tailored to meet
              the unique needs of each client.
            </p>
            <Link to="/about">
              <button className="btn  see-more-btn"> Read More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="projects-section mt-5 mb-5">
        <div className="row container-fluid">
          <h3 className="text-center">Our Projects</h3>
          <div className="col-md-12">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
              spaceBetween={10}
              slidesPerView={3}
              autoplay={{ delay: 2000 }}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className="col-md-12"
            >
              <SwiperSlide className="projects-slide">
                <img src={b} alt="Image 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
                <img src={b} alt="Image 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
                <img src={b} alt="Image 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
                <img src={b} alt="Image 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
                <img src={b} alt="Image 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
                <img src={b} alt="Image 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
                <img src={b} alt="Image 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
                <img src={b} alt="Image 1" />
              </SwiperSlide>
            </Swiper>
          </div>
          <Link to="/projects" className='text-center'>
            <button className="btn  see-more-btn "> View All Projects</button>
          </Link>
        </div>
      </div>
      <div className="Services row  container-fluid my-3">
        <div className="col-md-12 ">
          <div className="heading container mb-5">
            <h2 className="section-head">Our Services</h2>
            <h2 className="section-head-shadow">OUR Services</h2>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card">
                <img src={contract} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Contracting</h5>
                  <p className="card-text">
                    We serve you with the common goal of finishing the project
                    on time and within budget. We also provide expert assistance
                    to our clients through each phase of the project, from
                    design to implementation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={b} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">ARCHITECTURE</h5>
                  <p className="card-text">
                    We take a comprehensive approach to design, working from
                    inception to completion to turn an architectural vision into
                    reality with pragmatic ideas that are economic and
                    achievable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={b} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">PROJECT DEVELOPMENT</h5>
                  <p className="card-text">
                    We provide both conceptual and strategic approaches. We
                    offer programming, planning, budgeting, designing,
                    construction services as well as turnkey solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-around my-4">
            <div className="col-md-4">
              <div className="card">
                <img src={inter} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">INTERIOR DESIGN</h5>
                  <p className="card-text">
                    We design interior living & working spaces to make them
                    functional, appealing and well-suited to your needs as well
                    as aesthetic and functional spaces that communicate with
                    your personality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={key} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">TURN KEY PROJECTS</h5>
                  <p className="card-text">
                    The Design-Build process. ALHADY. offers a Turnkey solution
                    for your projects including full design and bespoke build
                    services with its many advantages starting from the
                    integrated design,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/about " className="text-center">
          <button className="btn  see-more-btn "> Finde More ..!</button>
        </Link>
      </div>
    </>
  )
}
