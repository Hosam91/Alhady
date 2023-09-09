import React, { useEffect, useState, useRef } from 'react'
import cover from './imgs/home/cover_.webp'
import contract from './imgs/home/contract.jpg'
import flat1 from './imgs/flat/1.jpg'
import interior from './imgs/designs/36.jpg'
import p2 from './imgs/faces/11_.webp'
import arch from './imgs/kharasana/6..jpg'

import {
  Navigation,
  Pagination,
  A11y,
  Scrollbar,
  Autoplay,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

export default function About() {
  const servicRef1 = useRef(null)
  const [isServicVisible1, setIsServicVisible1] = useState(false)
  const servicRef2 = useRef(null)
  const [isServicVisible2, setIsServicVisible2] = useState(false)
  const servicRef3 = useRef(null)
  const [isServicVisible3, setIsServicVisible3] = useState(false)
  const servicRef4 = useRef(null)
  const [isServicVisible4, setIsServicVisible4] = useState(false)
  const servicRef5 = useRef(null)
  const [isServicVisible5, setIsServicVisible5] = useState(false)

  // useEffect(() =>
  // {
  //   const handleScroll = (ref,setTrue) =>
  // {
  //   let position = ref.current.getBoundingClientRect().y;
  //   // console.log(position);
  //   if (window.scrollY >= position+500)
  //   {
  //     // console.log('visable');
  //     // setTimeout(, 3000);
  //     setTrue(true)

  //     }
  // }

  //   handleScroll(servicRef, setIscVisible);

  //    window.addEventListener('scroll', handleScroll);
  //   handleScroll();
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [])
  useEffect(() => {
    const handleScroll = (ref, setTrue) => {
      const position = ref.current
        ? ref.current.getBoundingClientRect().y
        : null
      // console.log(position);
      if (window.scrollY >= position + 700) {
        // console.log('visable');
        // setTimeout(, 3000);
        // setIsServicVisible(true)

        if (typeof callbackFunction === 'function') {
          setTrue(true)
          console.log(isServicVisible1)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // handleScroll(servicRef,setIsServicVisible);
    //  handleScroll();
    handleScroll(servicRef1, setIsServicVisible1)
    handleScroll(servicRef2, setIsServicVisible2)
    handleScroll(servicRef3, setIsServicVisible3)
    handleScroll(servicRef4, setIsServicVisible4)
    handleScroll(servicRef5, setIsServicVisible5)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <div className="bgab " id="about">
        <div className="row h-100  no-gutters">
          <div className="col-md-12 position-relative h-50 about-header ">
            {/* <img src={cover} alt="" className='bg-abou w-100 h-100' /> */}
            <div className="heading position-relative">
              <h2 className="text-center section-head  ">ABOUT US</h2>
              {/* <h2 className="section-head-shadow">ABOUT Us</h2> */}
            </div>

            <div className="row no-gutters">
              <div className="col-md-12 ">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{ delay: 2000 }}
                  navigation
                  // onSwiper={(swiper) => console.log(swiper)}
                  //     onSlideChange={() => console.log('slide change')}
                  className=" container about-slide"
                >
                  <SwiperSlide className=" about-swiper   p-5 ">
                    <div className="about-slid p-2">
                      <h4>Vission</h4>
                      <p>
                        To be the most trusted firm in the region for innovative
                        design, project management and consulting engineering
                        services through our commitment to quality, safety,
                        sustainability, and client satisfaction{' '}
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="  p-5">
                    <div className="about-slid p-2">
                      <h4>Mission</h4>
                      <p>
                        We are dedicated to providing the highest quality
                        architectural design, technical expertise and project
                        management services to our clients in a manner centered
                        on trust and professionalism.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=" p-5">
                    <div className="about-slid p-2">
                      <h4>Values</h4>
                      <p> Integrity | Respect | Teamwork | Creativity</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12 position-relative p-0 m-auto">
              <img src={cover} className="w-100 mt-2 rounded" alt="" />
            </div>
          </div>
        </div>

        <div className="row no-gutters m-0">
          <div className="col-md-12 position-relative">
            <div className="container">
              <div className="heading">
                <h2 className="section-head">Our History</h2>
              </div>
              <div className="history-text p-3">
                <h4 className="p-2">
                  Rooted in an internationally recognized foundation
                </h4>
                <p className="our-text">
                  Alhady Consulting Engineers your trusted partner in
                  engineering excellence. As a premier engineering consulting
                  firm, we specialize in providing innovative solutions that
                  drive growth and elevate projects to new heights. With a
                  relentless commitment to precision, creativity, and
                  collaboration, we've built a reputation for delivering
                  exceptional engineering services tailored to meet the unique
                  needs of each client.
                </p>
                <p className="our-text">
                  Our team of seasoned engineers, architects, and technical
                  experts brings a wealth of experience across diverse
                  industries, enabling us to tackle challenges of any scale and
                  complexity. From concept design to project execution, we pride
                  ourselves on our ability to seamlessly integrate cutting-edge
                  technology, sustainable practices, and industry best practices
                  to create solutions that stand the test of time.
                </p>

                <p className="our-text">
                  At Alhady Consulting Engineers our mission is to not only meet
                  but exceed client expectations by consistently delivering
                  results that exceed industry standards. We understand that
                  every project is an opportunity to make a lasting impact, and
                  we approach each endeavor with passion, precision, and a
                  commitment to excellence.
                </p>
                <p className="our-text">
                  As we continue to expand our horizons, our dedication to
                  continuous improvement remains unwavering. We strive to be at
                  the forefront of technological advancements and industry
                  trends, ensuring that our clients receive the most advanced
                  and forward-thinking solutions available.
                </p>
              </div>
            </div>
          </div>
        </div>

     
        <div className="Services row  container-fluid my-3" ref={servicRef1}>
          <div className="col-md-12 ">
            <div className="heading container mb-5">
              {/* <h2 className="section-head-shadow">OUR Services</h2> */}
            </div>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className={`card ${isServicVisible1 && 'text-container'}`}>
                  {/* className="card-img-top" */}

                  <img
                    src={contract}
                    className={`card-img-top ${
                      isServicVisible1 && 'image-container'
                    }`}
                    alt="..."
                  />
                  <div
                    className={`card-body ${
                      isServicVisible2 && 'text-container'
                    }`}
                  >
                    <h5 className="card-title">Contracting</h5>
                    <p className="card-text">
                      We serve you with the common goal of finishing the project
                      on time and within budget. We also provide expert
                      assistance to our clients through each phase of the
                      project, from design to implementation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`card ${isServicVisible2 && 'image-container'}`}
                >
                  <img
                    src={p2}
                    className={`card-img-top ${
                      isServicVisible3 && 'image-container'
                    }`}
                    alt="..."
                  />
                  <div
                    className={`card-body ${
                      isServicVisible3 && 'text-container'
                    }`}
                  >
                    <h5 className="card-title">ARCHITECTURE</h5>
                    <p className="card-text">
                      We take a comprehensive approach to design, working from
                      inception to completion to turn an architectural vision
                      into reality with pragmatic ideas that are economic and
                      achievable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src={arch}
                    className={`card-img-top ${
                      isServicVisible4 && 'image-container'
                    }`}
                    alt="..."
                  />
                  <div
                    className={`card-body ${
                      isServicVisible4 && 'text-container'
                    }`}
                  >
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
                <div
                  className={`card ${isServicVisible5 && 'image-container'}`}
                >
                  <img
                    src={interior}
                    className={`card-img-top ${
                      isServicVisible5 && 'image-container'
                    }`}
                    alt="..."
                  />
                  <div
                    className={`card-body ${
                      isServicVisible5 && 'text-container'
                    }`}
                  >
                    <h5 className="card-title">INTERIOR DESIGN</h5>
                    <p className="card-text">
                      We design interior living & working spaces to make them
                      functional, appealing and well-suited to your needs as
                      well as aesthetic and functional spaces that communicate
                      with your personality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`card ${isServicVisible5 && 'text-container'}`}>
                  <img
                    src={flat1}
                    className={`card-img-top ${
                      isServicVisible5 && 'image-container'
                    }`}
                    alt="..."
                  />
                  <div
                    className={`card-body ${
                      isServicVisible5 && 'text-container'
                    }`}
                  >
                    <h5 className="card-title">TURN KEY PROJECTS</h5>
                    <p className="card-text">
                      The Design-Build process. ALHADY. offers a Turnkey
                      solution for your projects including full design and
                      bespoke build services with its many advantages starting
                      from the integrated design,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
