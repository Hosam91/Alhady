import b4 from './imgs/home/layout-01.webp'
import a from './imgs/faces/6_.webp'
import b from './imgs/faces/4_.webp'
import c from './imgs/faces/3_.webp'
import d from './imgs/faces/9_.webp'
import e from './imgs/faces/7_.webp'
import f from './imgs/faces/8_.webp'
import g from './imgs/faces/10_.webp'
import h from './imgs/faces/11_.webp'
import k from './imgs/zmety/19_.webp'
import l from './imgs/zmety/30_.webp'
import m from './imgs/zmety/31_.webp'
import o from './imgs/zmety/32_.webp'
import p from './imgs/zmety/36_.webp'
import q from './imgs/zmety/39_.webp'
import r from './imgs/zmety/43_.webp'
import s from './imgs/zmety/44_.webp'
import t from './imgs/zmety/45_.webp'
import u from './imgs/zmety/46_.webp'
import w from './imgs/zmety/50_.webp'
import x from './imgs/zmety/51_.webp'
import y from './imgs/hsooon/1_.webp'
import z from './imgs/hsooon/2_.webp'
import a1 from './imgs/hsooon/4_.webp'
import a2 from './imgs/hsooon/5_.webp'
import a3 from './imgs/hsooon/7_.webp'
import a4 from './imgs/hsooon/10_.webp'
import a5 from './imgs/hsooon/11_.webp'
import a6 from './imgs/hsooon/12_.webp'
import a7 from './imgs/hsooon/18_.webp'
import a8 from './imgs/hsooon/20_.webp'
import a9 from './imgs/hsooon/21_.webp'
import h1 from './imgs/hsooon/22_.webp'
import h2 from './imgs/hsooon/23_.webp'
import h3 from './imgs/hsooon/25_.webp'
import h4 from './imgs/hsooon/26_.webp'
import b1 from './imgs/bkr/10_.webp'
import b2 from './imgs/bkr/9_.webp'
import b3 from './imgs/bkr/8_.webp'
import b44 from './imgs/bkr/7_.webp'
import b5 from './imgs/bkr/6_.webp'
import b6 from './imgs/bkr/5_.webp'
import b7 from './imgs/bkr/4_.webp'
import b8 from './imgs/bkr/3_.webp'
import b9 from './imgs/bkr/2_.webp'
import b10 from './imgs/bkr/1_.webp'
import { useEffect, useState } from 'react'

// import h from './imgs/faces/11_.webp'

// import s from './OurProjects.module.css'
export default function OurProjects() {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Calculate the scroll threshold
    const scrollThreshold = 1000;

    // Check if the scroll position has reached the threshold
    if (scrollPosition >= scrollThreshold) {
      // Apply the animations for the columns
      document.querySelectorAll('.hovering').forEach((column, index) => {
        column.style.animationDelay = `${index * 0.5}s`;
        column.classList.add('animate');
      });
    }
  }, [scrollPosition]);
  
  return (
   
    <>
      <div className="row gappy container-fluid">
        <div className="col-md-12">
          <h1>Our Projects</h1>
          <div className="underline"></div>
        </div>

        {/* {`column ${isVisible ? 'show' : ''}`} */}
        <div className="col-md-4 hovering  left-column">
          <img src={b3} alt="" />
        </div>

        <div className="col-md-4 hovering middle-column">
          <img src={b9} alt="" />
        </div>

        <div className="col-md-4 hovering right-column ">
          <img src={b8} alt="" />
        </div>


        <div className="col-md-4 hovering  left-column">
          <img src={b7} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={b6} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={b5} alt="" />
        </div>
        <div className="col-md-4 hovering  left-column">
          <img src={b44} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={b3} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={b2} alt="" />
        </div>
        <div className="col-md-4 hovering  left-column">
          <img src={b1} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={b} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={c} alt="" />
        </div>
        <div className="col-md-4 hovering  left-column">
          <img src={d} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={e} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={f} alt="" />
        </div>
        <div className="col-md-4 hovering  left-column">
          <img src={g} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={h} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={b4} alt="" />
        </div>

     
        <div className="col-md-4 hovering  left-column">
          <img src={k} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={l} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={m} alt="" />
        </div>
        <div className="col-md-4 hovering  left-column">
          <img src={o} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={p} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={q} alt="" />
        </div>
        <div className="col-md-4 hovering  left-column">
          <img src={r} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={s} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={t} alt="" />
        </div>
        <div className="col-md-4 hovering  left-column">
          <img src={w} alt="" />
        </div>
        {/* <div className="col-md-4 hovering">
          <img src={v} alt="" />
        </div> */}
        <div className="col-md-4 hovering middle-column">
          <img src={u} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={x} alt="" />
        </div>
        <div className="col-md-4 hovering  left-column">
          <img src={y} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={z} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={a1} alt="" />
        </div>
        <div className="col-md-4 hovering  left-column">
          <img src={a2} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={a3} alt="" />
        </div>
        <div className="col-md-4 hovering">
          <img src={a4} alt="" />
        </div>
        <div className="col-md-4 hovering  left-column">
          <img src={a5} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={a6} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={a7} alt="" />
        </div>
        <div className="col-md-4 hovering  left-column">
          <img src={a8} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={a9} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={h1} alt="" />
        </div>
        <div className="col-md-4 hovering left-column">
          <img src={h2} alt="" />
        </div>
        <div className="col-md-4 hovering middle-column">
          <img src={h3} alt="" />
        </div>
        <div className="col-md-4 hovering right-column">
          <img src={h4} alt="" />
        </div>
      </div>
    </>
  )
}
