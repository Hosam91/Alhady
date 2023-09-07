import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import s from './Home.module.css'
import {
  Navigation,
  Pagination,
  A11y,
  Scrollbar,
  Autoplay,
  EffectCube,
  EffectCoverflow
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';



import contract from './imgs/home/contract.jpg'
import cover from './imgs/home/c2.jpg'

import b from './imgs/home/driving.jpg'
import c from './imgs/home/seafty.jpg'
import d from './imgs/home/trust.jpg'
import p1 from './imgs/faces/8_.webp'
import p2 from './imgs/faces/11_.webp'
import p3 from './imgs/home/layout-01.webp'
import p4 from './imgs/hsooon/21_.webp'
import p5 from './imgs/hsooon/15_.webp'
import p6 from './imgs/hsooon/12_.webp'
import p7 from './imgs/zmety/43_.webp'
import p8 from './imgs/zmety/50_.webp'
// import e from './imgs/5.jpeg'
// import f from './imgs/6.jpeg'

export default function Home()
{
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const servicRef = useRef(null)
  const [isServicVisible, setIscVisible] = useState(false)
 
  // window.addEventListener('scroll', handleScroll)


  useEffect(() =>
  {
    const handleScroll = () =>
    {
      let position = sectionRef.current.getBoundingClientRect().y;
      // console.log(position);
      if (window.scrollY >= position+500)
      {
        // console.log('visable');
        setIsVisible(true)
        }
    }
     window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  useEffect(() =>
  {
    const handleScroll = () =>
    {
      let position = servicRef.current.getBoundingClientRect().y;
      // console.log(position);
      if (window.scrollY >= position+500)
      {
        // console.log('visable');
        setTimeout(setIscVisible(true), 3000);

        }
    }
     window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  

  return (
    <>
      <div className="row row-h"  id='home'>
        <div className="col-md-12 ">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2000 }}
            
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            className={s.myswipper}
           
          >
            <SwiperSlide className={s.slidy1}>
              <img src={b} alt="Image 1" />
              <div className="over">

              <h3 className='stext'>Seafty & Creativity the Core of every project</h3>
              </div>
            </SwiperSlide>

            <SwiperSlide className={s.slidy2}>
              <img src={c} alt="Image 2" />
              <h3 className='stext'>Trust our team bring you vision to life</h3>
            </SwiperSlide>

            <SwiperSlide className={s.slidy3}>
                            <div className="over">
                            <img src={d} alt="Image 2" />

                <h3 className='stext'>Key Steps To Bring Your Vision To Life</h3>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className=" about-section  mt-1  " ref={sectionRef}>
        <div className="row container-fluid aboutCont">
        {/* className="col-md-6 b p-2 about-img  aboutCont image-container" */}
          <div className={`col-md-6 b  about-img  ${isVisible&&'image-container'} `}>
            <img src={cover} alt="d" className="w-100 p-2 " />
          </div>
          {/* className="col-md-6  p-2 text-container"  */}
          <div className={`col-md-6  ${isVisible&&'text-container'}`}>
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
        effect={'coverflow'}
        grabCursor={true}
          centeredSlides={true}
          autoplay={{ delay: 500 }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper EffectCoverflow mt-3"
      >
        <SwiperSlide>
        <img src={p1} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p2} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p3} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p4} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p5} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p6} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p7} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p8} alt="pro 1" />
        </SwiperSlide>
       
      </Swiper>

        </div>
          {/* <div className="col-md-12">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
              spaceBetween={10}
              slidesPerView={2}
              autoplay={{ delay: 2000 }}
              navigation
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log('slide change')}
              className="col-md-12"
            >
              <SwiperSlide className="projects-slide">
                <img src={p1} alt="pro 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
              <img src={p3} alt="pro 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
              <img src={p2} alt="pro 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
              <img src={p4} alt="pro 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
              <img src={p5} alt="pro 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
              <img src={p6} alt="pro 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
              <img src={p7} alt="pro 1" />
              </SwiperSlide>
              <SwiperSlide className="projects-slide">
              <img src={p8} alt="pro 1" />
              </SwiperSlide>
            </Swiper>
          </div> */}
          <Link to="/projects" className='text-center mt-5'>
            <button className="btn  see-more-btn "> View All Projects</button>
          </Link>
        </div>
      </div>
      
      {/* <div className="row container">
        <div className="col-md-12">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
          centeredSlides={true}
          autoplay={{ delay: 500 }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper EffectCoverflow"
      >
        <SwiperSlide>
        <img src={p1} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p2} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p3} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p4} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p5} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p6} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p7} alt="pro 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p8} alt="pro 1" />
        </SwiperSlide>
       
      </Swiper>

        </div>
      
      </div> */}
      <div className="Services row  container-fluid my-3" ref={servicRef}>
        <div className="col-md-12 ">
          <div className="heading container mb-5">
            <h2 className="section-head">Our Services</h2>
            <h2 className="section-head-shadow">OUR Services</h2>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className={`card ${isServicVisible && 'text-container'}`}>
                
              {/* className="card-img-top" */}
               
                <img src={contract}   className={`card-img-top ${isServicVisible && 'image-container'}`} alt="..." />
                <div className={`card-body ${isServicVisible && 'text-container'}`}  >
                  <h5 className="card-title" >Contracting</h5>
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
              <div className={`card ${isServicVisible && 'image-container'}`}>
                <img src={p2} className={`card-img-top ${isServicVisible && 'image-container'}`} alt="..." />
                <div  className={`card-body ${isServicVisible && 'text-container'}`} >
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
                <img src={b} className={`card-img-top ${isServicVisible && 'image-container'}`} alt="..." />
                <div className={`card-body ${isServicVisible && 'text-container'}`} >
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
              <div className={`card ${isServicVisible && 'image-container'}`}>
                <img src={cover} className={`card-img-top ${isServicVisible && 'image-container'}`} alt="..." />
                <div className={`card-body ${isServicVisible && 'text-container'}`} >
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
              <div className={`card ${isServicVisible && 'text-container'}`}>
                <img src={p3} className={`card-img-top ${isServicVisible && 'image-container'}`} alt="..." />
                <div className={`card-body ${isServicVisible && 'text-container'}`} >
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
